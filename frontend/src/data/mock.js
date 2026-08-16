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
    categories: ["All", "AI", "Apps", "Tools", "Scripts"],
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
      "Systems that work for you, not the other way around.",
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
  title: "AI Engineer",
  bio: "I architect and build intelligent AI pipelines, deterministic automation engines, and scalable enterprise systems. Turning complex, manual operational workflows into self-improving infrastructure.",
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
    title: "Self-Evolving Transpiler",
    category: ["AI", "Tools"],
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
        "GPT 5.6 Terra-assisted mapping candidates with review-gated promotion",
        "Strict Pydantic schemas and structured outputs for predictable translation blocks",
        "Token-aware execution, PSADT quality controls, and safety validation",
        "Docker Compose deployment with a React status and usage UI",
      ],
      outcomes:
        "Creates PSADT scripts with repeatable rules, safer output, and a path for the transpiler to evolve through reviewable mappings.",
    },
  },
  {
    id: 2,
    title: "AICP (AI CoPackager)",
    category: ["AI", "Tools"],
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
    id: 3,
    title: "Samruna",
    category: ["AI", "Tools"],
    description:
      "A governed workflow intelligence prototype that uses Agentic AI to turn noisy enterprise traces into explainable, approval-gated automation proposals.",
    techStack: [
      "OpenAI Responses API",
      "React",
      "Node.js",
      "Express",
      "Workflow Intelligence",
    ],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1170&auto=format&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/MdAsifInIT/Samruna",
    featured: true,
    details: {
      problem:
        "Enterprise operations contain noisy, unstructured traces, making it hard to discover repeatable workflows and propose safe automation with governance.",
      role: "Creator & Maintainer",
      features: [
        "Transforms operational traces into visible workflow graphs and bottleneck insights",
        "Generates structured Agentic AI automation proposals with policy checks and escalation paths",
        "Requires human approval before any run and executes in safe simulation mode only",
        "Maintains auditable events with deterministic fallback behavior when live provider calls are unavailable",
      ],
      outcomes:
        "Demonstrates that enterprise automation can be AI-assisted, explainable, human-governed, and safe by design without uncontrolled production-side effects.",
    },
  },
  {
    id: 4,
    title: "OmniBranch",
    category: ["AI", "Tools"],
    description:
      "A local-first, provider-neutral CLI that coordinates bounded AI-assisted development work across isolated Git branches and worktrees.",
    techStack: [
      "TypeScript",
      "Node.js 22",
      "pnpm Workspace",
      "SQLite",
      "Git Worktrees",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/MdAsifInIT/OmniBranch",
    featured: true,
    details: {
      problem:
        "Teams running parallel AI-assisted development need deterministic orchestration, policy controls, and recoverable state instead of prompt-driven repository mutations.",
      role: "Creator & Maintainer",
      features: [
        "Creates isolated worktrees for concurrent bounded tasks with dependency-aware campaign scheduling",
        "Persists canonical JSONL events and rebuildable SQLite projections for resumable local state",
        "Applies policy gates, approval evidence, validation, review, reconciliation, and report generation",
        "Uses conservative defaults that prevent force pushes, direct stable-branch writes, and automatic promotion",
      ],
      outcomes:
        "Provides a deterministic control plane for parallel AI-assisted delivery while keeping Git lifecycle and policy decisions human-verifiable.",
    },
  },
  {
    id: 5,
    title: "PokeSwitch",
    category: ["Apps", "Tools"],
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
    category: ["AI", "Tools"],
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
    category: ["Apps"],
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
  "AI & LLM Engineering": [
    {
      name: "OpenAI SDK",
      description:
        "Building production-grade AI features using OpenAI's API — chat completions, structured outputs, embeddings, and function calling.",
      url: "https://platform.openai.com/docs/api-reference",
    },
    {
      name: "Anthropic SDK",
      description:
        "Integrating Claude models via the Anthropic API for enterprise reasoning, summarization, and agentic workflows.",
      url: "https://docs.anthropic.com/",
    },
    {
      name: "Structured Outputs (Pydantic / Instructor)",
      description:
        "Enforcing deterministic, schema-validated LLM responses using Pydantic models and the Instructor library to eliminate hallucination risk in production pipelines.",
      url: "https://python.useinstructor.com/",
    },
    {
      name: "Multi-Agent Workflows",
      description:
        "Designing and implementing autonomous AI agent systems capable of planning, tool use, and goal-directed orchestration across complex tasks.",
      url: "https://www.langchain.com/agents",
    },
    {
      name: "Local LLM Pipelines (LM Studio)",
      description:
        "Running and testing local LLM inference via LM Studio as an offline test harness for pipeline validation before cloud provider calls.",
      url: "https://lmstudio.ai/",
    },
    {
      name: "Workflow Automation (n8n)",
      description:
        "Supplementary multi-step workflow automation with n8n for connecting services, APIs, and AI pipelines with minimal code.",
      url: "https://n8n.io/",
    },
  ],
  "Enterprise Ops & Packaging": [
    {
      name: "PowerShell",
      description:
        "Task automation and configuration management using PowerShell scripting for enterprise IT workflows, endpoint management, and system administration.",
      url: "https://learn.microsoft.com/en-us/powershell/",
    },
    {
      name: "Application Packaging",
      description:
        "End-to-end enterprise application packaging: MSI/MSIX authoring, silent switch discovery, transform creation, and deployment-ready artifact generation.",
      url: "https://psappdeploytoolkit.com/",
    },
    {
      name: "PSADT (PSAppDeployToolkit)",
      description:
        "Framework for wrapping and automating enterprise application installations with structured PowerShell, user interaction handling, and deployment logging.",
      url: "https://psappdeploytoolkit.com/",
    },
    {
      name: "VBScript Modernization",
      description:
        "Transpiling and rewriting legacy VBScript deployment wrappers into modern, maintainable PowerShell and PSADT equivalents.",
      url: "https://learn.microsoft.com/en-us/powershell/",
    },
    {
      name: "Endpoint Management (SCCM / Intune)",
      description:
        "Managing and deploying applications and configurations across enterprise device fleets using Microsoft Endpoint Manager.",
      url: "https://learn.microsoft.com/en-us/mem/",
    },
    {
      name: "Windows / Linux OS Internals",
      description:
        "Deep knowledge of OS internals, process management, file system behavior, and system context execution on both Windows and Linux platforms.",
      url: "https://learn.microsoft.com/en-us/windows/",
    },
  ],
  "Backend & Cloud Architecture": [
    {
      name: "Python & FastAPI",
      description:
        "Building high-performance, async backend APIs and automation services using Python and FastAPI with Pydantic validation.",
      url: "https://fastapi.tiangolo.com/",
    },
    {
      name: "TypeScript & Node.js",
      description:
        "Developing type-safe server-side applications and CLI tooling with TypeScript and Node.js for scalable backend systems.",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "PostgreSQL",
      description:
        "Designing and managing relational databases with PostgreSQL for durable, queryable application state.",
      url: "https://www.postgresql.org/",
    },
    {
      name: "Microsoft Azure (AZ-104, AI-103)",
      description:
        "Deploying and managing cloud infrastructure, AI services, and enterprise solutions on Microsoft Azure — certified at AI-102 and AI-103 level.",
      url: "https://azure.microsoft.com/",
    },
    {
      name: "REST APIs",
      description:
        "Designing and consuming RESTful APIs for efficient, scalable data exchange between front-end, back-end, and third-party services.",
      url: "https://fastapi.tiangolo.com/",
    },
  ],
  "DevOps & Containerization": [
    {
      name: "Docker & Docker Compose",
      description:
        "Containerizing applications and orchestrating multi-service environments with Docker Compose for reproducible, portable deployments.",
      url: "https://www.docker.com/",
    },
    {
      name: "Nginx Reverse Proxy",
      description:
        "Configuring Nginx as a reverse proxy and load balancer for containerized services, with SSL termination and traffic routing.",
      url: "https://nginx.org/",
    },
    {
      name: "CI/CD Pipelines",
      description:
        "Automating build, test, and deployment pipelines using GitHub Actions with review-gated promotion and policy controls.",
      url: "https://github.com/features/actions",
    },
    {
      name: "Git Review Gating",
      description:
        "Enforcing branch protection, one-PR-per-package workflows, and human-verified promotion gates across AI-assisted development pipelines.",
      url: "https://git-scm.com/",
    },
    {
      name: "Linux Hardening",
      description:
        "Applying system hardening practices on Linux hosts: user isolation, service minimization, firewall configuration, and audit logging.",
      url: "https://www.linux.org/",
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
    name: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    code: "AI-103",
    issuer: "Microsoft",
    credentialId: "",
    issueDate: "2026-07",
    expiryDate: null,
    credentialUrl:
      "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/?practice-assessment-type=certification",
    badgeImage: "",
    skills: [
      "Azure AI Foundry",
      "AI Agents",
      "Generative AI",
      "Prompt Engineering",
      "AI Solution Deployment",
    ],
    description:
      "Validates the ability to build, manage, and deploy agents and AI solutions on Azure by using Microsoft AI Foundry.",
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
