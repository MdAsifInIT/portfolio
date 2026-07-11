// ============================================================================
// PORTFOLIO CONFIGURATION - Single Source of Truth (SSOT)
// ============================================================================

// ---------------------------------------------------------------------------
// GLOBAL SITE CONFIGURATION & UI TEXT
// ---------------------------------------------------------------------------
export const siteConfig = {
  // Feature Toggles
  sections: {
    showHero: true,
    showProjects: true,
    showOpenSource: false,
    showAbout: true,
    showFooter: true,
    showTestimonials: false,
    showRepoStats: false, // Toggles stars and forks visibility across the site
    showCertifications: true,
  },

  // Centralized UI Strings & Labels
  ui: {
    common: {
      loading: "Loading...",
      error: "Something went wrong",
    },
  },

  // Header/Navigation Configuration
  header: {
    logo: "MA",
    navigationItems: [
      { id: "home", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "certifications", label: "Certifications" },
    ],
    ariaLabels: {
      themeToggle: "Toggle theme",
      mobileMenu: "Toggle menu",
    },
  },

  // Hero Section Configuration
  hero: {
    ctaButtons: {
      primary: "View Projects",
      secondary: "Contact Me",
    },
  },

  // Projects Section Configuration
  projects: {
    title: "Featured Projects",
    description:
      "A collection of applications, tools, and scripts I've built to solve real-world problems.",
    categories: ["All", "Apps", "Tools", "Scripts"],
    ui: {
      featuredLabel: "Featured",
      viewDetailsLabel: "View Details",
    },
  },

  // Open Source Section Configuration
  openSource: {
    title: "Open Source Contributions",
    description:
      "Building and maintaining open source projects that developers around the world use.",
    githubProfileUrl: "https://github.com/mdasifinit",
    ui: {
      buttonText: "View All on GitHub",
    },
    showStats: false, // Toggles stars and forks visibility locally for this section
  },

  // About Section Configuration
  about: {
    title: "About Me",
    description:
      "My journey in software development, expertise, and continuous learning.",
    timelineTitle: "Experience & Education",
    skillsTitle: "Technical Skills",
  },

  // Certifications Section Configuration
  certifications: {
    title: "Certifications",
    description:
      "Professional certifications validating my expertise in Microsoft technologies and cloud services.",
  },

  // Contact Configuration
  contact: {
    title: "Get In Touch",
    description:
      "Send me a message and I'll get back to you as soon as possible.",
    submitButton: "Send Message",
  },

  // Footer Configuration
  footer: {
    quickLinksTitle: "Quick Links",
    connectTitle: "Connect",
    copyrightText: "All rights reserved.",
    builtWithText: "Built with",
    builtWithTech: "and React",
    // Dynamic Footer Links
    links: [
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "certifications", label: "Certifications" },
    ],
  },
};

// ---------------------------------------------------------------------------
// PERSONAL INFORMATION
// ---------------------------------------------------------------------------
export const personalInfo = {
  name: "Md Asif",
  title: "AI Automation Engineer",
  bio: "I automate workflows and build fast, scalable applications for businesses. Passionate about clean code, AI tools, and creating delightful user experiences.",
  email: "mdasifinit@gmail.com",
  location: "Bengaluru, IN",
};

// ---------------------------------------------------------------------------
// SOCIAL LINKS
// ---------------------------------------------------------------------------
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/mdasifinit", icon: "Github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mdasifinit",
    icon: "Linkedin",
  },
  { name: "Twitter", url: "https://twitter.com/mdasifinit", icon: "Twitter" },
  {
    name: "Instagram",
    url: "https://instagram.com/mdasifinit",
    icon: "Instagram",
  },
  { name: "YouTube", url: "https://youtube.com/@mdasifinit", icon: "Youtube" },
  { name: "Linktree", url: "https://linktr.ee/mdasifinit", icon: "Link" },
];

// ---------------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: 1,
    title: "AICP (AI CoPackager)",
    category: "Tools",
    description:
      "Python-first agentic packaging platform for enterprise Windows deployment teams, with deterministic PSADT generation, GitHub PR automation, and QA gates.",
    techStack: [
      "Python",
      "FastAPI",
      "Temporal",
      "PostgreSQL",
      "PSAppDeployToolkit",
      "OpenAI API",
      "GitHub Actions",
    ],
    image:
      "https://images.unsplash.com/photo-1743385779347-1549dabf1320?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: null,
    githubUrl: "https://github.com/MdAsifInIT/AICP",
    featured: true,
    details: {
      problem:
        "Manual app packaging is slow, inconsistent, and hard to audit, especially when silent switches, PSADT structure, and validation steps vary by package.",
      role: "Lead Developer & Architect",
      features: [
        "FastAPI intake API with job status, approval, rejection, and artifact lookup",
        "Temporal workflows for durable analysis, generation, PR creation, QA, and promotion",
        "Deterministic PSADT rendering from approved templates and validated manifests",
        "One branch and one PR per package for clear auditability",
        "Simulated, Hyper-V, or Azure QA providers without locking the product to one execution target",
      ],
      outcomes:
        "Turns packaging into a governed workflow where AI advises, deterministic templates decide, and QA gates control promotion.",
    },
  },
  {
    id: 2,
    title: "Self-Evolving Transpiler",
    category: "Tools",
    description:
      "An enterprise VBScript-to-PSADT transpiler that combines deterministic mappings, GPT 5.6 Terra structured outputs, and review-gated self-evolving rules.",
    techStack: [
      "Python 3.11",
      "FastAPI",
      "Pydantic",
      "GPT 5.6 Terra",
      "React 19",
      "Docker",
      "PSADT",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/MdAsifInIT/Self-Evolving-Transpiler",
    featured: true,
    details: {
      problem:
        "Legacy VBScript deployment wrappers are difficult to modernize, and free-form AI translation creates too much risk for enterprise packaging.",
      role: "Creator & Maintainer",
      features: [
        "Deterministic mapping layer for known VBScript functions",
        "OpenAI-assisted mapping candidates with review-gated promotion",
        "Strict Pydantic schemas and structured outputs for predictable translation blocks",
        "Token-aware execution, PSADT quality controls, and safety validation",
        "Docker Compose deployment with a React status and usage UI",
      ],
      outcomes:
        "Creates PSADT scripts with repeatable rules, safer output, and a path for the transpiler to evolve through reviewable mappings.",
    },
  },
  {
    id: 3,
    title: "Samruna",
    category: "AI",
    description:
      "HCLTech OpenAI Hackathon project focused on practical AI-driven problem solving and rapid prototyping.",
    techStack: ["OpenAI", "Hackathon Build", "Prompt Engineering"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1170&auto=format&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/MdAsifInIT/Samruna",
    featured: true,
    details: {
      problem:
        "Hackathon teams need to deliver a high-impact AI solution in a short time frame with clear real-world value.",
      role: "Builder & Contributor",
      features: [
        "Built as part of HCLTech OpenAI Hackathon",
        "Rapid AI solution prototyping with practical use-case focus",
        "Feature set optimized for demo readiness and execution speed",
      ],
      outcomes:
        "Demonstrated strong execution, practical AI application, and fast iteration under hackathon constraints.",
    },
  },
  {
    id: 4,
    title: "OmniBranch",
    category: "AI",
    description:
      "Autonomous AI execution skill project designed to run structured tasks with minimal manual intervention.",
    techStack: ["AI Agents", "Autonomous Execution", "Workflow Automation"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/MdAsifInIT/OmniBranch",
    featured: true,
    details: {
      problem:
        "Teams need a reliable way to execute AI-driven tasks autonomously while preserving clear structure and control.",
      role: "Creator & Maintainer",
      features: [
        "Autonomous AI task execution flow",
        "Structured branch-oriented workflow design",
        "Reusable skill-based execution patterns",
      ],
      outcomes:
        "Improves consistency and speed for repetitive AI-assisted execution workstreams.",
    },
  },
  {
    id: 5,
    title: "PokeSwitch",
    category: "Apps",
    description:
      "A lightweight WPF utility that toggles Docker Desktop, WSL2, and NVIDIA GPU state so developers can reclaim RAM and battery when Docker is idle.",
    techStack: [
      "C#",
      ".NET 10",
      "WPF",
      "WPF-UI",
      "Windows Forms",
      "PowerShell",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/MdAsifInIT/pokeswitch",
    featured: true,
    details: {
      problem:
        "Docker-heavy Windows dev setups keep WSL and GPU resources alive even when they are not needed.",
      role: "Creator & Maintainer",
      features: [
        "Dashboard with Docker, WSL, container, and vmmem status",
        "Start and stop flows for WSL keep-alive and Docker Desktop",
        "Nuclear shutdown path to reclaim memory quickly",
        "NVIDIA GPU toggle with guardrails for device matching",
        "Tray quick actions, diagnostics, and exportable logs",
      ],
      outcomes:
        "Makes it easy to pause a Docker-centric Windows environment and recover laptop resources in a few clicks.",
    },
  },
  {
    id: 6,
    title: "NotionLM",
    category: "Tools",
    description:
      "A Notion-to-Google Docs sync pipeline that checkpoints recent edits, renders page content, and upserts into a single Google Doc.",
    techStack: [
      "Python",
      "Notion API",
      "Google Docs API",
      "Docker",
      "OAuth 2.0",
      "Checkpointing",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/MdAsifInIT/NotionLM",
    featured: true,
    details: {
      problem:
        "Manually copying Notion content into Docs is repetitive and easy to duplicate or lose formatting.",
      role: "Creator & Maintainer",
      features: [
        "Queries recently edited Notion pages with checkpoint overlap",
        "Extracts page text, blocks, and rich properties into syncable entries",
        "Uses idempotent Google Docs named ranges for upserts",
        "Keeps atomic state and metrics files for safe repeat runs",
        "Supports OAuth token refresh for unattended Docker runs",
      ],
      outcomes:
        "Keeps a single Google Doc current from Notion edits while avoiding duplicate content and preserving sync checkpoints.",
    },
  },
  {
    id: 7,
    title: "Enterprise Solutions",
    category: "Apps",
    description:
      "Full-stack inventory management solution with a web client, mobile app, and server API. Designed for product, customer, and order management with container-ready deployment.",
    techStack: [
      "JavaScript",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Docker",
    ],
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop",
    liveUrl: "",
    githubUrl: "https://github.com/MdAsifInIT/Inventory-Solutions-4-Business-3",
    featured: true,
    details: {
      problem:
        "Inventory, customer, and order workflows need a unified system that is easier to extend and deploy across app surfaces.",
      role: "Creator & Maintainer",
      features: [
        "Web client, mobile app, and server API in one repo",
        "Product, customer, and order management workflows",
        "Container-friendly structure for future deployment",
        "Modernized business app foundation for multi-surface use",
      ],
      outcomes:
        "Provides a centralized business operations platform that can be expanded across web, mobile, and server layers.",
    },
  },
];

export const openSourceRepos = [
  {
    id: 1,
    name: "The-Ultimate-HTML-Course",
    description:
      "A full HTML course with practical exercises, project ideas, a handbook and cheat sheets — from basics to advanced topics (chapter-based).",
    language: "HTML",
    stars: 0,
    forks: 0,
    topics: [],
    lastUpdated: "2024-10-22",
    url: "https://github.com/MdAsifInIT/The-Ultimate-HTML-Course",
  },
  {
    id: 2,
    name: "The-Ultimate-C-Programming-Course",
    description:
      "C programming fundamentals and course material including code snippets, handbooks, practice sets and problem sets — a self-reference guide.",
    language: "C",
    stars: 0,
    forks: 0,
    topics: [],
    lastUpdated: "2024-11-03",
    url: "https://github.com/MdAsifInIT/The-Ultimate-C-Programming-Course",
  },
  {
    id: 3,
    name: "Sigma-Web-Development",
    description:
      "Sigma web development course projects (index.html, style.css, app.js) — a learning repository that follows a step-by-step course.",
    language: "HTML / CSS / JavaScript",
    stars: 0,
    forks: 0,
    topics: [],
    lastUpdated: "2025-05-04",
    url: "https://github.com/MdAsifInIT/Sigma-Web-Development",
  },
  {
    id: 4,
    name: "Packaging-Workflow-Automation",
    description:
      "End-to-end packaging workflow automation scripts and tools for enterprise software deployment — covering installer creation, conversion, system context launches, and monitoring.",
    language: "PowerShell / Batch",
    stars: 0,
    forks: 0,
    topics: [],
    lastUpdated: "2025-11-17",
    url: "https://github.com/MdAsifInIT/Packaging-Workflow-Automation",
  },
];

// ---------------------------------------------------------------------------
// SKILLS
// ---------------------------------------------------------------------------
export const skills = {
  "AI & Automation": [
    {
      name: "Prompt Engineering",
      description:
        "Techniques for crafting effective prompts to communicate with large language models, optimizing output quality and relevance.",
      url: "https://platform.openai.com/docs/guides/prompt-engineering",
    },
    {
      name: "RAG (Retrieval-Augmented Generation)",
      description:
        "Architecture that combines information retrieval with text generation, allowing LLMs to answer questions using external knowledge bases.",
      url: "https://www.ibm.com/topics/retrieval-augmented-generation",
    },
    {
      name: "LLM API Integration",
      description:
        "Connecting applications to Large Language Models via APIs like OpenAI, Anthropic, or local models to add intelligent features.",
      url: "https://platform.openai.com/docs/api-reference",
    },
    {
      name: "Workflow Automation (n8n)",
      description:
        "Building resilient, multi-step automated workflows with n8n to connect various services and APIs.",
      url: "https://n8n.io/",
    },
    {
      name: "Agent-Based Development",
      description:
        "Designing and implementing autonomous AI agents capable of planning, using tools, and achieving complex goals.",
      url: "https://www.langchain.com/agents",
    },
  ],
  "Enterprise Packaging": [
    {
      name: "AdminStudio",
      description:
        "Comprehensive automated application packaging tool for preparing reliable MSI, MSIX, and App-V packages for enterprise deployment.",
      url: "https://www.flexera.com/products/adminstudio",
    },
    {
      name: "MSIX Packaging",
      description:
        "Creating modern Windows application packages using the MSIX format for reliable and clean installations.",
      url: "https://learn.microsoft.com/en-us/windows/msix/",
    },
    {
      name: "PSAppDeployToolkit",
      description:
        "Framework for wrapping and automating enterprise application installations using PowerShell.",
      url: "https://psappdeploytoolkit.com/",
    },
    {
      name: "SCCM & Intune",
      description:
        "Managing and deploying applications and configurations across enterprise device fleets using Microsoft Endpoint Manager.",
      url: "https://learn.microsoft.com/en-us/mem/",
    },
  ],
  "Programming & Scripting": [
    {
      name: "C# & .NET",
      description:
        "Developing modern, scalable, and high-performance applications across multiple platforms using Microsoft's ecosystem.",
      url: "https://dotnet.microsoft.com/",
    },
    {
      name: "Python",
      description:
        "High-level programming language used for scripting, data analysis, AI, and automation.",
      url: "https://www.python.org/",
    },
    {
      name: "PowerShell",
      description:
        "Task automation and configuration management framework developed by Microsoft, consisting of a command-line shell and scripting language.",
      url: "https://learn.microsoft.com/en-us/powershell/",
    },
    {
      name: "Bash & Shell",
      description:
        "Writing scripts to automate tasks and manage systems in Unix-like environments.",
      url: "https://www.gnu.org/software/bash/",
    },
  ],
  // "Web Development": [
  //   {
  //     name: "React & Next.js",
  //     description: "Building interactive, performant, and SEO-friendly user interfaces and web applications.",
  //     url: "https://nextjs.org/"
  //   },
  //   {
  //     name: "REST APIs & GraphQL",
  //     description: "Designing and consuming web application interfaces for efficient data exchange between front-end and back-end systems.",
  //     url: "https://graphql.org/"
  //   },
  // ],
  "DevOps & Tools": [
    {
      name: "Docker",
      description:
        "Developing, shipping, and running isolated and scalable applications using containerization technology.",
      url: "https://www.docker.com/",
    },
    {
      name: "CI/CD (GitHub Actions)",
      description:
        "Automating software build, test, and deployment pipelines using continuous integration and delivery practices.",
      url: "https://github.com/features/actions",
    },
    {
      name: "Cloud Services (AWS, Azure)",
      description:
        "Deploying and managing scalable applications and infrastructure on major public cloud platforms.",
      url: "https://aws.amazon.com/",
    },
    {
      name: "Git & Version Control",
      description:
        "Tracking changes in source code during software development and coordinating work among programmers.",
      url: "https://git-scm.com/",
    },
    {
      name: "Automation Testing",
      description:
        "Writing scripts to programmatically execute tests against software applications to ensure quality and prevent regressions.",
      url: "https://www.cypress.io/",
    },
    {
      name: "Build Tools",
      description:
        "Configuring and using tools like Webpack, Vite, or MSBuild to compile, bundle, and optimize software projects.",
      url: "https://vitejs.dev/",
    },
    {
      name: "Visual Studio & VS Code",
      description:
        "Proficiency with rich Integrated Development Environments for writing, debugging, and managing code.",
      url: "https://code.visualstudio.com/",
    },
  ],
};

// ---------------------------------------------------------------------------
// TIMELINE (Experience & Education)
// ---------------------------------------------------------------------------
export const timeline = [
  {
    year: "2024-2028",
    title: "BSc Design & Computing",
    company: "BITS Pilani",
    description:
      "Pursuing undergraduate studies with a focus on software development, algorithms, and systems design.",
    type: "education",
  },
  {
    year: "2023-Present",
    title: "Analyst",
    company: "HCL Tech",
    description:
      "Automating IT workflows and managing application lifecycle for enterprise clients.",
    type: "experience",
  },
  {
    year: "2022-2023",
    title: "Intern",
    company: "HCL Tech",
    description:
      "Learnt various IT fundamentals including networking, OS and hypervisors.",
    type: "experience",
  },
  {
    year: "2022",
    title: "Student",
    company: "DAV Public School",
    description:
      "Completed higher secondary education with a focus on science stream.",
    type: "education",
  },
];

// ---------------------------------------------------------------------------
// OPEN SOURCE CONTRIBUTIONS
// ---------------------------------------------------------------------------
export const contributions = [
  {
    date: "2024-01-20",
    repo: "facebook/react",
    type: "PR",
    title: "Fix: Memory leak in useEffect cleanup",
    status: "merged",
  },
  {
    date: "2024-01-15",
    repo: "vercel/next.js",
    type: "Issue",
    title: "Image optimization improvement suggestion",
    status: "open",
  },
  {
    date: "2023-12-10",
    repo: "nodejs/node",
    type: "PR",
    title: "Docs: Update stream API examples",
    status: "merged",
  },
];

// ---------------------------------------------------------------------------
// CERTIFICATIONS
// ---------------------------------------------------------------------------
export const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    credentialId: "",
    issueDate: "2024-10",
    expiryDate: null,
    credentialUrl: null,
    badgeImage: "",
    skills: [
      "Cloud Concepts",
      "Azure Services",
      "Azure Security",
      "Azure Pricing",
    ],
    description:
      "Validates foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    credentialId: "",
    issueDate: "2024-05",
    expiryDate: null,
    credentialUrl: null,
    badgeImage: "",
    skills: [
      "AI Concepts",
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Azure AI Services",
    ],
    description:
      "Validates foundational knowledge of artificial intelligence (AI) concepts and Azure AI services to create, manage, and deploy AI solutions.",
  },
  {
    id: 3,
    name: "Microsoft Certified: Azure AI Engineer Associate",
    code: "AI-102",
    issuer: "Microsoft",
    credentialId: "",
    issueDate: "2026-03",
    expiryDate: "2027-03",
    credentialUrl: null,
    badgeImage: "",
    skills: [
      "Azure OpenAI",
      "Cognitive Services",
      "NLP",
      "Computer Vision",
      "Document Intelligence",
      "Search & Indexing",
    ],
    description:
      "Validates the ability to design and implement AI solutions using Azure AI services including Azure OpenAI, Cognitive Services, and enterprise search capabilities.",
  },
  {
    id: 4,
    name: "Microsoft Certified: Azure AI Engineer Associate",
    code: "AI-103",
    issuer: "Microsoft",
    credentialId: "",
    issueDate: "2026-07",
    expiryDate: null,
    credentialUrl: null,
    badgeImage: "",
    skills: [
      "Azure AI",
      "Generative AI",
      "Prompt Engineering",
      "AI Solution Design",
    ],
    description:
      "Validates advanced applied AI knowledge for building and operating intelligent solutions on Azure.",
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS
// ---------------------------------------------------------------------------
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Developer",
    content:
      "One of the most talented engineers I've worked with. The attention to detail in automation workflows is outstanding.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    content:
      "Delivered the project ahead of schedule and with features we hadn't even thought of but absolutely needed.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Tech Lead",
    content:
      "The dark mode implementation and glassmorphism effects are top-notch. A visually stunning portfolio.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];
