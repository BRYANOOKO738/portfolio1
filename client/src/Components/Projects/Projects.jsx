import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Projects.css"; // Ensure this CSS file is updated accordingly

const projects = [
  {
    id: 1,
    title: "Ecormerce Platform",
    description: "This is a brief description of Project 1.",
    demoLink:
      "https://66e1a8e8d9435a0f17c59d6f--stirring-choux-e686f1.netlify.app/",
    codeLink: "https://github.com/BRYANOOKO738/E-cormerce/tree/master",
    image: "./Screenshot 2024-09-08 130349.png", // Replace with your image URL
  },
  {
    id: 2,
    title: "Real Estate",
    description: "This is a brief description of Project 2.",
    demoLink: "",
    codeLink: "https://github.com/BRYANOOKO738/Backend1",
    image: "./Screenshot 2024-09-08 150911.png", // Replace with your image URL
  },
  // Add more projects as needed
];

const Projects = () => {
    return (
      <>
        <h3 className="text-center">
          <strong>PROJECTS</strong>
        </h3>
        <div className="projects-container mt-o">
          {projects.map((project) => (
            <Card key={project.id} className="project-card">
              <Card.Img variant="top vh-100%" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>
                  <strong>{project.title}</strong>
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button
                  variant="primary float-start"
                  href={project.demoLink}
                  target="_blank"
                >
                  View Demo
                </Button>
                <Button
                  variant="secondary float-end"
                  href={project.codeLink}
                  target="_blank"
                >
                  Source Code
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </>
    );
};

export default Projects;
