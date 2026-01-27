import React from "react";
import Project from "./Project";
import "./Project.css";

const Projects = () => {
  const projectsData = [
    {
      title: "CGPA Leaderboard Web Application",
      tech: [
        "devicon-python-plain",
        "devicon-flask-original",
        "devicon-sqlite-plain",
        "devicon-html5-plain",
        "devicon-css3-plain",
        "devicon-bootstrap-plain",
      ],
      points: [
        "Built a secure full-stack web app for SGPA/CGPA management with authentication",
        "Implemented real-time CGPA leaderboard with branch and year filters",
        "Designed a responsive dark-themed UI with password hashing",
      ],
      github: "https://github.com/your-repo",
      live: "https://your-live-link.com",
    },
    {
      title: "Jarvis – AI Voice Assistant",
      tech: ["devicon-python-plain"],
      points: [
        "Built a voice-controlled AI assistant for music, news, weather, and Wikipedia search",
        "Integrated external APIs like OpenWeather and NewsAPI",
        "Implemented speech recognition and text-to-speech for interaction",
      ],
      github: "https://github.com/your-repo",
    },
    {
      title: "Personal Portfolio Website",
      tech: [
        "devicon-react-original",
        "devicon-tailwindcss-plain",
        "devicon-css3-plain",
      ],
      points: [
        "Designed and developed a responsive personal portfolio with modern UI",
        "Implemented reusable components and dynamic routing using React Router",
      ],
      github: "https://github.com/your-repo",
      live: "https://your-portfolio-link.com",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-main-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A collection of my recent work and side projects
          </p>
        </div>

        <div className="projects-page">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              tech={project.tech}
              points={project.points}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;