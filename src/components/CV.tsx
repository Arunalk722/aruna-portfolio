import React, { useRef, useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaExternalLinkAlt, FaCode, FaEye, FaMoon, FaSun } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';
// Defer loading heavy libraries until needed to reduce initial bundle size
import './CV.css';
import profileImage from '../assets/profile.jpg';

const CV: React.FC = () => {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProjectImage, setSelectedProjectImage] = useState<string | null>(null);
  const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Close image modals with Escape key for accessibility
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProjectImage) setSelectedProjectImage(null);
        if (selectedCertImage) setSelectedCertImage(null);
      }
    };
    if (selectedProjectImage || selectedCertImage) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProjectImage, selectedCertImage]);

  const generatePDF = async () => {
    const element = cvRef.current;
    if (element) {
      const opt = {
        margin: 0.2,
        filename: 'Aruna_Shanta_CV.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const }
      };

      const { default: html2pdf } = await import('html2pdf.js');
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
              <img 
                src={profileImage} 
                alt="Aruna Shantha - IT Executive and Software Engineer professional headshot" 
                className="profile-image" 
                loading="eager"
                decoding="async"
                width={160}
                height={160}
              />
            </div>
            <h1 className="name">{resumeData.personalInfo.name}</h1>
            <h2 className="title">{resumeData.personalInfo.title}</h2>
            <p className="tagline">{resumeData.personalInfo.tagline}</p>
            <div className="hero-intro">
              <h3 className="hero-headline">Engineering reliable systems that deliver measurable outcomes</h3>
              <p className="hero-sub">I build infrastructure and software that improve uptime, automate workflows, and turn data into decisions. Seeking full‑stack, infrastructure/DevOps, and data‑driven product roles.</p>
              <ul className="hero-strengths">
                <li>99.9% uptime via Proxmox modernization and security hardening</li>
                <li>ERP integrations cutting manual entry 85% and speeding reports 70%</li>
                <li>Predictive analytics improving planning accuracy to 95%</li>
              </ul>
              <div className="hero-cta">
                <a href={`mailto:${resumeData.personalInfo.email}`} className="btn btn-primary" aria-label="Contact Aruna via email">Contact</a>
                <button type="button" onClick={generatePDF} className="btn btn-secondary" aria-label="Generate and download CV as PDF">Download CV</button>
                <a href="#projects" className="btn btn-ghost" aria-label="Jump to projects section">View My Work</a>
              </div>
            </div>
            
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
                <span>GitHub</span>
              </a>
              <a 
                href={resumeData.personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaLinkedin className="contact-icon" />
                <span>LinkedIn</span>
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
                      alt={`Certificate for ${edu.degree} from ${edu.institution}`}
                      className="cert-image"
                      onClick={() => setSelectedCertImage(edu.image!)}
                      role="button"
                      tabIndex={0}
                      loading="lazy"
                      decoding="async"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedCertImage(edu.image!);
                        }
                      }}
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
                        alt={`${cert.name} certification from ${cert.issuer} issued on ${cert.date}`}
                        className="cert-image"
                        onClick={() => setSelectedCertImage(cert.image!)}
                        role="button"
                        tabIndex={0}
                        loading="lazy"
                        decoding="async"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelectedCertImage(cert.image!);
                          }
                        }}
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

        

        <section className="section" id="projects">
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

                <ul className="project-bullets">
                  <li><strong>Approach:</strong> Built with {project.technologies}. {project.role ? `Role: ${project.role}.` : ''}</li>
                  <li><strong>Outcome:</strong> {project.impact ? project.impact : 'Delivered measurable improvements and adoption.'}</li>
                  <li><strong>Learned:</strong> Deepened practical experience with {project.technologies} and product delivery.</li>
                </ul>
                
                {project.image && (
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={`Screenshot of ${project.title} - ${project.technologies} project showing key features and user interface`}
                      className="project-image"
                      onClick={() => setSelectedProjectImage(project.image!)}
                      loading="lazy"
                      decoding="async"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedProjectImage(project.image!);
                        }
                      }}
                    />
                    <div className="image-overlay">
                      <FaEye className="view-icon" />
                      <span className="overlay-text">Click to view full size</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Case Study: ERP System Implementation</h2>
          <div className="projects-list">
            <div className="project-item">
              <div className="project-header">
                <h3 className="project-title">ERP System Implementation</h3>
              </div>
              <p className="project-description"><strong>Problem:</strong> Clients needed a unified ERP to eliminate siloed inventory, payments, invoicing, and reporting, enabling accurate, timely decisions.</p>
              <p className="project-description"><strong>Role:</strong> Full stack developer (end-to-end ownership: design, backend, UI, deployment).</p>
              <p className="project-description"><strong>Constraints:</strong> Inventory management, payment handling, invoicing, consolidated reporting; strict role-based permissions; minimal downtime; strong OOP and maintainability.</p>
              <p className="project-description"><strong>Approach:</strong> Domain-driven modules (Items, Purchases, Sales, Payments, Invoicing, Reporting); layered architecture (UI → Services → Repositories); RBAC; transactional integrity; report-ready schemas; iterative releases.</p>
              <p className="project-description"><strong>Architecture diagram note:</strong> UI (web) → API/Service layer (C#) → RBAC/Auth → Modules (Items, Purchase, Sales, Payments, Invoices, Reports) → MSSQL; background jobs for reconciliations and daily summaries.</p>
              <p className="project-description"><strong>Tech stack:</strong> C# (.NET), MSSQL Server, REST, OOP, RBAC.</p>
              <p className="project-description"><strong>Outcome:</strong> 85% reduction in manual data entry and 90% improvement in reporting accuracy; standardized processes across inventory, payments, and invoicing.</p>
              <p className="project-description"><strong>Lessons:</strong> Design around domains; enforce RBAC early; favor layered/OOP patterns; model data for reporting from day one; short user feedback loops accelerate adoption.</p>
            </div>
          </div>
        </section>

        <section className="section contact-section" aria-labelledby="contact-title">
          <h2 className="section-title" id="contact-title">Get in touch</h2>
          <p className="summary-text" style={{textAlign:'center'}}>
            Interested in building reliable infrastructure or data‑driven products? Let’s talk.
          </p>
          <div className="hero-cta" style={{justifyContent:'center'}}>
            <a href={`mailto:${resumeData.personalInfo.email}`} className="btn btn-primary" aria-label="Hire Aruna via email">Hire me</a>
            <button type="button" onClick={generatePDF} className="btn btn-secondary" aria-label="Generate and download CV as PDF">Download CV</button>
            <a href={`https://${resumeData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" aria-label="View GitHub profile">GitHub</a>
            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" aria-label="View LinkedIn profile">LinkedIn</a>
          </div>
        </section>
      </div>
      
      <footer className="site-footer" role="contentinfo">
        <div className="footer-inner">
          <div className="footer-brand">AS</div>
          <div className="footer-links">
            <a href={`mailto:${resumeData.personalInfo.email}`} className="footer-link" aria-label="Email Aruna">{resumeData.personalInfo.email}</a>
            <a href={`https://${resumeData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub profile">GitHub</a>
            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn profile">LinkedIn</a>
            <button type="button" onClick={generatePDF} className="footer-link" aria-label="Generate and download CV as PDF" style={{background:'transparent',border:'none',padding:0,cursor:'pointer',color:'inherit'}}>Download CV</button>
          </div>
        </div>
      </footer>

      {selectedProjectImage && (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label="Project image viewer" onClick={() => setSelectedProjectImage(null)}>
          <div className="modal-content" role="document" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedProjectImage(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <img src={selectedProjectImage} alt="Project screenshot - Full size view" className="modal-image" />
          </div>
        </div>
      )}
      
      {selectedCertImage && (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label="Certificate image viewer" onClick={() => setSelectedCertImage(null)}>
          <div className="modal-content" role="document" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedCertImage(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <img src={selectedCertImage} alt="Professional certificate - Full size view" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CV;