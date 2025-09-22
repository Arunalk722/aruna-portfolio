export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  age: string;
  birthDate: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface WorkExperience {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Project {
  title: string;
  technologies: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  role?: string;
  impact?: string;
}

export type ProficiencyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface SkillItemWithLevel {
  name: string;
  level: ProficiencyLevel;
}

export interface SkillCategoryWithLevel {
  category: string;
  items: SkillItemWithLevel[];
}

export interface CaseStudy {
  name: string;
  summary: string;
  role: string;
  responsibilities: string[];
  problem: string;
  approach: string;
  technologies: string[];
  results?: string[];
  screenshots?: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  skills: Skill[];
  workExperience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  aboutMe?: string;
  caseStudies?: CaseStudy[];
  skillMatrix?: SkillCategoryWithLevel[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "K.L. Aruna Shantha",
    title: "IT Executive & Software Engineer",
    tagline: "Building enterprise solutions that drive digital transformation and operational excellence",
    address: "Ruwanwella, Sri Lanka",
    phone: "+94 77 646 1602",
    email: "Arunalk722@hotmail.com",
    github: "github.com/Arunalk722",
    linkedin: "https://www.linkedin.com/in/aruna-shantha-05a726201/",
    age: "27 years old",
    birthDate: "July 22, 1998"
  },
  professionalSummary: `Results-focused IT Executive & Software Engineer delivering reliable infrastructure and high-impact software.

- Drove a Proxmox-based modernization and security uplift to 99.9% uptime while cutting downtime 90%.
- Built predictive analytics and ERP integrations that reduced manual entry 85% and sped reporting 70%.
- Shipped a project/accounting platform for 200+ users, accelerating financial reconciliations by 80%.

Want the same results? Download CV or contact me.`,
  aboutMe: `I’m an IT Executive and Software Engineer with a strong track record in building reliable infrastructure and delivering data‑driven software that moves the needle. Over the past several years, I’ve led modernization efforts (virtualization, security, uptime) while developing full‑stack solutions that automate workflows, integrate with ERP systems, and surface insights through analytics and dashboards. I’m driven by making complex systems simple, measurable, and maintainable—prioritizing clarity, performance, and user impact.

My strengths include designing resilient architectures (Proxmox, Linux, containerization), crafting scalable APIs and frontends, and aligning technical decisions with business outcomes. I excel in projects that blend infrastructure and product—predictive analytics platforms, operational dashboards, and enterprise integrations where uptime, data quality, and usability matter. I’m comfortable leading cross‑functional initiatives, translating requirements into roadmaps, and shipping iteratively with a focus on quality and results.

Colleagues describe me as collaborative, accountable, and calm under pressure. I value transparent communication, thoughtful documentation, and continuous improvement—because great systems aren’t just built; they’re operated, measured, and refined.`,
  skills: [
    {
      category: "Virtualization & Containerization",
      items: [
        "Proxmox VE Administration",
        "LXC Container Management",
        "Virtual Machine Management",
        "Resource Allocation & Optimization",
        "High Availability Clustering",
        "Backup & Disaster Recovery",
        "Performance Monitoring & Tuning"
      ]
    },
    {
      category: "Enterprise IT Infrastructure",
      items: [
        "Linux System Administration (Ubuntu, CentOS, Debian)",
        "Windows Server Administration (2012/2016/2019)",
        "Network Security & Firewall Management",
        "Azure Cloud Services",
        "Storage Management (SAN, NAS)",
        "IT Compliance & Risk Management",
        "Monitoring & Alerting Systems"
      ]
    },
    {
      category: "Software Development & Engineering",
      items: [
        "Full-Stack Development (React, .NET Core, Python,Flutter)",
        "Database Design & Management (MSSQL, MySQL)",
        "RESTful API Development",
        "Microservices Architecture",
        "DevOps & CI/CD Pipelines",
        "Agile Project Management",
        "Data Analytics & Reporting"
      ]
    },
    {
      category: "ERP & Business Systems",
      items: [
        "ERP Implementation & Integration",
        "Business Process Automation",
        "Systems Integration",
        "Workflow Optimization",
        "Custom Module Development",
        "User Training & Support",
        "Data Migration & Validation"
      ]
    },
    {
      category: "Networking & Cybersecurity",
      items: [
        "TCP/IP, DNS, DHCP Configuration",
        "Router & Switch Management",
        "Firewall Configuration (pfSense)",
        "Intrusion Detection & Prevention",
        "Security Audits & Compliance",
        "VPN & Remote Access Solutions",
        "Threat Mitigation Strategies"
      ]
    },
    {
      category: "Project & Team Leadership",
      items: [
        "Cross-Functional Team Management",
        "Vendor & Stakeholder Coordination",
        "Budget Planning & Cost Optimization",
        "Resource Allocation & Scheduling",
        "Change Management",
        "IT Asset Lifecycle Management",
        "Performance Metrics & KPI Development"
      ]
    }
  ],
  workExperience: [
    {
      position: "IT Executive",
      company: "Pussalla Meat Producers (Pvt) Ltd",
      period: "Feb 2021 – Present",
      responsibilities: [
        "Spearhead IT operations for a 400+ employee organization, achieving 99.9% system uptime and reducing operational downtime by 90% through proactive infrastructure management",
        "Manage Proxmox virtualization environment with 10+ LXC containers and VMs, optimizing resource utilization and reducing infrastructure costs by 40%",        
        "Create Poultry Management System with predictive analytics for chick mortality and egg production forecasting, improving operational efficiency by 60%",
        "Develop fingerprint data download software for attendance tracking, ensuring accurate and secure employee time recording",
        "Orchestrate comprehensive IT security overhaul including firewall upgrades, endpoint protection, and staff cybersecurity training, reducing security incidents by 85%",
        "Develop Eco Crop and Maize Moisture software applications for agricultural data management and analysis",
        "Lead ERP implementation project, integrating financial, inventory, and production modules which improved data accuracy by 95% and reporting speed by 70%"
      ]
    },
    {
      position: "Assistant IT Officer",
      company: "Brandix Apparel Solutions",
      period: "Feb 2020 – Feb 2021",
      responsibilities: [
        "Provided tier-2 technical support to 350+ users across multiple facilities, maintaining 98% SLA compliance and 95% first-call resolution rate",
        "Executed migration of legacy file servers to SharePoint Online, improving document accessibility and collaboration efficiency by 80%",
        "Deployed SFCS (Shop Floor Control System) and centralized print management solution, reducing printing costs by 40% and workflow bottlenecks",
        "Implemented asset tracking system for IT equipment, improving inventory accuracy and reducing equipment loss by 75%"
      ]
    },
    {
      position: "Freelance Software Developer",
      company: "Roky Holdings (Pvt) Ltd",
      period: "Mar 2025 – Aug 2025",
      responsibilities: [       
        "Architected and developed a cross-platform project and accounting management system serving 200+ concurrent users with role-based access control",
        "Utilized PHP for backend API development and Flutter for frontend implementation, achieving seamless integration across platforms",
        "Implemented real-time financial reporting dashboard with automated data synchronization, reducing report generation time by 85%",
        "Integrated third-party payment gateways and SMS services, enabling digital transaction capabilities for the organization"
      ]
    }
  ],
  education: [
    {
      degree: "BSc (Hons) in Software Engineering",
      institution: "ICBT Campus, affiliated with Cardiff Metropolitan University",
      period: "Expected November 2025"
    },
    {
      degree: "Higher National Diploma in Computing & Software Engineering",
      institution: "Cardiff Metropolitan University, ICBT Campus",
      period: "Completed Aug 2024",
      image: "/aruna-portfolio/certificates/CMU/CMU-1.jpg",
    }
  ],
  certifications: [
    {
      name: "Cisco Certified Network Professional (CCNP)",
      issuer: "Active Tech Networks",
      date: "Apr 2021",
    //  image: "/aruna-portfolio/certificates/AWS.png",
      credentialId: "CCNP-2021-001"
    },
    {
      name: "Cisco Certified Network Associate (CCNA) & Cisco Certified Entry Networking Technician (CCENT)",
      issuer: "Active Tech Networks",
      date: "Apr 2019",
      image: "/aruna-portfolio/certificates/CCNA/CCNA.jpg",
      credentialId: "CCNA-2019-001"
    },
    {
      name: "Java Application Development Certification",
      issuer: "Institute of Information Technology Sri Lanka (IITS)",
      date: "Apr 2022",
      image: "/aruna-portfolio/certificates/IITS.jpg",
      credentialId: "JAVA-2022-001"
    },
    {
      name: "Cybersecurity Essentials Certification",
      issuer: "Cisco Networking Academy",
      date: "2020",
      image: "/aruna-portfolio/certificates/Cybersecurity/Cybersecurity.jpg",
      credentialId: "CYBER-2021-001"
    },
    {
      name: "NDG LINUX ESSENTIALS",
      issuer: "NDG",
      date: "2021",
      image: "/aruna-portfolio/certificates/NDG/NDG.jpg",
      credentialId: "NDG-2021-001"
    }
    ,
    {
      name: "Get Connected",
      issuer: "Cisco Networking Academy",
      date: "2021",
      image: "/aruna-portfolio/certificates/GetConnected/GetConnected.jpg",
      credentialId: "GetConnected-2021-001"
    }
    ,
    {
      name: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      date: "2021",
      image: "/aruna-portfolio/certificates/NetworkingEssen/NetworkingEssen.jpg",
      credentialId: "GetConnected-2021-001"
    },
    {
      name: "Programming Essentials in Python",
      issuer: "OpenEDG Python Institute",
      date: "2021",
      image: "/aruna-portfolio/certificates/PCAP/PCAP.jpg",
      credentialId: "PCAP-2021-001"
    },
    {
      name: "AWS Summit",
      issuer: "AWS India",
      date: "2025",
      image: "/aruna-portfolio/certificates/AWS/AWS.png",
      credentialId: "AWS-2025-001"
    },  
  ],
  projects: [
    {
      title: "Enterprise Resource Planning (ERP) System Implementation",
      technologies: "Windows Server 2019, SQL Server 2019, .NET Framework",
      description: "Led comprehensive ERP deployment across all business units, integrating finance, procurement, inventory, and production modules. Reduced manual data entry by 85% and improved cross-departmental reporting accuracy by 90%. Implemented custom workflows that streamlined approval processes and reduced operational cycle time by 40%.",
      role: "Lead Developer & Project Manager",
      impact: "85% reduction in manual data entry, 90% improvement in reporting accuracy",
      image: "/aruna-portfolio/works/ERP.png"
    },
    {
      title: "Poultry Management & Analytics System",
      technologies: "Python (Flask), React.js, MSSQL, LXC, REST API",
      description: "Developed a predictive analytics platform for egg production forecasting and chick mortality prediction in poultry operations. Designed algorithms that improved forecasting accuracy by 95% and enabled proactive resource planning. Integrated real-time monitoring dashboards that provided actionable insights to management, resulting in a 35% increase in operational efficiency. Created a feature order system using predictions to balance actual egg stock",
      role: "Full-Stack Developer & Data Analyst",
      impact: "95% forecasting accuracy improvement, 35% operational efficiency increase",
      image: "/aruna-portfolio/works/PMS.png"
    },
    {
      title: "Eco Crop and Maize Moisture Management System",
      technologies: ".NET Core (C#), MSSQL, REST API",
      description: "Created comprehensive agricultural management solution for crop monitoring and moisture analysis. Developed data collection and analysis tools that improved crop yield prediction accuracy by 70%. Implemented real-time monitoring dashboards for field operations management.",
      role: "Backend Developer & System Architect",
      impact: "70% improvement in crop yield prediction accuracy",
      image: "/aruna-portfolio/works/Maize.png"
    },
    {
      title: "Enterprise Project & Accounting Management Platform",
      technologies: "Flutter, PHP, MySQL, REST API",
      description: "Designed and implemented a cross-platform solution for project tracking and financial management with role-based access control for Roky Holdings (Pvt) Ltd. Enabled real-time collaboration between field teams and management through web-based interfaces. Improved project tracking efficiency by 65% and reduced accounting reconciliation time by 80% through automated workflows. Published the mobile app to the Google Play Console, delivering feature improvements based on user feedback. This project was developed as the final requirement for my B.Sc. (Hons) Software Engineering top-up degree",
      role: "Full-Stack Developer & Mobile App Developer",
      impact: "65% project tracking efficiency improvement, 80% reduction in reconciliation time",
      image: "/aruna-portfolio/works/dashboard.png",
      githubUrl: "https://github.com/Arunalk722/ICBTRokyHoldingAccountingAppFrontEnd.git"
    },
    {
      title: "Integrated Attendance & Fingerprint Management System",
      technologies: "PHP, MSSQL, Biometric SDK, LXC, REST API",
      description: "Developed an automated attendance tracking system with integrated fingerprint scanning for HR operations, eliminating manual attendance recording and reducing HR administrative workload by 90%. Built a PHP-based web application to collect fingerprint data from multiple remote locations into a centralized database and seamlessly pushed the consolidated data into the HRIS system. Implemented best-in-class memory management and an eye-catching, intuitive dashboard to efficiently administrate all operations within the system",
      role: "Backend Developer & System Integrator",
      impact: "90% reduction in HR administrative workload",
      image: "/aruna-portfolio/works/Fingerprint software.png"
    }
  ],
  caseStudies: [
    {
      name: "ERP System Implementation",
      summary: "Enterprise-wide ERP rollout integrating finance, inventory, and production to standardize operations and reporting.",
      role: "Lead Developer & Project Manager",
      responsibilities: [
        "Defined architecture and data model across modules",
        "Led phased rollout, training, and change management",
        "Implemented RBAC, audit logs, and reporting views"
      ],
      problem: "Siloed processes and inconsistent data across departments increased manual work and delayed decision-making.",
      approach: "Designed modular architecture (Finance, Inventory, Production) with REST services, RBAC, and report-ready schemas. Executed iterative releases with stakeholder demos and playbooks.",
      technologies: [".NET (C#)", "MSSQL", "REST", "RBAC", "Windows Server"],
      results: [
        "85% reduction in manual data entry",
        "90% improvement in reporting accuracy",
        "Standardized workflows across teams"
      ],
      screenshots: ["/aruna-portfolio/works/ERP.png"]
    },
    {
      name: "Poultry Management & Analytics Platform",
      summary: "Data platform for forecasting egg production and chick mortality with operational dashboards.",
      role: "Full‑Stack Developer & Data Analyst",
      responsibilities: [
        "Built ingestion pipelines and analytics services",
        "Developed forecasting models and alerts",
        "Delivered dashboard UI and stakeholder training"
      ],
      problem: "Limited visibility into production forecasts led to reactive planning and inventory imbalance.",
      approach: "Implemented feature engineering and prediction services exposed via REST; designed dashboards emphasizing variance and trend analysis.",
      technologies: ["Python (Flask)", "React", "MSSQL", "LXC", "REST"],
      results: [
        "95% improvement in forecasting accuracy",
        "35% gain in operational efficiency",
        "Balanced stock via prediction-driven ordering"
      ],
      screenshots: ["/aruna-portfolio/works/PMS.png"]
    },
    {
      name: "Eco Crop & Maize Moisture System",
      summary: "Field data collection and moisture analysis to improve yield planning and quality assurance.",
      role: "Backend Developer & System Architect",
      responsibilities: [
        "Designed API and relational schema",
        "Implemented data validation and reporting",
        "Optimized queries and indexing for scale"
      ],
      problem: "Inaccurate and delayed moisture readings impacted quality and downstream planning.",
      approach: "Created mobile-friendly data capture, server-side validation, and analytics views with thresholds and segment-based reporting.",
      technologies: [".NET Core", "MSSQL", "REST"],
      results: [
        "70% improvement in crop yield prediction accuracy",
        "Faster QA cycles and more reliable planning"
      ],
      screenshots: ["/aruna-portfolio/works/Maize.png"]
    },
    {
      name: "Enterprise Project & Accounting Platform",
      summary: "Cross-platform project tracking and accounting with role-based access and real-time collaboration.",
      role: "Full‑Stack Developer & Mobile App Developer",
      responsibilities: [
        "Implemented modules for projects, tasks, and finance",
        "Integrated authentication and role-based permissions",
        "Shipped dashboards and release automation"
      ],
      problem: "Fragmented tools and manual reconciliation slowed financial visibility and project delivery.",
      approach: "Developed Flutter frontend and PHP backend APIs; added scheduled jobs for sync and consolidated financial views.",
      technologies: ["Flutter", "PHP", "MySQL", "REST"],
      results: [
        "65% improvement in project tracking efficiency",
        "80% reduction in reconciliation time"
      ],
      screenshots: ["/aruna-portfolio/works/dashboard.png"]
    }
  ],
  skillMatrix: [
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'Flutter (UI)', level: 'Intermediate' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: '.NET Core (C#)', level: 'Advanced' },
        { name: 'Python (Flask)', level: 'Intermediate' },
        { name: 'PHP', level: 'Intermediate' },
        { name: 'REST API Design', level: 'Advanced' }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'Microsoft SQL Server', level: 'Advanced' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'Data Modeling & Reporting', level: 'Advanced' }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Proxmox VE / LXC', level: 'Advanced' },
        { name: 'Linux Administration', level: 'Advanced' },
        { name: 'Azure (Cloud)', level: 'Intermediate' },
        { name: 'Git & CI/CD', level: 'Intermediate' }
      ]
    },
    {
      category: 'Others',
      items: [
        { name: 'ERP Implementation', level: 'Advanced' },
        { name: 'Networking & Security (pfSense)', level: 'Advanced' },
        { name: 'Agile Delivery', level: 'Intermediate' },
        { name: 'Stakeholder Management', level: 'Advanced' }
      ]
    }
  ]
};