
import React, { useState } from "react";
import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaCode,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaLaptopCode,
  FaLayerGroup,
  FaServer,
  FaTools,
  FaPython,
  FaMobileAlt,
  FaPalette,
  FaCogs,
  FaTerminal,
  FaBug,
  FaProjectDiagram,
  FaRocket,
  FaGlobe,
  FaLock,
  FaFileCode,
  FaSitemap,
  FaDesktop,
  FaBook,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiNpm,
  SiVite,
  SiJson,
  SiMongoose,
  SiTypescript,
  SiMysql,
  SiAxios,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiJest,
  SiFirebase,
} from "react-icons/si";

const skillGroups = [
  { name: "All Skills", icon: <FaLayerGroup /> },
  { name: "Frontend", icon: <FaLaptopCode /> },
  { name: "Backend", icon: <FaServer /> },
  { name: "Database", icon: <FaDatabase /> },
  { name: "Tools", icon: <FaTools /> },
  { name: "Concepts", icon: <FaCogs /> },
];

const skills = [
  // FRONTEND: 1–18
  {
    name: "HTML5",
    category: "Frontend",
    icon: <FaHtml5 />,
    color: "#ff7043",
    description: "Semantic web page structure",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: <FaCss3Alt />,
    color: "#42a5f5",
    description: "Modern styling and layouts",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <FaJs />,
    color: "#f7df1e",
    description: "Interactive web functionality",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: <FaReact />,
    color: "#61dafb",
    description: "Component-based interfaces",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: <FaBootstrap />,
    color: "#b07cff",
    description: "Responsive UI components",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss />,
    color: "#38d9ed",
    description: "Utility-first CSS styling",
  },
  {
    name: "Redux Toolkit",
    category: "Frontend",
    icon: <SiRedux />,
    color: "#b388ff",
    description: "Application state management",
  },
  {
    name: "JSX",
    category: "Frontend",
    icon: <FaCode />,
    color: "#61dafb",
    description: "Writing UI with React",
  },
  {
    name: "Responsive Design",
    category: "Frontend",
    icon: <FaMobileAlt />,
    color: "#55ffb0",
    description: "Layouts for different screens",
  },
  {
    name: "CSS Flexbox",
    category: "Frontend",
    icon: <FaLayerGroup />,
    color: "#ff80bf",
    description: "Flexible page layouts",
  },
  {
    name: "CSS Grid",
    category: "Frontend",
    icon: <FaProjectDiagram />,
    color: "#8ca9ff",
    description: "Two-dimensional layouts",
  },
  {
    name: "UI Styling",
    category: "Frontend",
    icon: <FaPalette />,
    color: "#ff9a76",
    description: "Colors, spacing and visual design",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: <SiTypescript />,
    color: "#3178c6",
    description: "Typed JavaScript fundamentals",
  },
  {
    name: "React Hooks",
    category: "Frontend",
    icon: <FaReact />,
    color: "#61dafb",
    description: "State and component logic",
  },
  {
    name: "React Router",
    category: "Frontend",
    icon: <FaSitemap />,
    color: "#ff7070",
    description: "Client-side page navigation",
  },
  {
    name: "Axios",
    category: "Frontend",
    icon: <SiAxios />,
    color: "#9b8cff",
    description: "HTTP requests from applications",
  },
  {
    name: "DOM Manipulation",
    category: "Frontend",
    icon: <FaGlobe />,
    color: "#55ffb0",
    description: "Working with browser document objects",
  },
  {
    name: "Accessibility",
    category: "Frontend",
    icon: <FaDesktop />,
    color: "#42c8ff",
    description: "More usable web interfaces",
  },

  // BACKEND: 19–30
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs />,
    color: "#83cd29",
    description: "JavaScript runtime",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress />,
    color: "#eeeeee",
    description: "Server routes and middleware",
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: <FaCode />,
    color: "#ff80bf",
    description: "Building and consuming APIs",
  },
  {
    name: "CRUD Operations",
    category: "Backend",
    icon: <FaDatabase />,
    color: "#42c8ff",
    description: "Create, read, update and delete",
  },
  {
    name: "HTTP Methods",
    category: "Backend",
    icon: <FaServer />,
    color: "#b388ff",
    description: "GET, POST, PUT, PATCH and DELETE",
  },
  {
    name: "JSON",
    category: "Backend",
    icon: <SiJson />,
    color: "#f7df1e",
    description: "Structured API data",
  },
  {
    name: "Middleware",
    category: "Backend",
    icon: <FaCogs />,
    color: "#55ffb0",
    description: "Request and response processing",
  },
  {
    name: "API Integration",
    category: "Backend",
    icon: <FaProjectDiagram />,
    color: "#ff9a76",
    description: "Connecting frontend and backend",
  },
  {
    name: "Async / Await",
    category: "Backend",
    icon: <FaCogs />,
    color: "#66d9ef",
    description: "Handling asynchronous operations",
  },
  {
    name: "Authentication",
    category: "Backend",
    icon: <FaLock />,
    color: "#ff80bf",
    description: "User access concepts",
  },
  {
    name: "NPM",
    category: "Backend",
    icon: <SiNpm />,
    color: "#ff7070",
    description: "JavaScript package management",
  },
  {
    name: "MVC Architecture",
    category: "Backend",
    icon: <FaSitemap />,
    color: "#8ca9ff",
    description: "Separating application responsibilities",
  },

  // DATABASE: 31–36
  {
    name: "MongoDB",
    category: "Database",
    icon: <SiMongodb />,
    color: "#58d68d",
    description: "NoSQL database fundamentals",
  },
  {
    name: "Mongoose",
    category: "Database",
    icon: <SiMongoose />,
    color: "#ff7070",
    description: "MongoDB object modeling",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: <SiMysql />,
    color: "#42c8ff",
    description: "Relational database fundamentals",
  },
  {
    name: "Database CRUD",
    category: "Database",
    icon: <FaDatabase />,
    color: "#55ffb0",
    description: "Managing stored records",
  },
  {
    name: "Schema Design",
    category: "Database",
    icon: <FaProjectDiagram />,
    color: "#b388ff",
    description: "Organizing data structures",
  },
  {
    name: "Database Queries",
    category: "Database",
    icon: <FaCode />,
    color: "#ff9a76",
    description: "Reading and updating records",
  },

  // TOOLS: 37–48
  {
    name: "Git",
    category: "Tools",
    icon: <FaGitAlt />,
    color: "#ff7043",
    description: "Version control basics",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: <FaGithub />,
    color: "#f5f5f5",
    description: "Code hosting and collaboration",
  },
  {
    name: "Postman",
    category: "Tools",
    icon: <SiPostman />,
    color: "#ff8a65",
    description: "Testing API requests",
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: <FaCode />,
    color: "#42a5f5",
    description: "Code editor and extensions",
  },
  {
    name: "Vite",
    category: "Tools",
    icon: <SiVite />,
    color: "#b388ff",
    description: "Frontend development tooling",
  },
  {
    name: "Chrome DevTools",
    category: "Tools",
    icon: <FaBug />,
    color: "#55ffb0",
    description: "Browser debugging",
  },
  {
    name: "Terminal",
    category: "Tools",
    icon: <FaTerminal />,
    color: "#a6aec5",
    description: "Command-line workflows",
  },
  {
    name: "Webpack",
    category: "Tools",
    icon: <SiWebpack />,
    color: "#8ed6fb",
    description: "JavaScript module bundling",
  },
  {
    name: "ESLint",
    category: "Tools",
    icon: <SiEslint />,
    color: "#9b8cff",
    description: "JavaScript code linting",
  },
  {
    name: "Prettier",
    category: "Tools",
    icon: <SiPrettier />,
    color: "#ff80bf",
    description: "Consistent code formatting",
  },
  {
    name: "Jest",
    category: "Tools",
    icon: <SiJest />,
    color: "#c63d14",
    description: "JavaScript testing fundamentals",
  },
  {
    name: "Firebase",
    category: "Tools",
    icon: <SiFirebase />,
    color: "#ffca28",
    description: "Application platform fundamentals",
  },

  // CONCEPTS: 49–60
  {
    name: "Python Basics",
    category: "Concepts",
    icon: <FaPython />,
    color: "#ffe082",
    description: "Core syntax and fundamentals",
  },
  {
    name: "C++ Basics",
    category: "Concepts",
    icon: <FaCode />,
    color: "#8ca9ff",
    description: "Programming fundamentals",
  },
  {
    name: "Props & State",
    category: "Concepts",
    icon: <FaProjectDiagram />,
    color: "#ff80bf",
    description: "Passing and managing UI data",
  },
  {
    name: "Promises",
    category: "Concepts",
    icon: <FaCogs />,
    color: "#55ffb0",
    description: "Handling asynchronous results",
  },
  {
    name: "Error Handling",
    category: "Concepts",
    icon: <FaBug />,
    color: "#ff9a76",
    description: "Finding and handling errors",
  },
  {
    name: "Debugging",
    category: "Concepts",
    icon: <FaBug />,
    color: "#42c8ff",
    description: "Finding and fixing code issues",
  },
  {
    name: "OOP Fundamentals",
    category: "Concepts",
    icon: <FaLayerGroup />,
    color: "#b388ff",
    description: "Object-oriented programming basics",
  },
  {
    name: "Algorithms Basics",
    category: "Concepts",
    icon: <FaProjectDiagram />,
    color: "#55ffb0",
    description: "Step-by-step problem solving",
  },
  {
    name: "Data Structures",
    category: "Concepts",
    icon: <FaDatabase />,
    color: "#ff80bf",
    description: "Organizing and accessing data",
  },
  {
    name: "Clean Code",
    category: "Concepts",
    icon: <FaFileCode />,
    color: "#42c8ff",
    description: "Readable and maintainable code",
  },
  {
    name: "Web Security Basics",
    category: "Concepts",
    icon: <FaLock />,
    color: "#83cd29",
    description: "Understanding safer web practices",
  },
  {
    name: "Project Building",
    category: "Concepts",
    icon: <FaRocket />,
    color: "#ff9a76",
    description: "Applying skills in web projects",
  },
];

function Skills() {
  const [activeGroup, setActiveGroup] = useState("All Skills");

  const filteredSkills =
    activeGroup === "All Skills"
      ? skills
      : skills.filter((skill) => skill.category === activeGroup);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-glow skills-glow-one"></div>
      <div className="skills-glow skills-glow-two"></div>

      <div className="skills-container">
        <header className="skills-header">
          <span className="skills-eyebrow">
            <FaCode /> MY TECH STACK
          </span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies, tools and programming concepts I am learning
            and practising while building web projects.
          </p>

          <div className="skills-total">
            <span>{skills.length}</span>
            <span>Unique Skills & Concepts</span>
          </div>
        </header>

        <div className="skills-summary">
          <div className="skills-summary-item">
            <span className="skills-summary-number">01</span>
            <div>
              <strong>Frontend</strong>
              <small>Interfaces & user experience</small>
            </div>
          </div>

          <div className="skills-summary-item">
            <span className="skills-summary-number">02</span>
            <div>
              <strong>Backend</strong>
              <small>Servers, APIs & application logic</small>
            </div>
          </div>

          <div className="skills-summary-item">
            <span className="skills-summary-number">03</span>
            <div>
              <strong>Tools & Concepts</strong>
              <small>Development workflow & fundamentals</small>
            </div>
          </div>
        </div>

        <div className="skills-filters" aria-label="Filter skills">
          {skillGroups.map((group) => (
            <button
              type="button"
              key={group.name}
              className={`skills-filter ${
                activeGroup === group.name ? "active" : ""
              }`}
              onClick={() => setActiveGroup(group.name)}
              aria-pressed={activeGroup === group.name}
            >
              {group.icon}
              {group.name}
            </button>
          ))}
        </div>

        <div className="skills-grid" aria-live="polite">
          {filteredSkills.map((skill, index) => (
            <article
              className="skill-card"
              key={skill.name}
              style={{
                "--skill-color": skill.color,
                "--skill-index": index % 12,
              }}
            >
              <div className="skill-card-top">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-card-arrow">↗</span>
              </div>

              <h3>{skill.name}</h3>
              <p>{skill.description}</p>

              <div className="skill-card-footer">
                <span>{skill.category}</span>
                <span className="skill-status-dot"></span>
              </div>
            </article>
          ))}
        </div>

        <div className="skills-bottom">
          <span className="skills-bottom-icon">
            <FaLaptopCode />
          </span>
          <div>
            <strong>Always learning. Always building.</strong>
            <p>
              These cards represent technologies and concepts to learn or
              practise. I focus on building projects and gaining practical
              development experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
