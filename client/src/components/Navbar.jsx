
import { useEffect, useState } from "react";
import {FaCode,FaPaperPlane,FaBars,FaTimes,FaArrowRight,} from "react-icons/fa";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);  
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 160) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="premium-navbar" aria-label="Main navigation">
        {/* BRAND LOGO */}
        <a href="#home" className="navbar-brand" onClick={() => handleNavClick("home")} aria-label="Tarun Kumar Saini home">
          <span className="brand-icon"><FaCode /></span>
          <span className="brand-name">Tarun Kumar Saini<small>FULL STACK DEVELOPER</small></span>
        </a>

        {/* NAVIGATION LINKS */}
        <div id="navbar-links" className={`navbar-links ${menuOpen ? "menu-open" : ""}`}>
          {navItems.map((item, index) => {
            const sectionId = item.href.slice(1);

            return (
              <a key={item.href} href={item.href} className={`navbar-link ${ activeSection === sectionId ? "active" : ""}`}
                style={{ "--link-index": index }} onClick={() => handleNavClick(sectionId)}>
                <span>{item.label}</span>
                <span className="nav-link-line" />
              </a>
            );
          })}

          {/* MOBILE CONTACT BUTTON */}
          <a href="#contact" className="mobile-talk-button" onClick={() => handleNavClick("contact")}>Let's Talk <FaArrowRight /></a>
        </div>

        {/* DESKTOP CTA */}
        <a href="#contact" className="navbar-cta" onClick={() => handleNavClick("contact")}>
          <span>Let's Talk</span>
          <FaPaperPlane className="cta-icon" />
          <span className="cta-shine" />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button type="button" className={`navbar-menu-toggle ${ menuOpen ? "toggle-open" : ""}`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-links">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}
