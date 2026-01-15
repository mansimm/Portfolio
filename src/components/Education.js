import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      title: 'Bachelor of Engineering (B.E.)',
      institution: 'Savitribai Phule Pune University',
      field: 'Computer Science',
      duration: '2016 - 2020',
      description: [
        'Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering',
        'Graduated with distinction',
        'Final year project: Telegram Chatbot'
      ]
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background and educational qualifications
        </p>
        <div className="education-timeline">
          {education.map((item) => (
            <div key={item.id} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="education-title">{item.title}</h3>
                  <span className="education-duration">{item.duration}</span>
                </div>
                <div className="education-institution">
                  <span className="institution-name">{item.institution}</span>
                  {item.field && (
                    <>
                      <span className="field-separator">•</span>
                      <span className="field-name">{item.field}</span>
                    </>
                  )}
                </div>
                {item.description && item.description.length > 0 && (
                  <ul className="education-description">
                    {item.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

