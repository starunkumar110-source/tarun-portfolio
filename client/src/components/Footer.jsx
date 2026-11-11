
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaHeart,
  FaCode,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-bracket">&lt;</span>
              Tarun
              <span className="footer-logo-highlight">.</span>
              <span className="footer-logo-bracket">/&gt;</span>
            </a>

            <p className="footer-description">
              Aspiring Full Stack Developer passionate about creating
              modern, responsive, and interactive web experiences.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="footer-social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h3>Quick Links</h3>

            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">My Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="footer-links-column">
            <h3>My Expertise</h3>

            <ul className="footer-links">
              <li><a href="#skills">Frontend Development</a></li>
              <li><a href="#skills">React.js Development</a></li>
              <li><a href="#skills">Responsive Websites</a></li>
              <li><a href="#skills">REST API Integration</a></li>
              <li><a href="#skills">Backend Development</a></li>
              <li><a href="#projects">Web Projects</a></li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="footer-cta">
            <span className="footer-availability">
              <span className="availability-dot"></span>
              OPEN TO OPPORTUNITIES
            </span>

            <h3>
              Let's build something
              <span> amazing.</span>
            </h3>

            <p>
              Have a project or opportunity in mind? Let's connect and
              create something great together.
            </p>

            <a href="#contact" className="footer-contact-btn">
              Let's Talk <span>↗</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <span>Tarun Kumar Saini</span>.
            All rights reserved.
          </p>

          <p className="footer-made-with">
            Made with <FaHeart className="footer-heart" /> and{" "}
            <FaCode className="footer-code-icon" /> by Tarun
          </p>

          <button
            type="button"
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
