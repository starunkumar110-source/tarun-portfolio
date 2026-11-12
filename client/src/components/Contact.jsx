
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";

import "./Contact.css";

// Live Render backend API URL
const API_URL =
  "https://tarun-portfolio-backend.onrender.com/api/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email Me",
      value: "starunkumar110@gmail.com",
      href: "mailto:starunkumar110@gmail.com",
      color: "cyan",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Me",
      value: "9887560939",
      href: "tel:+919887560939",
      color: "purple",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Rajasthan, India",
      href: "",
      color: "pink",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/starunkumar110-source",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tarun-kumar-saini-bb36b9378/",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://www.instagram.com/t.k.s_bansur/",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
    setStatusMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your message.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitted(false);
    setStatusMessage("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your message."
        );
      }

      setSubmitted(true);
      setStatusMessage(
        "Your message has been saved successfully. Thank you for contacting me!"
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitted(false);
      setStatusMessage(
        error.message ||
          "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <header className="contact-heading">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-dot"></span>
            LET'S CONNECT
          </span>

          <h2>
            Get In <span>Touch</span>
          </h2>

          <p>
            Have a project idea, collaboration opportunity, or just want
            to connect? Send me a message.
          </p>
        </header>

        <div className="contact-layout">
          <aside className="contact-sidebar">
            <div className="contact-sidebar-heading">
              <span className="contact-mini-label">
                CONTACT DETAILS
              </span>

              <h3>Let's talk about your next idea.</h3>

              <p>
                I'm interested in web development projects, learning
                opportunities, internships, and professional collaborations.
              </p>
            </div>

            <div className="contact-details">
              {contactDetails.map((detail) => (
                <div
                  className={`contact-detail contact-detail-${detail.color}`}
                  key={detail.title}
                >
                  <div className="contact-detail-icon">
                    {detail.icon}
                  </div>

                  <div className="contact-detail-text">
                    <span>{detail.title}</span>

                    {detail.href ? (
                      <a href={detail.href}>{detail.value}</a>
                    ) : (
                      <p>{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social-area">
              <span className="contact-mini-label">FOLLOW ME</span>

              <div className="contact-socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-decoration contact-decoration-one"></div>
            <div className="contact-decoration contact-decoration-two"></div>
          </aside>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-mini-label">
                SEND A MESSAGE
              </span>

              <h3>Let's start a conversation</h3>

              <p>
                Fill in the details below to send your message directly
                to the portfolio backend.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-input-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name</label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    disabled={isSubmitting}
                  />

                  {errors.name && (
                    <span
                      className="contact-error"
                      id="contact-name-error"
                    >
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address</label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                    disabled={isSubmitting}
                  />

                  {errors.email && (
                    <span
                      className="contact-error"
                      id="contact-email-error"
                    >
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? "contact-subject-error" : undefined
                  }
                  disabled={isSubmitting}
                />

                {errors.subject && (
                  <span
                    className="contact-error"
                    id="contact-subject-error"
                  >
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  disabled={isSubmitting}
                />

                {errors.message && (
                  <span
                    className="contact-error"
                    id="contact-message-error"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending Message..."
                  : "Send Message"}

                <FaPaperPlane />
              </button>

              {statusMessage && (
                <p
                  className={
                    submitted
                      ? "contact-success"
                      : "contact-error"
                  }
                  role="status"
                  aria-live="polite"
                >
                  {submitted && <FaCheckCircle />}
                  {statusMessage}
                </p>
              )}

              <p className="contact-form-note">
                Your message is submitted to the portfolio backend
                and saved in the database when the submission succeeds.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
