// ============================================================================
// PORTFOLIO CONFIGURATION - Edit this file to customize your portfolio
// ============================================================================

// ---------------------------------------------------------------------------
// SECTION VISIBILITY TOGGLES
// Set to false to hide entire sections from your website
// ---------------------------------------------------------------------------
export const siteConfig = {
  sections: {
    showHero: true,
    showProjects: true,
    showOpenSource: true,
    showAbout: true,
    showFooter: true,
    showTestimonials: true,
  },

  // Header/Navigation
  header: {
    logo: "MA",
    navigationItems: [
      { id: "home", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "opensource", label: "Open Source" },
      { id: "about", label: "About" },
    ],
  },

  // Hero Section
  hero: {
    ctaButtons: {
      primary: "View Projects",
      secondary: "Contact Me",
    },
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    description:
      "A collection of applications, tools, and scripts I've built to solve real-world problems.",
    categories: ["All", "Apps", "Tools", "Scripts"],
  },

  // Open Source Section
  openSource: {
    title: "Open Source Contributions",
    description:
      "Building and maintaining open source projects that developers around the world use.",
    githubProfileUrl: "https://github.com/mdasifinit",
    githubCta: "View All on GitHub",
  },

  // About Section
  about: {
    title: "About Me",
    description:
      "My journey in software development, expertise, and continuous learning.",
    timelineTitle: "Experience & Education",
    skillsTitle: "Technical Skills",
  },

  // Footer
  footer: {
    quickLinksTitle: "Quick Links",
    connectTitle: "Connect",
    copyrightText: "All rights reserved.",
    builtWithText: "Built with",
    builtWithTech: "and React",
  },

  // Contact Modal
  contact: {
    title: "Get In Touch",
    description:
      "Send me a message and I'll get back to you as soon as possible.",
    submitButton: "Send Message",
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
// Add or remove projects here. Set featured: true to highlight them.
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
// Showcase your GitHub repositories with stats
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
// Organize your technical skills by category
// ---------------------------------------------------------------------------
export const skills = {
  "Packaging & Deployment": [
    "MSIX & MSIX Packaging",
    "CI/CD Pipelines",
    "AWS, AZURE & Cloud Services",
    "PowerShell 7",
    "PSAppDeployToolkit",
    "SCCM & Intune",
  ],
  "Scripting & Automation": [
    "Bash & Shell",
    "Python Scripts",
    "PowerShell Scripting",
    "GitHub Actions",
    "Automation Testing",
    "Build Tools",
  ],
  "Development & Tooling": [
    "Vibe Coding",
    "Agent-Based Development",
    "Web Development (React, Next.js)",
    ".Net, C# & WinForms",
    "GraphQL & REST APIs",
    "Git & Version Control",
    "Visual Studio & VS Code",
  ],
};

// ---------------------------------------------------------------------------
// TIMELINE (Experience & Education)
// Add your work experience and education history
// ---------------------------------------------------------------------------
export const timeline = [
  {
    year: "2024-2028",
    title: "BSc Design & Computing",
    company: "BITS Pilani",
    description:
      "Pursuing undergraduate studies with a focus on software development, algorithms, and systems design.",
  },
  {
    year: "2023-Present",
    title: "Analyst",
    company: "HCL Tech",
    description:
      "Automating IT workflows and managing application lifecycle for enterprise clients.",
  },
  {
    year: "2022-2023",
    title: "Intern",
    company: "HCL Tech",
    description:
      "Learnt various IT fundamentals including networking, OS and hypervisors.",
  },
  {
    year: "2022",
    title: "Student",
    company: "DAV Public School",
    description:
      "Compelted higher secondary education with a focus on science stream.",
  },
];

// ---------------------------------------------------------------------------
// OPEN SOURCE CONTRIBUTIONS
// Highlight your contributions to major projects
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
