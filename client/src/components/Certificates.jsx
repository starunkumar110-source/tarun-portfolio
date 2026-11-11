
import React, { useState } from "react";
import {
  FaAward,
  FaExternalLinkAlt,
  FaTimes,
  FaSearchPlus,
  FaGraduationCap,
  FaCode,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaDownload,
  FaCertificate,
} from "react-icons/fa";

import "./Certificates.css";

import htmlCert from "../assets/certificates/html.png";
import cssCert from "../assets/certificates/css.png";
import flexCert from "../assets/certificates/flexbox.png";
import jsCert from "../assets/certificates/js ai.png";
import reactCert from "../assets/certificates/react.png";
import nodeCert from "../assets/certificates/node.png";
import genAiCert from "../assets/certificates/itgAI.png";
import excelCert from "../assets/certificates/gssql.png";
import sqlCert from "../assets/certificates/gssql.png";

const certificateData = [
  {
    id: 1,
    title: "ReactJS",
    provider: "Unstop",
    image: reactCert,
    category: "Frontend Development",
    group: "Frontend",
    description:
      "A certification related to ReactJS and frontend application development.",
  },
  {
    id: 2,
    title: "JavaScript ES6 with AI",
    provider: "Unstop",
    image: jsCert,
    category: "Programming & AI",
    group: "AI & Programming",
    description:
      "A certification covering JavaScript ES6 and the stated AI-related learning topic.",
  },
  {
    id: 3,
    title: "Node JS",
    provider: "Unstop",
    image: nodeCert,
    category: "Backend Development",
    group: "Backend",
    description:
      "A certification related to Node.js and server-side JavaScript development.",
  },
  {
    id: 4,
    title: "HTML with AI",
    provider: "Unstop",
    image: htmlCert,
    category: "Frontend Development",
    group: "Frontend",
    description:
      "A certification related to HTML and web page structure.",
  },
  {
    id: 5,
    title: "CSS with AI",
    provider: "Unstop",
    image: cssCert,
    category: "Frontend Development",
    group: "Frontend",
    description:
      "A certification related to CSS and website styling.",
  },
  {
    id: 6,
    title: "Flexbox with AI",
    provider: "Unstop",
    image: flexCert,
    category: "Frontend Development",
    group: "Frontend",
    description:
      "A certification related to CSS Flexbox layouts.",
  },
  {
    id: 7,
    title: "Introduction to Generative AI",
    provider: "Google Cloud | Simplilearn",
    image: genAiCert,
    category: "Artificial Intelligence",
    group: "AI & Programming",
    description:
      "An introductory certification in Generative AI.",
  },
  {
    id: 8,
    title: "Business Analytics with Excel",
    provider: "Microsoft | Simplilearn",
    image: excelCert,
    category: "Data & Business Analytics",
    group: "Data & Databases",
    description:
      "A certification related to business analytics with Microsoft Excel.",
  },
  {
    id: 9,
    title: "Get Started with SQL Analytics and BI on Databricks",
    provider: "Databricks | Simplilearn",
    image: sqlCert,
    category: "Data & Databases",
    group: "Data & Databases",
    description:
      "An introductory certification in SQL analytics and business intelligence on Databricks.",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "AI & Programming",
  "Data & Databases",
];

const getCategoryIcon = (group) => {
  switch (group) {
    case "Frontend":
      return <FaCode />;
    case "Backend":
      return <FaDatabase />;
    case "AI & Programming":
      return <FaBrain />;
    case "Data & Databases":
      return <FaChartLine />;
    default:
      return <FaGraduationCap />;
  }
};

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCertificates =
    activeCategory === "All"
      ? certificateData
      : certificateData.filter(
          (cert) => cert.group === activeCategory
        );

  const closeModal = () => setSelectedCert(null);

  return (
    <section className="certificates" id="certificates">
      <div className="certificates-glow certificates-glow-one"></div>
      <div className="certificates-glow certificates-glow-two"></div>
      <div className="certificates-grid-pattern"></div>

      <div className="certificates-container">
        {/* Section Heading */}
        <header className="certificates-title">
          <span className="certificates-eyebrow">
            <FaAward />
            MY ACHIEVEMENTS
          </span>

          <h2>
            My <span>Certifications</span>
          </h2>

          <p>
            My learning achievements across frontend development,
            backend technologies, programming, artificial intelligence,
            and data analytics. Each certificate represents a step in
            my continuous learning journey.
          </p>

          <div className="certificates-stats">
            <div className="certificates-stat">
              <strong>{certificateData.length.toString().padStart(2, "0")}</strong>
              <span>Certificates</span>
            </div>

            <span className="certificates-stat-divider"></span>

            <div className="certificates-stat">
              <strong>05</strong>
              <span>Learning Categories</span>
            </div>

            <span className="certificates-stat-divider"></span>

            <div className="certificates-stat">
              <strong>∞</strong>
              <span>Learning Mindset</span>
            </div>
          </div>
        </header>

        {/* Category Filters */}
        <div
          className="certificates-filters"
          role="group"
          aria-label="Filter certificates by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`certificate-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category === "All" ? (
                <FaCertificate />
              ) : (
                getCategoryIcon(category)
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Certificate Count */}
        <div className="certificates-results">
          <span>
            Showing <strong>{filteredCertificates.length}</strong>{" "}
            {filteredCertificates.length === 1
              ? "certificate"
              : "certificates"}
          </span>

          <span className="certificates-results-line"></span>
        </div>

        {/* Certificate Cards */}
        <div className="certificates-container-grid">
          {filteredCertificates.map((cert, index) => (
            <article
              key={cert.id}
              className="cert-card"
              style={{ "--card-index": index }}
            >
              <button
                type="button"
                className="cert-card-click-area"
                onClick={() => setSelectedCert(cert)}
                aria-label={`Preview ${cert.title} certificate`}
              >
                <div className="cert-img-wrapper">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    loading="lazy"
                  />

                  <div className="cert-overlay">
                    <span className="cert-zoom-circle">
                      <FaSearchPlus />
                    </span>
                    <span>View Certificate</span>
                  </div>

                  <span className="cert-image-number">
                    {String(cert.id).padStart(2, "0")}
                  </span>
                </div>
              </button>

              <div className="cert-info-box">
                <div className="cert-badge">
                  <FaAward className="badge-icon" />
                  <span>{cert.provider}</span>
                </div>

                <h3>{cert.title}</h3>

                <p className="cert-cat">
                  <span className="cert-cat-icon">
                    {getCategoryIcon(cert.group)}
                  </span>
                  {cert.category}
                </p>

                <div className="cert-card-footer">
                  <span className="cert-verified-label">
                    <span className="cert-status-dot"></span>
                    Learning Achievement
                  </span>

                  <button
                    type="button"
                    className="cert-open-btn"
                    onClick={() => setSelectedCert(cert)}
                    aria-label={`Open ${cert.title}`}
                  >
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="certificates-empty">
            <FaCertificate />
            <p>No certificates found in this category.</p>
          </div>
        )}

        {/* Certificate Preview Modal */}
        {selectedCert && (
          <div
            className="cert-modal-overlay"
            onClick={closeModal}
            role="presentation"
          >
            <div
              className="cert-modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="close-modal-btn"
                onClick={closeModal}
                aria-label="Close certificate preview"
              >
                <FaTimes />
              </button>

              <div className="modal-cert-header">
                <span className="modal-cert-eyebrow">
                  <FaAward />
                  CERTIFICATE PREVIEW
                </span>

                <h3 id="cert-modal-title">{selectedCert.title}</h3>

                <p>
                  Provided by <strong>{selectedCert.provider}</strong>
                </p>

                <span className="modal-cert-category">
                  {getCategoryIcon(selectedCert.group)}
                  {selectedCert.category}
                </span>
              </div>

              <div className="modal-img-container">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} certificate preview`}
                />
              </div>

              <p className="modal-cert-description">
                {selectedCert.description}
              </p>

              <div className="modal-footer">
                <a
                  href={selectedCert.image}
                  download={`${selectedCert.title
                    .replace(/[^a-z0-9]/gi, "-")
                    .toLowerCase()}-certificate`}
                  className="download-cert-btn"
                >
                  <FaDownload />
                  Download Certificate
                </a>

                <button
                  type="button"
                  className="modal-close-text-btn"
                  onClick={closeModal}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
