import React, { useRef, useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaExternalLinkAlt, FaCode, FaEye, FaMoon, FaSun } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';
import html2pdf from 'html2pdf.js';
import './CV.css';
import profileImage from '../assets/profile.jpg';

const CV: React.FC = () => {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProjectImage, setSelectedProjectImage] = useState<string | null>(null);
  const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const generatePDF = () => {
    const element = cvRef.current;
    if (element) {
      const opt = {
        margin: 0.2,
        filename: 'Aruna_Shanta_CV.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const }
      };

      html2pdf().set(opt).from(element).save();
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className={`cv-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="cv-actions">
        <button 
          className="pdf-button" 
          onClick={generatePDF}
          aria-label="Download CV as PDF"
        >
          Download as PDF
        </button>
        <button 
          className="theme-toggle" 
          onClick={() => setIsDarkMode(!isDarkMode)}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      
      <div className="cv-content" ref={cvRef}>
        <header className="cv-header">
          <div className="header-content">
            <div className="profile-container">
              <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
            <h1 className="name">{resumeData.personalInfo.name}</h1>
            <h2 className="title">{resumeData.personalInfo.title}</h2>
            <p className="tagline">{resumeData.personalInfo.tagline}</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>{resumeData.personalInfo.address}</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>{resumeData.personalInfo.email}</span>
              </div>
              <a 
                href={`https://${resumeData.personalInfo.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaGithub className="contact-icon" />
                <span>{resumeData.personalInfo.github}</span>
              </a>
              <a 
                href={`https://${resumeData.personalInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaLinkedin className="contact-icon" />
                <span>{resumeData.personalInfo.linkedin}</span>
              </a>
            </div>
          </div>
        </header>

        <section className="section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary-text">{resumeData.professionalSummary}</p>
        </section>

        <section className="section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {resumeData.skills.map((skill, index) => (
              <div className="skill-category" key={index}>
                <h3 className="skill-category-title">{skill.category}</h3>
                <ul className="skill-items">
                  {skill.items.map((item, itemIndex) => (
                    <li className="skill-item" key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-list">
            {resumeData.workExperience.map((exp, index) => (
              <div className="experience-item" key={index}>
                <div className="experience-header">
                  <h3 className="position">{exp.position}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {resumeData.education.map((edu, index) => (
              <div className="education-item" key={index}>
                <h3 className="degree">{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="period">{edu.period}</p>
                {edu.image && (
                  <div className="cert-image-container">
                    <img 
                      src={edu.image} 
                      alt={`${edu.degree} certificate`}
                      className="cert-image"
                      onClick={() => setSelectedCertImage(edu.image!)}
                    />
                    <div className="cert-overlay">
                      <FaEye className="view-icon" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {resumeData.certifications.map((cert, index) => (
              <div className="certification-item" key={index}>
                <div className="cert-content">
                  <div className="cert-header">
                    <h3 className="cert-name">{cert.name}</h3>
                    {cert.credentialId && (
                      <span className="credential-id">ID: {cert.credentialId}</span>
                    )}
                  </div>
                  <div className="cert-details">
                    <p className="issuer">{cert.issuer}</p>
                    <p className="date">{cert.date}</p>
                  </div>
                  
                  {cert.image && (
                    <div className="cert-image-container">
                      <img 
                        src={cert.image} 
                        alt={`${cert.name} certificate`}
                        className="cert-image"
                        onClick={() => setSelectedCertImage(cert.image!)}
                      />
                      <div className="cert-overlay">
                        <FaEye className="view-icon" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Project Highlights</h2>
          <div className="projects-list">
            {resumeData.projects.map((project, index) => (
              <div className="project-item" key={index}>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaCode /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                  </div>
                </div>
                
                {project.role && (
                  <p className="project-role"><strong>Role:</strong> {project.role}</p>
                )}
                
                <p className="technologies"><strong>Technologies:</strong> {project.technologies}</p>
                
                {project.impact && (
                  <div className="project-impact">
                    <strong>Key Impact:</strong> {project.impact}
                  </div>
                )}
                
                <p className="project-description">{project.description}</p>
                
                {project.image && (
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="project-image"
                      onClick={() => setSelectedProjectImage(project.image!)}
                    />
                    <div className="image-overlay">
                      <FaEye className="view-icon" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {/* Image Modals */}
      {selectedProjectImage && (
        <div className="image-modal" onClick={() => setSelectedProjectImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedProjectImage(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <img src={selectedProjectImage} alt="Project screenshot" className="modal-image" />
          </div>
        </div>
      )}
      
      {selectedCertImage && (
        <div className="image-modal" onClick={() => setSelectedCertImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedCertImage(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <img src={selectedCertImage} alt="Certificate" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CV;