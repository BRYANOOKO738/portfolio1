import React from "react";
import "./profile.css";
import { TypeAnimation } from "react-type-animation";

const Profile = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column flex-md-row row profile w-100">
      <div className="float-start align-items-center profile_content col-md-6 order-2 order-md-1 mb-3 mb-md-0">
        <div className="details">
          <div>
            <h3 className="float-start1">
              Hello I am<strong className="text-danger"> Bryan</strong>
            </h3>
          </div>
          <div>
            <h1 style={{ fontFamily: "Tahoma" }} className="float-start1">
              <TypeAnimation
                sequence={[
                  "Enthusiastic Fullstack developer🔴",
                  1000,
                  "Expert in building dynamic, responsive web applications 😎",
                  1000,
                  "Frontend enthusiast with a passion for React and Redux ✔",
                  1000,
                  "Passionate about building real-world, impactful solutions 🌐",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
                className="typing"
              />
            </h1>
          </div>
          <div>
            <h4 className="float-start1">
              Expert in both backend and frontend applications
            </h4>
          </div>
          <div className="mx-3 buttons1">
            <button
              className="btn btn-outline-light custom-outline rounded-pill top_buttons"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </button>
            <a href="./Bryan's resume1.pdf" download="Bryan's Resume.pdf">
              <button className="btn btn-danger custom-outline rounded-pill top_buttons">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="mx-2 justify-content-center align-items-center icons1">
          <a
            className="icons"
            href="https://www.linkedin.com/in/bryan-onyango-413b53279/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="icons"
            href="https://x.com/OokoBryan47762"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter-x "></i>
          </a>
          <a
            className="icons"
            href="https://www.youtube.com/@BryanOnyango-g1e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube"></i>
          </a>
          <a
            className="icons"
            href="https://github.com/BRYANOOKO738"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
      <div className="profile_picture float-end mx-lg-3 col-md-6 order-1 order-md-2 justify-content-center align-items-center ">
        <img
          src="./1725192444036.jpg"
          alt="profile picture"
          className="img-fluid rounded-circle picture"
        />
      </div>
    </div>
  );
};

export default Profile;
