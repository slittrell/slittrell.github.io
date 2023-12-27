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
    { role: 'Software R&D Intern', company: 'Belden Inc.', 
    description: `- Developed comprehensive automated user-interface testing suite for Belden Horizon Mobile App utilizing Java, Kotlin, \n
                    JavaScript, and Android Studio, enhancing software quality and reducing manual testing time by over 90%\n\n
                  - Engineered robust test automation framework that executes functional, integration, and end-to-end UI tests\n\n
                  - Created and executed over 200 automated UI test scripts in Java and JavaScript using Espresso, Appium, and Selenium\n\n
                  - Identified and fixed critical bugs during testing sprints, resulting in a 20% decrease in user-reported issues\n\n
                  - Documented detailed test plans and cases following best practices for maintainability, driving collaboration across team\n\n
                  `, 
    period: 'May 2023 - Aug 2023' }
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
