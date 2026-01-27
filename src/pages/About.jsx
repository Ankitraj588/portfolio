import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2 className="about-main-title">About Me</h2>
          <p className="about-subtitle">
            Passionate developer and competitive programmer
          </p>
        </div>

        {/* Introduction */}
        <div className="about-intro">
          <p>
            Hello! I'm a <strong>B.Tech student</strong> at the{" "}
            <strong>National Institute of Technology, Jamshedpur</strong>,
            with strong passion for
            software development and competitive programming.
          </p>
          <p>
            I love building innovative solutions and tackling complex problems.
            My journey in tech has been driven by curiosity and a desire to
            create impactful applications that solve real-world challenges.
          </p>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h3 className="section-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            Education
          </h3>

          <div className="education-cards">
            {/* NIT Jamshedpur */}
            <div className="education-card">
              <div className="education-header">
                <div className="education-info">
                  <h4 className="education-institution">
                    National Institute of Technology, Jamshedpur
                  </h4>
                  <p className="education-degree">
                    Bachelor of Technology (Mech)
                  </p>
                </div>
                <div className="education-details">
                  <span className="education-date">Aug. 2027</span>
                  <span className="education-score highlight">
                    CGPA: 8.04/10
                  </span>
                </div>
              </div>
            </div>

            {/* St Xavier's College */}
            <div className="education-card">
              <div className="education-header">
                <div className="education-info">
                  <h4 className="education-institution">
                    St Xavier's College Ranchi
                  </h4>
                  <p className="education-degree">
                    Senior School Certificate Examination
                  </p>
                </div>
                <div className="education-details">
                  <span className="education-date">July, 2022</span>
                  <span className="education-score highlight">
                    Percentage: 90.4%
                  </span>
                </div>
              </div>
            </div>

            {/* Sarswati Vidya Mandir */}
            <div className="education-card">
              <div className="education-header">
                <div className="education-info">
                  <h4 className="education-institution">
                    Sarswati Vidya Mandir, Latehar
                  </h4>
                  <p className="education-degree">
                    Secondary School Examination
                  </p>
                </div>
                <div className="education-details">
                  <span className="education-date">July, 2020</span>
                  <span className="education-score highlight">
                    Percentage: 94.2%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="section-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Technical Skills
          </h3>

          <div className="skills-grid">
            <div className="skill-category">
              <h4 className="skill-category-title">Languages</h4>
              <div className="skill-tags">
                <span className="skill-tag">
                  <i className="devicon-python-plain"></i>
                  Python
                </span>
                <span className="skill-tag">
                  <i className="devicon-cplusplus-plain"></i>
                  C++
                </span>
                <span className="skill-tag">
                  <i className="devicon-javascript-plain"></i>
                  JavaScript
                </span>
                <span className="skill-tag">
                  <i className="devicon-c-plain"></i>
                  C
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-category-title">Web Development</h4>
              <div className="skill-tags">
                <span className="skill-tag">
                  <i className="devicon-react-original"></i>
                  React
                </span>
                <span className="skill-tag">
                  <i className="devicon-flask-original"></i>
                  Flask
                </span>
                <span className="skill-tag">
                  <i className="devicon-html5-plain"></i>
                  HTML5
                </span>
                <span className="skill-tag">
                  <i className="devicon-css3-plain"></i>
                  CSS3
                </span>
                <span className="skill-tag">
                  <i className="devicon-tailwindcss-plain"></i>
                  Tailwind
                </span>
                <span className="skill-tag">
                  <i className="devicon-bootstrap-plain"></i>
                  Bootstrap
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-category-title">Tools & Others</h4>
              <div className="skill-tags">
                <span className="skill-tag">
                  <i className="devicon-git-plain"></i>
                  Git
                </span>
                <span className="skill-tag">
                  <i className="devicon-github-original"></i>
                  GitHub
                </span>
                <span className="skill-tag">
                  <i className="devicon-sqlite-plain"></i>
                  SQLite
                </span>
                <span className="skill-tag">
                  <i className="devicon-vscode-plain"></i>
                  VS Code
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="interests-section">
          <h3 className="section-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            Interests & Hobbies
          </h3>

          <div className="interests-grid">
            <div className="interest-item">
              <div className="interest-icon">💻</div>
              <p>Competitive Programming</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🚀</div>
              <p>Full Stack Development</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🧩</div>
              <p>Problem Solving</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">📚</div>
              <p>Learning New Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;