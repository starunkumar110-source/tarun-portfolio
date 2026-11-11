
import { useEffect, useState } from "react";
import "./Home.css";

import Profile from "../assets/images/tarun.jpg";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaEnvelope,
  FaArrowRight,
  FaArrowDown,
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBolt,
  FaLaptopCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "React.js Developer",
  "Frontend Developer",
  "Web Application Developer",
  "JavaScript Developer",
];

const technologies = [
  { name: "React.js", icon: FaReact, color: "cyan" },
  { name: "Node.js", icon: FaNodeJs, color: "green" },
  { name: "JavaScript", icon: FaCode, color: "pink" },
  { name: "MongoDB", icon: FaDatabase, color: "blue" },
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="home" id="home">
      {/* Animated background */}
      <div className="home-background" aria-hidden="true">
        <div className="home-aurora aurora-pink" />
        <div className="home-aurora aurora-blue" />
        <div className="home-aurora aurora-green" />
        <div className="home-grid" />
        <div className="home-noise" />
      </div>

      <div className="home-container">
        {/* LEFT CONTENT */}
        <div className="home-content">
          <div className="home-availability">
            <span className="availability-dot" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
            <span className="availability-sparkle">✦</span>
          </div>

          <div className="home-intro">
            <span className="intro-line" />
            <span>Hiii</span>
            <span className="intro-line" />
          </div>

          <h1 className="home-title">
            <span className="title-small">I'M</span>
            <span className="title-first">Tarun Kumar Saini</span>
          </h1>

          <div className="home-role-wrap">
            <span className="role-code">&lt;</span>
            <h2 className="home-role" aria-live="polite">
              <span key={roleIndex} className="role-animated">
                {roles[roleIndex]}
              </span>
            </h2>
            <span className="role-slash">/&gt;</span>
          </div>

          <p className="home-tagline">
            Turning <span>ideas</span> into
            <span className="tagline-green"> digital experiences.</span>
          </p>

          <p className="home-description">
            I build modern, responsive and interactive web applications
            using <strong>HTML, CSS, JavaScript, React.js and Redux.</strong>
            I also work with <strong>Node.js, Express.js, REST APIs and
            MongoDB</strong> to create complete full-stack solutions with
            beautiful interfaces and reliable functionality.
          </p>

          {/* Technology pills */}
          <div className="home-tech-stack">
            {technologies.map(({ name, icon: Icon, color }) => (
              <span className={`tech-pill tech-${color}`} key={name}>
                <Icon />
                {name}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="home-buttons">
            <a href="#contact" className="home-btn home-btn-primary">
              <span className="btn-icon">
                <FaEnvelope />
              </span>
              <span>Let's Work Together</span>
              <FaArrowRight className="btn-arrow" />
            </a>

            <a href="#projects" className="home-btn home-btn-secondary">
              <FaLaptopCode />
              <span>Explore Projects</span>
              <FaExternalLinkAlt className="btn-arrow" />
            </a>
          </div>

          <a href="/Tarun_Kumar_Saini_Resume.pdf" download className="home-resume">
            <FaDownload />
            Download My Resume
            <span className="resume-line" />
          </a>

          {/* Social links */}
          <div className="home-social-area">
            <div className="social-heading">
              <span className="social-heading-line" />
              <span>CONNECT WITH ME</span>
            </div>  

            <div className="home-social-bottom">
              <div className="home-social-icons">
                <a
                  href="https://github.com/starunkumar110-source"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/tarun-kumar-saini-bb36b9378/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/t.k.s_bansur/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="home-mantra">
                <span>Code.</span>
                <span>Create.</span>
                <span>Innovate.</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PROFILE VISUAL */}
        <div className="home-visual">
        

          {/* Decorative orbits */}
          <div className="profile-orbit orbit-one" />
          <div className="profile-orbit orbit-two" />
          <div className="profile-orbit orbit-three" />

          <div className="profile-halo" />

          {/* Main glass profile card */}
          <div className="profile-card">
            <div className="profile-card-top">
              <div className="profile-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="profile-card-label">CREATIVE DEVELOPER</span>
              <FaCode className="profile-card-code" />
            </div>

            <div className="profile-image-wrapper">
              <div className="profile-image-backdrop" />

              <img
                src={Profile}
                alt="Tarun Kumar Saini - Full Stack Developer"
                className="profile-image"
              />

              <div className="profile-image-overlay" />
              <div className="profile-image-corner corner-top-left" />
              <div className="profile-image-corner corner-bottom-right" />
            </div>

            <div className="profile-card-info">
              <div className="profile-name-row">
                <div className="divcard">
                  <h3>Tarun Kumar Saini</h3>
                </div>
              </div>

            </div>

            <div className="profile-card-bottom">
              <span>DESIGN</span>
              <span className="bottom-cross">✳</span>
              <span>DEVELOP</span>
              <span className="bottom-cross">✳</span>
              <span>DEPLOY</span>
            </div>
          </div>

          {/* Floating technology cards */}
       

          <div className="visual-bottom-note">
            <span className="visual-bottom-line" />
            <span>ENGINEERING THE DIGITAL FUTURE</span>
          </div>
        </div>
      </div>

      {/* Bottom information strip */}
      <div className="home-stats">
        <div className="home-stat">
          <span className="stat-icon stat-pink">
            <FaCode />
          </span>
          <div>
            <h3>Frontend + Backend</h3>
            <p>Full Stack Development</p>
          </div>
        </div>

        <div className="home-stat-divider" />

        <div className="home-stat">
          <span className="stat-icon stat-blue">
            <FaLaptopCode />
          </span>
          <div>
            <h3>Modern Web</h3>
            <p>Responsive Experiences</p>
          </div>
        </div>

        <div className="home-stat-divider" />

        <div className="home-stat">
          <span className="stat-icon stat-green">
            <FaBolt />
          </span>
          <div>
            <h3>Always Learning</h3>
            <p>Building Better Every Day</p>
          </div>
        </div>
      </div>

      <a href="#about" className="home-scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-icon">
          <FaArrowDown />
        </span>
      </a>
    </section>
  );
}

export default Home;
