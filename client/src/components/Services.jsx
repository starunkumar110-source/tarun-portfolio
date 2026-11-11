
import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaPaintBrush,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    id: "01",
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Modern, responsive aur user-friendly websites banana using HTML, CSS, JavaScript aur React.js.",
    tags: ["React.js", "JavaScript", "Responsive UI"],
    color: "pink",
  },
  {
    id: "02",
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    description:
      "Frontend aur backend ko connect karke complete web applications develop karna.",
    tags: ["React.js", "Node.js", "Express.js"],
    color: "blue",
  },
  {
    id: "03",
    icon: <FaMobileAlt />,
    title: "Responsive Web Design",
    description:
      "Mobile, tablet aur desktop ke liye smooth aur responsive website layouts banana.",
    tags: ["CSS3", "Bootstrap", "Tailwind CSS"],
    color: "green",
  },
  {
    id: "04",
    icon: <FaDatabase />,
    title: "API & Database Integration",
    description:
      "REST APIs ke through data exchange aur database integration implement karna.",
    tags: ["REST APIs", "MongoDB", "Mongoose"],
    color: "purple",
  },
  {
    id: "05",
    icon: <FaPaintBrush />,
    title: "UI Styling & Animations",
    description:
      "Premium user interfaces, glassmorphism effects aur smooth CSS animations banana.",
    tags: ["CSS3", "Glassmorphism", "Animations"],
    color: "pink",
  },
  {
    id: "06",
    icon: <FaRocket />,
    title: "Website Projects",
    description:
      "Portfolio websites, landing pages aur practical web development projects build karna.",
    tags: ["React", "Git", "Problem Solving"],
    color: "blue",
  },
  {
    id: "07",
    icon: <FaCode />,
    title: "React.js Development",
    description:
      "Reusable components aur modern React features ka use karke interactive interfaces banana.",
    tags: ["React.js", "JSX", "Hooks"],
    color: "green",
  },
  {
    id: "08",
    icon: <FaLaptopCode />,
    title: "Redux State Management",
    description:
      "Application ke shared state aur data flow ko Redux Toolkit ke through manage karna.",
    tags: ["Redux Toolkit", "Slices", "Thunks"],
    color: "purple",
  },
  {
    id: "09",
    icon: <FaDatabase />,
    title: "Backend API Development",
    description:
      "Server-side routes aur CRUD APIs banana jo frontend requests ko handle karein.",
    tags: ["Node.js", "Express.js", "CRUD"],
    color: "blue",
  },
  {
    id: "10",
    icon: <FaMobileAlt />,
    title: "Landing Page Development",
    description:
      "Businesses aur personal brands ke liye attractive, clear aur responsive landing pages banana.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "pink",
  },
  {
    id: "11",
    icon: <FaPaintBrush />,
    title: "Website Maintenance",
    description:
      "Existing websites mein UI improvements, responsive fixes aur basic bug fixing karna.",
    tags: ["Debugging", "CSS Fixes", "Optimization"],
    color: "green",
  },
  {
    id: "12",
    icon: <FaRocket />,
    title: "Website Performance",
    description:
      "Code aur assets ko improve karke website ki loading speed aur user experience par kaam karna.",
    tags: ["Optimization", "Clean Code", "Testing"],
    color: "purple",
  },
];


function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <span className="services-eyebrow">
            <span className="services-eyebrow-dot"></span>
            WHAT I CAN DO
          </span>

          <h2>
            My <span>Services</span>
          </h2>

          <p>
            I build modern web experiences with clean code, responsive
            layouts and a focus on user experience.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className={`service-card service-${service.color}`}
              key={service.id}
            >
              <div className="service-card-top">
                <div className="service-icon">{service.icon}</div>
                <span className="service-number">{service.id}</span>
              </div>

              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a className="service-link" href="#contact">
                Let's Connect <FaArrowRight />
              </a>
            </article>
          ))}
        </div>

        <div className="services-bottom">
          <span className="services-bottom-line"></span>
          <p>
            Have a project idea? <a href="#contact">Let's discuss it.</a>
          </p>
          <span className="services-bottom-line"></span>
        </div>
      </div>
    </section>
  );
}

export default Services;
