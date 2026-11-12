
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
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

// Brevo email API
async function sendContactEmail({
  name,
  email,
  subject,
  message,
}) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const receiverEmail = process.env.EMAIL_USER;

  if (!apiKey || !senderEmail || !receiverEmail) {
    throw new Error(
      "Missing BREVO_API_KEY, BREVO_SENDER_EMAIL, or EMAIL_USER."
    );
  }

  const response = await fetch(
    "https://api.brevo.com/v3/smtp/email",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Tarun Kumar Saini - Portfolio",
          email: senderEmail,
        },
        to: [
          {
            email: receiverEmail,
            name: "Tarun Kumar Saini",
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `Portfolio Contact: ${subject}`,
        textContent: `New message received from your portfolio.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`,
      }),
      signal: AbortSignal.timeout(20000),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();

    // Do not log the API key or request headers.
    console.error(
      "Brevo API error:",
      response.status,
      errorText
    );

    throw new Error(
      `Brevo email request failed with status ${response.status}.`
    );
  }

  const result = await response.json();

  console.log(
    "Brevo accepted email request. Message ID:",
    result.messageId || "not provided"
  );

  return result;
}

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

    // Send notification using Brevo
    try {
      await sendContactEmail({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
      });

      return res.status(201).json({
        success: true,
        emailSent: true,
        message:
          "Your message has been saved successfully. Thank you for contacting me!",
      });
    } catch (emailError) {
      console.error(
        "Email notification failed:",
        emailError.message
      );

      return res.status(201).json({
        success: true,
        emailSent: false,
        message:
          "Your message was saved, but the email notification could not be sent. Please try again later.",
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
      throw new Error(
        "MONGO_URI is missing from environment variables."
      );
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
