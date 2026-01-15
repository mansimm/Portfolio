import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Amdocs',
      jobTitle: 'Software Developer',
      duration: 'Aug 2022 - Present',
      description: [
        'Developed and maintained scalable backend systems using Java and Spring Boot',
        'Implemented microservices architecture for improved system performance',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Optimized database queries resulting in 40% improvement in response time',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      id: 2,
      company: 'Infosys',
      jobTitle: 'Senior System Engineer',
      duration: 'Nov 2020 - Jul 2022',
      description: [
        'Developed backend using Java & Spring boot, connected app with Elasticsearch cluster',
        'Created dashboards to monitor logs using Elasticsearch, Kibana, Logstash, Filebeat',
        'Worked on Oracle database to write and debug complex queries',
        'Utilized Agile methodologies to streamline development processes, ensuring timely project delivery'
      ]
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          A summary of my professional journey and key contributions
        </p>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-job-title">{exp.jobTitle}</h3>
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

