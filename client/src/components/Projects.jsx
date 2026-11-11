
import React from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

import Portfolio from "../assets/images/portfolio.jpg";
import TaskManager from "../assets/images/task-manager.jpg";
import StudentManagement from "../assets/images/student-management.jpg";
import Ecommerce from "../assets/images/ecommerce.jpg";
import Agency from "../assets/images/agency.jpg";
import ContactForm from "../assets/images/contact-form.jpg";

import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Frontend Development",
    image: Portfolio,
    description:
      "A modern, responsive portfolio website to showcase my profile, technical skills, projects, certificates, and contact information.",
    tech: ["React.js", "CSS", "JavaScript"],
    demo: "",
    github: "",
  },
  {
    id: 2,
    title: "Task Manager",
    category: "Web Application",
    image: TaskManager,
    description:
      "A task management application concept designed to organize daily tasks, track progress, and improve productivity.",
    tech: ["React.js", "JavaScript", "CSS"],
    demo: "",
    github: "",
  },
  {
    id: 3,
    title: "Student Management",
    category: "Full Stack",
    image: StudentManagement,
    description:
      "A student management dashboard concept for organizing student records and displaying academic information in a structured interface.",
    tech: ["React.js", "Node.js", "REST API"],
    demo: "",
    github: "",
  },
  {
    id: 4,
    title: "E-Commerce UI",
    category: "Frontend Development",
    image: Ecommerce,
    description:
      "A modern shopping interface with product displays, attractive layouts, and a responsive user experience.",
    tech: ["React.js", "CSS", "JavaScript"],
    demo: "",
    github: "",
  },
  {
    id: 5,
    title: "Agency Landing Page",
    category: "Web Design",
    image: Agency,
    description:
      "A professional agency landing page concept with a modern hero section, service highlights, and clear call-to-action elements.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "",
    github: "",
  },
  {
    id: 6,
    title: "Contact Form UI",
    category: "UI Design",
    image: ContactForm,
    description:
      "A clean, responsive contact form interface designed to collect visitor details and project inquiries.",
    tech: ["React.js", "CSS", "Forms"],
    demo: "",
    github: "",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-title">
        <span className="projects-eyebrow">
          <FaCode />
          MY WORK
        </span>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          Explore my projects, where creativity meets clean code
          and modern web development.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <div className="project-image-overlay">
                <span>PROJECT PREVIEW</span>
                <span className="project-preview-icon">
                  <FaExternalLinkAlt />
                </span>
              </div>

              <span className="project-number">
                {String(project.id).padStart(2, "0")}
              </span>
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="project-category">
                  {project.category}
                </span>

                <span className="project-status">
                  <span className="status-dot" />
                  Featured
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-stack">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-buttons">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-live"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                ) : (
                  <span className="project-disabled">
                    <FaExternalLinkAlt />
                    Add Demo Link
                  </span>
                )}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                ) : (
                  <span className="project-disabled">
                    <FaGithub />
                    Add GitHub Link
                  </span>
                )}
              </div>

              <div className="project-bottom">
                <span>Building digital experiences</span>
                <FaArrowRight />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer">
        <span className="footer-line" />
        <span className="footer-dot" />
        <p>Turning ideas into reality with code.</p>
        <span className="footer-dot" />
        <span className="footer-line" />
      </div>
    </section>
  );
};

export default Projects;
