import React, { useRef } from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';
import html2pdf from 'html2pdf.js';
import './CV.css';
import profileImage from '../assets/profile.jpg';

const CV: React.FC = () => {
  const cvRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="cv-container">
      <div className="cv-actions">
        <button className="pdf-button" onClick={generatePDF}>
          Download as PDF
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
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-list">
            {resumeData.certifications.map((cert, index) => (
              <div className="certification-item" key={index}>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Project Highlights</h2>
          <div className="projects-list">
            {resumeData.projects.map((project, index) => (
              <div className="project-item" key={index}>
                <h3 className="project-title">{project.title}</h3>
                <p className="technologies"><strong>Technologies:</strong> {project.technologies}</p>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;