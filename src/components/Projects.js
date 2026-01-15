import React from 'react';
import './Projects.css';

// Import images - this ensures they're bundled correctly
// If image doesn't exist, it will show an error at build time
const projectImages = {
  microservices: process.env.PUBLIC_URL + '/images/projects/microservices.png',
  timetable: process.env.PUBLIC_URL + '/images/projects/timetable.png',
  chatbot: process.env.PUBLIC_URL + '/images/projects/chatbots.jpg',
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Microservices Architecture',
      description: 'A comprehensive microservices-based architecture project using Java and Spring Boot. Demonstrates service discovery, centralized configuration, API routing, and integration of key Spring Cloud components for building scalable distributed systems.',
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'REST APIs'],
      githubUrl: 'https://github.com/mansimm/Project_Microservices/tree/master',
      imageUrl: projectImages.microservices,
    },
    {
      id: 2,
      title: 'Automatic Timetable Generator',
      description: 'An Android application that automatically generates timetables for colleges. Takes inputs like subjects, teachers, available classrooms, labs, and hours per week to create optimized schedules efficiently.',
      technologies: ['Java', 'Android', 'Algorithm', 'Optimization'],
      githubUrl: 'https://github.com/mansimm/Atomatic-Timetable-Generator',
      imageUrl: projectImages.timetable,
    },
    {
      id: 3,
      title: 'Seq2Seq Chatbot',
      description: 'A deep learning chatbot implemented using Sequence-to-Sequence (Seq2Seq) architecture with TensorFlow. Utilizes Natural Language Processing to provide automatic replies and relevant information to users.',
      technologies: ['Python', 'TensorFlow', 'Deep Learning', 'NLP', 'Seq2Seq'],
      githubUrl: 'https://github.com/mansimm/Seq2seq-Chatbot',
      imageUrl: projectImages.chatbot,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects. Each one represents a unique challenge
          and learning experience.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  onError={(e) => {
                    console.error('Image failed to load:', project.imageUrl);
                    // Show a placeholder or hide the image
                    e.target.style.backgroundColor = '#f3f4f6';
                    e.target.style.display = 'flex';
                    e.target.style.alignItems = 'center';
                    e.target.style.justifyContent = 'center';
                    e.target.innerHTML = '<span style="color: #9ca3af;">Image not found</span>';
                  }}
                />
                <div className="project-overlay">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

