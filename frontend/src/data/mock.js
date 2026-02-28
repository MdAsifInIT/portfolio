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
    showOpenSource: true,
    showAbout: true,
    showFooter: true,
    showTestimonials: false,
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
      { id: "opensource", label: "Open Source" },
      { id: "about", label: "About" },
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
    }
  },

  // Open Source Section Configuration
  openSource: {
    title: "Open Source Contributions",
    description:
      "Building and maintaining open source projects that developers around the world use.",
    githubProfileUrl: "https://github.com/mdasifinit",
    ui: {
      buttonText: "View All on GitHub",
    }
  },

  // About Section Configuration
  about: {
    title: "About Me",
    description:
      "My journey in software development, expertise, and continuous learning.",
    timelineTitle: "Experience & Education",
    skillsTitle: "Technical Skills",
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
      { id: "opensource", label: "Open Source" },
      { id: "about", label: "About" },
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
    title: "Packaging Workflow Automation",
    category: "Tools",
    description:
      "AI-assisted Windows application packaging pipeline that generates PSADT scripts, opens PRs, and verifies installs on ephemeral VMs.",
    techStack: [
      "Jenkins",
      "n8n",
      "PowerShell 7",
      "PSAppDeployToolkit",
      "OpenAI API",
      "JSON Schema",
      "GitHub",
    ],
    image:
      "https://images.unsplash.com/photo-1743385779347-1549dabf1320?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: null,
    githubUrl: "https://github.com/mdasifinit/Packaging-Workflow-Automation",
    featured: true,
    details: {
      problem:
        "Manual app packaging is slow, inconsistent, and error-prone—silent switches and post-install verification consume significant engineer time.",
      role: "Lead Developer & Architect",
      features: [
        "n8n webhook intake with deterministic installer classification",
        "LLM-generated manifest and silent-install candidates (temperature 0, schema-validated)",
        "PSADT Deploy-Application.ps1 generation with verification ladder",
        "Automated branch/PR creation with labels and audit artifacts",
        "Jenkins pipeline on Windows agents/ephemeral VMs",
        "Layered verification via run-candidate-tests.ps1 (MSI code, paths, shortcuts, smoke)",
      ],
      outcomes:
        "Standardized, auditable packaging with reproducible CI; safe auto-merge gated by schema validation, confidence thresholds, and VM verification.",
    },
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Apps",
    description:
      "Personal portfolio website to showcase projects, skills, and open source contributions.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: null,
    githubUrl: "https://github.com/mdasifinit/portfolio",
    featured: true,
    details: {
      problem:
        "Lack of a centralized platform to effectively showcase my skills, projects, and open source contributions to potential employers and collaborators.",
      role: "Creator & Maintainer",
      features: [
        "Responsive design with Tailwind CSS for optimal viewing on all devices",
      ],
      outcomes: "5K+ GitHub stars, 500+ daily active users.",
    },
  },
  {
    id: 3,
    title: "Inventory Solutions 4 Business",
    category: "Apps",
    description:
      "Full-stack inventory management solution with a web client, mobile app, and server API (client, mobile and server directories present). Designed for product/customer/order management and ready for containerized deployment.",
    techStack: [
      "JavaScript",
      "React (web client)",
      "React Native (mobile)",
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
  },
  {
    id: 4,
    title: "EZ-PS-Automations",
    category: "Scripts",
    description:
      "A comprehensive collection of PowerShell automation tools for Windows system administration and enterprise deployments — includes browser extension deployment, Intunewin conversion tooling, system-context launchers, and user/registry utilities. Designed for SCCM and Intune workflows.",
    techStack: [
      "PowerShell",
      "Batch / .bat",
      "PSExec",
      "Windows (Registry/Group Policy)",
      "SCCM",
      "Intune",
    ],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=800&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/MdAsifInIT/EZ-PS-Automations",
    featured: false,
  },
  {
    id: 5,
    title: "NotebookLM for Windows",
    category: "Apps",
    description:
      "A native-like wrapper for Google's NotebookLM, providing a seamless desktop experience with immersive dark mode and distraction-free environment.",
    techStack: [
      "C#",
      ".NET 8",
      "WebView2",
      "Windows App SDK",
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1170&auto=format&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/MdAsifInIT/NotebookLMWrapper",
    featured: true,
    details: {
      problem:
        "Users want a dedicated desktop experience for NotebookLM without browser clutter.",
      features: [
        "Native Look & Feel with Immersive Dark Mode.",
        "Distraction-free (no address bars/tabs).",
        "Lightweight (WebView2 based).",
      ],
      outcomes: "Improved user focus and native OS integration.",
    },
  },
];

// ---------------------------------------------------------------------------
// OPEN SOURCE REPOSITORIES
// ---------------------------------------------------------------------------
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
      description: "Techniques for crafting effective prompts to communicate with large language models, optimizing output quality and relevance.",
      url: "https://platform.openai.com/docs/guides/prompt-engineering"
    },
    {
      name: "RAG (Retrieval-Augmented Generation)",
      description: "Architecture that combines information retrieval with text generation, allowing LLMs to answer questions using external knowledge bases.",
      url: "https://www.ibm.com/topics/retrieval-augmented-generation"
    },
    {
      name: "LLM API Integration",
      description: "Connecting applications to Large Language Models via APIs like OpenAI, Anthropic, or local models to add intelligent features.",
      url: "https://platform.openai.com/docs/api-reference"
    },
    {
      name: "Workflow Automation (n8n)",
      description: "Building resilient, multi-step automated workflows with n8n to connect various services and APIs.",
      url: "https://n8n.io/"
    },
    {
      name: "Agent-Based Development",
      description: "Designing and implementing autonomous AI agents capable of planning, using tools, and achieving complex goals.",
      url: "https://www.langchain.com/agents"
    },
  ],
  "Packaging & Deployment": [
    {
      name: "MSIX Packaging",
      description: "Creating modern Windows application packages using the MSIX format for reliable and clean installations.",
      url: "https://learn.microsoft.com/en-us/windows/msix/"
    },
    {
      name: "PSAppDeployToolkit",
      description: "Framework for wrapping and automating enterprise application installations using PowerShell.",
      url: "https://psappdeploytoolkit.com/"
    },
    {
      name: "SCCM & Intune",
      description: "Managing and deploying applications and configurations across enterprise device fleets using Microsoft Endpoint Manager.",
      url: "https://learn.microsoft.com/en-us/mem/"
    },
    {
      name: "CI/CD (GitHub Actions)",
      description: "Automating software build, test, and deployment pipelines using continuous integration and delivery practices.",
      url: "https://github.com/features/actions"
    },
    {
      name: "Cloud Services (AWS, Azure)",
      description: "Deploying and managing scalable applications and infrastructure on major public cloud platforms.",
      url: "https://aws.amazon.com/"
    },
  ],
  "Scripting": [
    {
      name: "PowerShell",
      description: "Task automation and configuration management framework developed by Microsoft, consisting of a command-line shell and scripting language.",
      url: "https://learn.microsoft.com/en-us/powershell/"
    },
    {
      name: "Bash & Shell",
      description: "Writing scripts to automate tasks and manage systems in Unix-like environments.",
      url: "https://www.gnu.org/software/bash/"
    },
    {
      name: "Python",
      description: "High-level programming language used for scripting, data analysis, AI, and automation.",
      url: "https://www.python.org/"
    },
    {
      name: "C# & .NET",
      description: "Developing modern, scalable, and high-performance applications across multiple platforms using Microsoft's ecosystem.",
      url: "https://dotnet.microsoft.com/"
    },
  ],
  "Development & Tooling": [
    {
      name: "React & Next.js",
      description: "Building interactive, performant, and SEO-friendly user interfaces and web applications.",
      url: "https://nextjs.org/"
    },
    {
      name: "REST APIs & GraphQL",
      description: "Designing and consuming web application interfaces for efficient data exchange between front-end and back-end systems.",
      url: "https://graphql.org/"
    },
    {
      name: "Automation Testing",
      description: "Writing scripts to programmatically execute tests against software applications to ensure quality and prevent regressions.",
      url: "https://www.cypress.io/"
    },
    {
      name: "Build Tools",
      description: "Configuring and using tools like Webpack, Vite, or MSBuild to compile, bundle, and optimize software projects.",
      url: "https://vitejs.dev/"
    },
    {
      name: "Git & Version Control",
      description: "Tracking changes in source code during software development and coordinating work among programmers.",
      url: "https://git-scm.com/"
    },
    {
      name: "Visual Studio & VS Code",
      description: "Proficiency with rich Integrated Development Environments for writing, debugging, and managing code.",
      url: "https://code.visualstudio.com/"
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
      "Compelted higher secondary education with a focus on science stream.",
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
// TESTIMONIALS
// ---------------------------------------------------------------------------
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Developer",
    content: "One of the most talented engineers I've worked with. The attention to detail in automation workflows is outstanding.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    content: "Delivered the project ahead of schedule and with features we hadn't even thought of but absolutely needed.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Tech Lead",
    content: "The dark mode implementation and glassmorphism effects are top-notch. A visually stunning portfolio.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];
