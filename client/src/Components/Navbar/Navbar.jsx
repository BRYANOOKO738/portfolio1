import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About me", sectionId: "about" },
    { label: "Resume", sectionId: "resume" },
    { label: "Testimonial", sectionId: "testimonial" },
    { label: "Contact me", sectionId: "contact" },
  ];

  return (
    <div style={{ marginBottom: "20px" }} className="w-100">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-center">
          <a
            className="navbar-brand d-flex justify-content-center w-50"
            href="#"
            style={{ color: "wheat", fontSize: "30px" }}
          >
            <strong>Portfolio</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    className="nav-link"
                    href={`#${item.sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.sectionId);
                    }}
                    style={{ color: "wheat", fontSize: "25px" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
