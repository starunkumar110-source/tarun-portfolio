
import React from "react";
import "./About.css";
import {
  FaUserAstronaut,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaArrowRight,
  FaMapMarkerAlt,
  FaRocket,
} from "react-icons/fa";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "Tailwind CSS",
  "React.js",
  "Redux",
  "Node.js",
  "REST APIs",
];

function About() {
  return (
    <section className="about-section" id="about">
      {/* Full Background Image */}
      <div className="about-background"></div>
      <div className="about-overlay"></div>

      {/* Background Decorations */}
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">
        {/* About Content Over Background */}
        <div className="about-content">
          <span className="about-eyebrow">
            <FaUserAstronaut />
            GET TO KNOW ME
          </span>

          <h1 className="about-title">
            About <span>Me.</span>
          </h1>

          <h2 className="about-subtitle">
            Turning Ideas Into
            <br />
            <span>Digital Experiences.</span>
          </h2>

          <p className="about-description">
            Hello! I'm <strong>Tarun Kumar Saini</strong>, an enthusiastic
            Full Stack Web Developer from Kotputli-Behror, Rajasthan.
            I enjoy creating modern, attractive, user-friendly, and
            responsive web applications.
          </p>

          <p className="about-description">
            I have pursued a two-year Full Stack Development course at
            <strong> TIPSG, Kotputli</strong>, where I studied modern
            web technologies and developed my skills through practical
            projects.
          </p>

          <p className="about-description">
            My technical skills include HTML, CSS, JavaScript, Bootstrap,
            Tailwind CSS, React.js, Redux, Node.js, and REST APIs.
            I enjoy building engaging user interfaces and complete
            web applications.
          </p>

          <p className="about-description">
            Alongside my technical education, I am pursuing B.Sc. (PCM)
            at Matsya PG College, Bansur, affiliated with RRBMU,Alwar.
            My goal is to solve real-world problems through digital
            solutions and grow as a skilled Full Stack Developer.
          </p>

          {/* Skills */}
          <div className="about-skills">
            {skills.map((skill) => (
              <span className="about-skill" key={skill}>
                <FaCode />
                {skill}
              </span>
            ))}
          </div>

          {/* Education Details */}
          <div className="about-details">
            <div className="about-detail">
              <span className="about-detail-icon">
                <FaGraduationCap />
              </span>

              <div>
                <small>Education</small>
                <strong>B.Sc. (PCM)</strong>
              </div>
            </div>

            <div className="about-detail">
              <span className="about-detail-icon">
                <FaLaptopCode />
              </span>

              <div>
                <small>Specialization</small>
                <strong>Full Stack Development</strong>
              </div>
            </div>

            <div className="about-detail">
              <span className="about-detail-icon">
                <FaMapMarkerAlt />
              </span>

              <div>
                <small>Location</small>
                <strong>Rajasthan, India</strong>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="about-actions">
            <a href="#skills" className="about-button">
              Explore My Skills
              <FaArrowRight />
            </a>

            <span className="about-motto">
              <FaRocket />
              Learn. Build. Grow.
            </span>
          </div>
        </div>

        {/* Keep the Right Side Clear for Your Photo */}
        <div className="about-photo-space" aria-hidden="true"></div>

        {/* Bottom Tagline */}
        <div className="about-bottom">
          <span className="about-bottom-line"></span>
          <p>
            Passionate about code. Focused on{" "}
            <strong>creating impact.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
