import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

interface Experience {
  role: string;
  company: string;
  description: string;
  period: string;
}

function App() {

  const projects: Project[] = [
    // Add your projects here
    // Example: { title: 'Project 1', description: 'Description...', imageUrl: 'url_to_image' },
  ];

  const experiences: Experience[] = [
    // Add your experiences here
    // Example: { role: 'Software Developer', company: 'XYZ Inc.', description: 'Worked on...', period: 'Jan 2020 - Present' },
  ];

  return (
    <div className="App">
            <header className="App-header">
                <h1>Sam Littrell</h1>
                <p>Hey! I'm Sam, and I'm a 4th-year EECS major at UC Berkeley!</p>
                <p>WEBSITE UNDER CONSTRUCTION</p>
            </header>
            <section className="App-projects">
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <img src={project.imageUrl} alt={project.title} />
                        <p>{project.description}</p>
                    </div>
                ))}
            </section>
            <section className="App-experiences">
                <h2>Experiences</h2>
                {experiences.map((experience, index) => (
                    <div key={index} className="experience">
                        <h3>{experience.role} - {experience.company}</h3>
                        <p>{experience.period}</p>
                        <p>{experience.description}</p>
                    </div>
                ))}
            </section>
        </div>
  );
}

export default App;
