// ```jsx
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
        "devicon-postgresql-plain",
        "devicon-html5-plain",
        "devicon-css3-plain",
        "devicon-bootstrap-plain",
      ],
      points: [
        "Built a full-stack CGPA management platform with secure authentication and student result management",
        "Implemented a dynamic CGPA leaderboard with branch, year, and program-based filtering",
        "Designed a responsive interface and deployed the application using Vercel with PostgreSQL (Neon)",
      ],
      github: "https://github.com/Ankitraj588/cgpa-leaderboard",
      live: "https://cgpa-leaderboard-eight.vercel.app/",
    },

    {
      title: "Portfolio & Blogging Platform",
      tech: [
        "devicon-react-original",
        "devicon-python-plain",
        "devicon-django-plain",
        "devicon-mysql-plain",
      ],
      points: [
        "Developed a full-stack portfolio and blogging platform using React and Django REST Framework",
        "Built reusable React components with responsive UI, client-side routing, and dynamic project sections",
        "Integrated a backend architecture for managing users, blogs, and application data with MySQL",
      ],
      github: "https://github.com/Ankitraj588/portfolio-blogging",
      live: "https://portfolio-blogging.vercel.app/",
    },

    {
      title: "Jarvis – AI Voice Assistant",
      tech: [
        "devicon-python-plain",
      ],
      points: [
        "Developed a Python-based voice assistant capable of handling music, news, weather, and Wikipedia queries",
        "Integrated external APIs including OpenWeather and NewsAPI to provide real-time information",
        "Implemented speech recognition and text-to-speech for interactive voice-based communication",
      ],
      github:
        "https://github.com/Ankitraj588/Jarvis-Voice-Assistant-project-",
    },

    {
      title: "Arduino Uno Robo War Car",
      tech: [
        "devicon-arduino-plain",
        "devicon-cplusplus-plain",
      ],
      points: [
        "Built an Arduino Uno based robotic war car with motor-driven movement and remote-controlled operation",
        "Programmed the robot using C/C++ to control motor direction, speed, and movement logic",
        "Integrated electronic components and motor drivers to build and test a functional combat robotics prototype",
      ],
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
// ```
