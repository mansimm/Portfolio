import React from 'react';
import './Certifications.css';

// Certification PDF files
const certificationPdfs = {
  javaDesignPatterns: process.env.PUBLIC_URL + '/images/certifications/Design_pattern_certificate_udemy.pdf',
  microservices: process.env.PUBLIC_URL + '/images/certifications/Microservices_udemy_certificate.pdf',
};

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Java Design Patterns',
      institution: 'Udemy',
      field: 'Design Patterns',
      duration: '2024',
      pdfUrl: certificationPdfs.javaDesignPatterns,
      credentialUrl: '', // Add credential URL if available
      description: [
        'Implemented key Java design patterns for scalable, maintainable code',
        'Applied design patterns to improve architecture and reusability',
        'Gained expertise in creational, structural, and behavioral patterns'
      ],
    },
    {
      id: 2,
      title: 'Microservices With Spring Boot and Spring Cloud',
      institution: 'Udemy',
      field: 'Software Architecture',
      duration: '2023',
      pdfUrl: certificationPdfs.microservices,
      credentialUrl: '', // Add credential URL if available
      description: [
        'Comprehensive course on building microservices with Spring Boot',
        'Hands-on experience with service discovery, API gateway, and distributed systems',
        'Learned to implement fault tolerance and load balancing in microservices'
      ],
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications and course completions
        </p>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <div className="certification-meta">
                  <span className="certification-institution">{cert.institution}</span>
                  <span className="certification-duration">{cert.duration}</span>
                </div>
                {cert.field && (
                  <span className="certification-field">{cert.field}</span>
                )}
                <ul className="certification-description">
                  {cert.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-pdf-button"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  View Certificate PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

