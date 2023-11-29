// Resume.js

import React from 'react';
import './App.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>Mayank Mishra</h1>
        <p>Aspiring Software Developer</p>
      </header>

      <section className="education">
        <h2>Education</h2>
        <p>Vellore Institute of Technology</p>
        <p>Bachelor of Technology - BTech, Computer Science Engineering</p>
        <p>Specialization in Artificial Intelligence and Machine Learning</p>
        <p>2021 - 2025</p>
      </section>

      <section className="skills">
        <h2>Top Skills</h2>
        <ul>
          <li>Python (Programming Language)</li>
          <li>JavaScript</li>
          <li>Machine Learning</li>
        </ul>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Microsoft Certified: Azure AI Fundamentals</li>
          <li>NPTEL - The Joy of Computing Using Python</li>
          {/* Add more certifications here */}
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="experience-card">
          <h3>DEVs Dungeon</h3>
          <p>Associate Cloud-Dev Head</p>
          <p>February 2022 - Present (1 year 10 months)</p>
        </div>
        {/* Add more experience cards here */}
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Walmart Sales Prediction</h3>
          <p>
            Developed a machine learning model to predict Walmart sales based on historical data.
            Implemented algorithms for regression analysis and achieved a 90% accuracy rate.
          </p>
          <p>Skills Accomplished: Python, Machine Learning, Data Analysis</p>
        </div>

        <div className="project-card">
          <h3>Home Automation IoT Project</h3>
          <p>
            Designed and implemented an IoT-based home automation system using Raspberry Pi and
            sensors. Controlled lights, temperature, and security remotely through a web interface.
          </p>
          <p>Skills Accomplished: IoT, Python, Web Development</p>
        </div>
      </section>

      <section className="skills-accomplished">
        <h2>Skills Accomplished</h2>
        <ul>
          <li>Python</li>
          <li>Machine Learning</li>
          <li>Data Analysis</li>
          <li>IoT</li>
          <li>Web Development</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <div className="contact-card">
          <p>9016550450</p>
          <p>2233mayankmishra@gmail.com</p>
          <p>
            <a href="https://www.linkedin.com/in/mayankmishra-276304222" target="_blank" rel="noopener noreferrer">
              www.linkedin.com/in/mayankmishra-276304222
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
