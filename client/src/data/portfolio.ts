import type { Skill, Experience, Project, Education, Certification, ContactInfo, Translation } from "@shared/schema";

export const contactInfo: ContactInfo = {
  name: "Mohammed Daghma",
  title: "Civil Engineer & Project Planner",
  titleFr: "Ingénieur civil et planificateur de projets",
  phone: "+1.438.630.3299",
  email: "mdaghma@hotmail.com",
  location: "Montreal, Quebec",
  oiqNumber: "6047927"
};

export const translations = {
  nav: {
    about: { en: "About", fr: "À propos" },
    experience: { en: "Experience", fr: "Expérience" },
    projects: { en: "Projects", fr: "Projets" },
    education: { en: "Education", fr: "Formation" },
    contact: { en: "Contact", fr: "Contact" }
  },
  hero: {
    designation: { en: "CPI, Member of OIQ", fr: "CPI, membre de l'OIQ" },
    subtitle: { 
      en: "Results-driven civil engineer with 5+ years of experience in construction project planning, coordination, and management",
      fr: "Ingénieur civil motivé et orienté vers les résultats, avec plus de 5 ans d'expérience dans la planification, la coordination et la gestion de projets de construction"
    },
    downloadCV: { en: "Download CV", fr: "Télécharger le CV" },
    scrollDown: { en: "Scroll to explore", fr: "Défiler pour explorer" }
  },
  stats: {
    experience: { en: "Years Experience", fr: "Années d'expérience" },
    certification: { en: "CPI, OIQ Member", fr: "CPI, membre de l'OIQ" },
    projects: { en: "Major Projects", fr: "Projets majeurs" }
  },
  about: {
    title: { en: "About Me", fr: "À propos de moi" },
    intro: { 
      en: "I am a rigorous and motivated civil engineer with five years of experience in construction project management, from planning to execution. My expertise includes project planning and coordination, quality assurance, site supervision, and risk management, with strong proficiency in tools such as Primavera P6, MS Project, and Office 365.",
      fr: "Je suis un ingénieur civil rigoureux et motivé, avec cinq ans d'expérience en gestion de projets de construction, de la planification à l'exécution. Mon expertise inclut la planification et la coordination de projets, l'assurance qualité, la supervision de chantier et la gestion des risques, avec une forte maîtrise des outils tels que Primavera P6, MS Project et Office 365."
    },
    specialization: { en: "Specialization", fr: "Spécialisation" },
    specializationText: {
      en: "Large-scale construction projects in aviation and infrastructure, with a focus on schedule management, resource coordination, and stakeholder collaboration.",
      fr: "Projets de construction à grande échelle dans l'aviation et les infrastructures, avec un accent sur la gestion des calendriers, la coordination des ressources et la collaboration avec les parties prenantes."
    }
  },
  skills: {
    title: { en: "Skills & Expertise", fr: "Compétences et expertise" },
    technical: { en: "Technical Skills", fr: "Compétences techniques" },
    software: { en: "Software Proficiency", fr: "Maîtrise des logiciels" },
    expert: { en: "Expert", fr: "Expert" },
    advanced: { en: "Advanced", fr: "Avancé" },
    proficient: { en: "Proficient", fr: "Compétent" }
  },
  experience: {
    title: { en: "Professional Experience", fr: "Expérience professionnelle" },
    present: { en: "Present", fr: "Présent" }
  },
  projects: {
    title: { en: "Major Projects", fr: "Projets majeurs" },
    viewDetails: { en: "View Details", fr: "Voir les détails" },
    area: { en: "Area", fr: "Superficie" },
    timeline: { en: "Timeline", fr: "Calendrier" },
    scope: { en: "Scope", fr: "Portée" }
  },
  education: {
    title: { en: "Education & Certifications", fr: "Formation et certifications" },
    educationSection: { en: "Education", fr: "Formation" },
    certificationsSection: { en: "Certifications", fr: "Certifications" },
    inProgress: { en: "In Progress", fr: "En cours" }
  },
  contact: {
    title: { en: "Get In Touch", fr: "Contactez-moi" },
    subtitle: {
      en: "I'm currently available for remote opportunities and projects in the Montreal area.",
      fr: "Je suis actuellement disponible pour des opportunités à distance et des projets dans la région de Montréal."
    },
    name: { en: "Name", fr: "Nom" },
    email: { en: "Email", fr: "Courriel" },
    subject: { en: "Subject", fr: "Sujet" },
    message: { en: "Message", fr: "Message" },
    send: { en: "Send Message", fr: "Envoyer le message" },
    availableFor: { en: "Available for", fr: "Disponible pour" },
    remote: { en: "Remote & Montreal, QC", fr: "Télétravail et Montréal, QC" },
    copyEmail: { en: "Copy email", fr: "Copier le courriel" },
    emailCopied: { en: "Email copied!", fr: "Courriel copié!" },
    validation: {
      nameMin: { en: "Name must be at least 2 characters", fr: "Le nom doit contenir au moins 2 caractères" },
      emailInvalid: { en: "Please enter a valid email address", fr: "Veuillez entrer une adresse courriel valide" },
      subjectMin: { en: "Subject must be at least 3 characters", fr: "Le sujet doit contenir au moins 3 caractères" },
      messageMin: { en: "Message must be at least 10 characters", fr: "Le message doit contenir au moins 10 caractères" }
    },
    oiqMemberNumber: { en: "OIQ Member Number", fr: "Numéro de membre OIQ" },
    oiqDesignation: { en: "Candidat à la profession d'ingénieur (CPI)", fr: "Candidat à la profession d'ingénieur (CPI)" },
    mailtoFrom: { en: "From", fr: "De" }
  }
};

export const skillsData = [
  { name: { en: "Schedule Management", fr: "Gestion du calendrier" }, level: "Expert" as const, category: "technical" as const },
  { name: { en: "Project Coordination", fr: "Coordination de projets" }, level: "Expert" as const, category: "technical" as const },
  { name: { en: "Quality Assurance", fr: "Assurance qualité" }, level: "Expert" as const, category: "technical" as const },
  { name: { en: "Site Supervision", fr: "Supervision de chantier" }, level: "Advanced" as const, category: "technical" as const },
  { name: { en: "Risk Management", fr: "Gestion des risques" }, level: "Advanced" as const, category: "technical" as const },
  { name: { en: "Quantity Estimation", fr: "Estimation des quantités" }, level: "Advanced" as const, category: "technical" as const },
  { name: { en: "Work Breakdown Structure (WBS)", fr: "Structure de répartition du travail (WBS)" }, level: "Expert" as const, category: "technical" as const },
  { name: { en: "Stakeholder Coordination", fr: "Coordination des parties prenantes" }, level: "Advanced" as const, category: "technical" as const },
  { name: { en: "Primavera P6", fr: "Primavera P6" }, level: "Expert" as const, category: "software" as const },
  { name: { en: "MS Project", fr: "MS Project" }, level: "Expert" as const, category: "software" as const },
  { name: { en: "AutoCAD", fr: "AutoCAD" }, level: "Advanced" as const, category: "software" as const },
  { name: { en: "Revit", fr: "Revit" }, level: "Advanced" as const, category: "software" as const },
  { name: { en: "SAP2000", fr: "SAP2000" }, level: "Proficient" as const, category: "software" as const },
  { name: { en: "Tekla", fr: "Tekla" }, level: "Proficient" as const, category: "software" as const },
  { name: { en: "BIM", fr: "BIM" }, level: "Advanced" as const, category: "software" as const },
  { name: { en: "Procore", fr: "Procore" }, level: "Advanced" as const, category: "software" as const },
  { name: { en: "Office 365", fr: "Office 365" }, level: "Expert" as const, category: "software" as const },
  { name: { en: "Bluebeam", fr: "Bluebeam" }, level: "Advanced" as const, category: "software" as const }
];

export const experiencesData = [
  {
    id: "1",
    role: { en: "Project Planner (Remote)", fr: "Planificateur de projet (à distance)" },
    company: "MGIC / Port Projects Management & Development Company (PPMDC)",
    location: "Jeddah, Saudi Arabia",
    startDate: "January 2025",
    endDate: "Present",
    responsibilities: [
      {
        en: "Developed and maintained comprehensive project schedules using Primavera P6 for Hajj Terminal finishing works",
        fr: "Développé et maintenu des calendriers de projet complets dans Primavera P6 pour les travaux de finition du terminal Hajj"
      },
      {
        en: "Created Work Breakdown Structures (WBS) to organize finishing tasks including walls, ceilings, flooring, and MEP systems",
        fr: "Créé des structures de répartition du travail (WBS) pour organiser les tâches de finition incluant murs, plafonds, planchers et systèmes MEP"
      },
      {
        en: "Monitored progress and updated schedules regularly to track completed tasks and identify potential delays",
        fr: "Surveillé l'avancement et mis à jour régulièrement les calendriers pour suivre les tâches terminées et identifier les retards potentiels"
      },
      {
        en: "Analyzed critical path to ensure key activities were completed without delays",
        fr: "Analysé le chemin critique pour garantir que les activités clés soient terminées sans retard"
      },
      {
        en: "Achieved on-time completion of critical finishing tasks and optimized resource allocation",
        fr: "Réalisé l'achèvement à temps des tâches de finition critiques et optimisé l'allocation des ressources"
      }
    ]
  },
  {
    id: "2",
    role: { en: "Project Planner / Coordinator", fr: "Planificateur / Coordonnateur de projet" },
    company: "SBG / Dar Al-Handasah - PPMDC",
    location: "Jeddah, Saudi Arabia",
    startDate: "June 2019",
    endDate: "January 2022",
    responsibilities: [
      {
        en: "Developed detailed project schedules using Primavera P6 for Marwa Bridge and Balcony construction",
        fr: "Développé des calendriers de projet détaillés à l'aide de Primavera P6 pour la construction du Pont Marwa et du Balcon"
      },
      {
        en: "Created WBS to break down complex tasks including marble formwork, cladding, stairs, and flooring",
        fr: "Créé des WBS pour décomposer des tâches complexes incluant coffrage en marbre, revêtement, escaliers et planchers"
      },
      {
        en: "Determined activity durations, start/end dates, and milestones for proper task sequencing",
        fr: "Déterminé les durées des activités, dates de début/fin et jalons pour une séquence appropriée des tâches"
      },
      {
        en: "Monitored progress and regularly updated schedules to reflect activity completion and identify delays",
        fr: "Surveillé l'avancement et mis à jour régulièrement les calendriers pour refléter l'achèvement des activités et identifier les retards"
      },
      {
        en: "Coordinated with multiple stakeholders to ensure timely project delivery",
        fr: "Coordonné avec plusieurs parties prenantes pour assurer la livraison du projet dans les délais"
      }
    ]
  },
  {
    id: "3",
    role: { en: "Construction Coordinator", fr: "Coordinateur de construction" },
    company: "SBG / Dar Al-Handasah",
    location: "Jeddah, Saudi Arabia",
    startDate: "September 2017",
    endDate: "November 2019",
    responsibilities: [
      {
        en: "Coordinated execution and renovation of 510,000 m² at King Abdulaziz Airport Hajj Terminal",
        fr: "Coordonné l'exécution et la rénovation de 510 000 m² au terminal Hajj de l'aéroport King Abdulaziz"
      },
      {
        en: "Managed installation of 350,000 meters of Kalzip facade system",
        fr: "Géré l'installation de 350 000 mètres de système de façade Kalzip"
      },
      {
        en: "Ensured compliance with specifications, timelines, and budgets for urgent projects",
        fr: "Assuré la conformité aux spécifications, délais et budgets pour des projets urgents"
      },
      {
        en: "Supervised quality assurance, material procurement, and safety management",
        fr: "Supervisé l'assurance qualité, l'approvisionnement en matériaux et la gestion de la sécurité"
      },
      {
        en: "Coordinated multi-disciplinary teams for complex construction activities",
        fr: "Coordonné des équipes multidisciplinaires pour des activités de construction complexes"
      }
    ]
  },
  {
    id: "4",
    role: { en: "Junior Engineer / Structural Engineer", fr: "Ingénieur junior / Ingénieur en structure" },
    company: "SBG / Dar Al-Handasah",
    location: "Jeddah, Saudi Arabia",
    startDate: "January 2019",
    endDate: "June 2019",
    responsibilities: [
      {
        en: "Provided structural engineering support for ongoing construction projects",
        fr: "Fourni un soutien en ingénierie structurale pour les projets de construction en cours"
      },
      {
        en: "Assisted in technical design and documentation preparation",
        fr: "Assisté dans la conception technique et la préparation de la documentation"
      },
      {
        en: "Coordinated with senior engineers on project deliverables",
        fr: "Coordonné avec les ingénieurs principaux sur les livrables du projet"
      },
      {
        en: "Conducted site inspections and quality control checks",
        fr: "Effectué des inspections de chantier et des contrôles de qualité"
      }
    ]
  },
  {
    id: "5",
    role: { en: "Site Engineer (Internship)", fr: "Ingénieur de chantier (Stage)" },
    company: "AECOM",
    location: "Jeddah, Saudi Arabia",
    startDate: "June 2017",
    endDate: "September 2017",
    responsibilities: [
      {
        en: "Supported site supervision and construction coordination activities",
        fr: "Soutenu la supervision de chantier et les activités de coordination de construction"
      },
      {
        en: "Assisted in preparation of technical reports and documentation",
        fr: "Assisté dans la préparation de rapports techniques et de documentation"
      },
      {
        en: "Gained hands-on experience in large-scale infrastructure projects",
        fr: "Acquis une expérience pratique dans des projets d'infrastructure à grande échelle"
      },
      {
        en: "Participated in quality inspections and site safety assessments",
        fr: "Participé aux inspections de qualité et aux évaluations de sécurité du chantier"
      }
    ]
  }
];

export const projectsData = [
  {
    id: "1",
    name: { en: "King Abdulaziz International Airport - Hajj Terminal", fr: "Aéroport international King Abdulaziz - Terminal Hajj" },
    description: { 
      en: "Completion of interior finishing works for the Hajj Terminal, including walls, ceilings, flooring, electrical and mechanical systems to prepare for Hajj season operations.",
      fr: "Achèvement des travaux de finition intérieure du terminal Hajj, incluant les murs, plafonds, planchers, systèmes électriques et mécaniques pour préparer les opérations de la saison du Hajj."
    },
    metrics: {
      area: "510,000 m²",
      timeline: "2017-2025",
      scope: { en: "Renovation & Finishing", fr: "Rénovation et finition" }
    },
    technologies: ["Primavera P6", "AutoCAD", "BIM", "Procore"]
  },
  {
    id: "2",
    name: { en: "Kalzip Facade System Installation", fr: "Installation du système de façade Kalzip" },
    description: { 
      en: "Installation of 350,000 meters of Kalzip facade system at King Abdulaziz International Airport as part of urgent project requirements.",
      fr: "Installation de 350 000 mètres de système de façade Kalzip à l'aéroport international King Abdulaziz dans le cadre d'exigences de projet urgentes."
    },
    metrics: {
      area: "350,000 m of facade",
      timeline: { en: "Urgent Timeline", fr: "Calendrier urgent" },
      scope: { en: "Installation & Coordination", fr: "Installation et coordination" }
    },
    technologies: ["Project Planning", "Quality Assurance", "Safety Management"]
  },
  {
    id: "3",
    name: { en: "King Faisal Specialist Hospital - AHU Installation", fr: "Hôpital spécialisé King Faisal - Installation AHU" },
    description: { 
      en: "Safe and efficient installation of Air Handling Units (AHUs) in compliance with all regulations and standards for hospital specialized systems.",
      fr: "Installation sûre et efficace d'unités de traitement d'air (AHU) en conformité avec toutes les réglementations et normes pour les systèmes spécialisés hospitaliers."
    },
    metrics: {
      timeline: { en: "Urgent Project", fr: "Projet urgent" },
      scope: { en: "MEP Systems", fr: "Systèmes MEP" }
    },
    technologies: ["MEP Coordination", "Compliance Management", "Quality Control"]
  },
  {
    id: "4",
    name: { en: "King Abdullah Extension Project - Marwa Bridge & Balcony", fr: "Projet d'extension King Abdullah - Pont Marwa et balcon" },
    description: { 
      en: "Construction coordination for Marwa Bridge and Balcony including marble formwork, cladding, stairs, and flooring at the Grand Mosque expansion.",
      fr: "Coordination de construction pour le pont Marwa et le balcon incluant coffrage en marbre, revêtement, escaliers et planchers dans l'extension de la Grande Mosquée."
    },
    metrics: {
      timeline: "2019-2022",
      scope: { en: "Structural & Finishing", fr: "Structural et finition" }
    },
    technologies: ["Primavera P6", "WBS Development", "Stakeholder Coordination"]
  }
];

export const educationData = [
  {
    id: "1",
    degree: { en: "Applied Science Studies (OIQ Recognition)", fr: "Études en sciences appliquées (Reconnaissance OIQ)" },
    institution: { en: "Concordia University", fr: "Université Concordia" },
    year: "2024",
    location: { en: "Montreal, QC", fr: "Montréal, QC" }
  },
  {
    id: "2",
    degree: { en: "B.Eng Honours in Civil Engineering", fr: "B.Eng avec distinction en génie civil" },
    institution: { en: "Loughborough University", fr: "Université Loughborough" },
    year: "2017",
    location: { en: "United Kingdom", fr: "Royaume-Uni" }
  }
];

export const certificationsData = [
  {
    id: "1",
    name: { en: "Project Management Professional (PMP®)", fr: "Professionnel en gestion de projet (PMP®)" },
    issuer: "PMI",
    year: "2025",
    status: "in-progress" as const
  },
  {
    id: "2",
    name: { en: "Candidat à la profession d'ingénieur (CPI)", fr: "Candidat à la profession d'ingénieur (CPI)" },
    issuer: { en: "Ordre des ingénieurs du Québec (OIQ)", fr: "Ordre des ingénieurs du Québec (OIQ)" },
    year: "2024",
    status: "completed" as const
  },
  {
    id: "3",
    name: { en: "Microsoft Project Training", fr: "Formation Microsoft Project" },
    issuer: "Udemy",
    year: "2023",
    status: "completed" as const
  },
  {
    id: "4",
    name: { en: "Primavera P6 Training", fr: "Formation Primavera P6" },
    issuer: "Udemy",
    year: "2021",
    status: "completed" as const
  }
];
