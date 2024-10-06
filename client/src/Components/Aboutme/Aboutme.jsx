import React from "react";

const Aboutme = () => {
  return (
    <div
      className="mt-4 justify-content-center align-items-center mx-auto w-100"
      id="about"
    >
      <div className="heading text-center">
        <h2>
          <strong>About Me</strong>
        </h2>
        <p>
          <strong>Why choose me?</strong>
        </p>
      </div>
      <div className="justify-content-center  mx-5 row shadow-lg rounded">
        <div className="col-md align-items-stretch">
          <video
            width="100%"
            height="100%"
            src="./144779-785282852_medium.mp4"
            loop
            autoPlay
            muted
            className="rounded"
            style={{ height: "100%", objectFit: "cover" }}
          ></video>
        </div>
        <div className="col-md my-3">
          <p>
            <strong
              style={{
                wordSpacing: "0.05em",
                letterSpacing: "0.5px",
                lineHeight: "1.6",
              }}
            >
              🔴I am a dedicated full-stack developer with expertise in the MERN
              stack (MongoDB, Express, React, Node.js) and a strong command of
              MySQL for robust database management. My passion lies in building
              scalable, high-performance applications that provide seamless user
              experiences. I have a proven ability to work with state management
              tools like Redux, enhancing complex client-side interactions. My
              approach combines clean, maintainable code with a focus on best
              practices in design and architecture. I thrive in collaborative
              environments where I can contribute to and learn from talented
              teams. I am committed to continuous learning and staying ahead of
              the curve in the ever-evolving tech landscape.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
