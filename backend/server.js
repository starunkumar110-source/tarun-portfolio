
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Contact from "./models/Contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Frontend URLs allowed to access this backend
const allowedOrigins = [
  "http://localhost:5173",
  "https://tarun-portfolio-eta.vercel.app",
];

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.error("Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Gmail SMTP configuration with timeouts
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio Backend is running!",
  });
});

// Health check
app.get("/healthz", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is healthy!",
  });
});

// Contact form API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Save contact message to MongoDB first
    await Contact.create({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
    });

    // Check Gmail configuration
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_APP_PASSWORD
    ) {
      console.error("Gmail environment variables are missing.");

      return res.status(201).json({
        success: true,
        emailSent: false,
        message:
          "Message saved successfully, but email notification is not configured.",
      });
    }

    // Send Gmail notification
    try {
      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: cleanEmail,
        subject: `Portfolio Contact: ${cleanSubject}`,
        text: `New message received from your portfolio.

Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Message:
${cleanMessage}`,
      });

      console.log("Email notification sent successfully!");

      return res.status(201).json({
        success: true,
        emailSent: true,
        message:
          "Your message has been saved successfully. Thank you for contacting me!",
      });
    } catch (emailError) {
      console.error("Gmail sending error:", emailError.message);

      return res.status(201).json({
        success: true,
        emailSent: false,
        message:
          "Your message has been saved successfully. Email notification could not be sent right now.",
      });
    }
  } catch (error) {
    console.error("Contact API error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to process your message. Please try again.",
    });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err.message);

  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "This website is not allowed to access the API.",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from environment variables.");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server started successfully on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup error:", error.message);
    process.exit(1);
  }
};

startServer();
