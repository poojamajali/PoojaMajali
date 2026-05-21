// ─────────────────────────────────────────────
//  Pooja Majali — Profile Web App
//  Stack: React 18 (CDN) + Babel (CDN)
//  No build step needed — open index.html in browser
// ─────────────────────────────────────────────

const { useState } = React;

// ── Config: update your details here ──────────
const PROFILE = {
  name:     "Pooja Majali",
  initials: "PM",
  title:    "Backend Software Engineer · .NET · C# · AI Automation",
  email:    "poojamajali@gmail.com",
  phone:    "+91 94494 20774",
  linkedin: "linkedin.com/in/poojamajali",
  location: "Bangalore, India",
  photo:    "", // set to "photo.jpg" once you add your photo to the project folder
};

const METRICS = [
  { num: "4 yrs",  label: "Experience"    },
  { num: "30%",    label: "DB speed gain" },
  { num: "90%+",   label: "Test coverage" },
  { num: "25%",    label: "Perf. improved"},
];

const HERO_BADGES = ["4 Years Experience", ".NET 6/7", "Microservices", "Azure DevOps", "✦ AI & Automation", "🏅 AZ-900 Certified"];

const AI_CARDS = [
  { icon: "ti-cpu",      title: "AI-assisted development",  desc: "GitHub Copilot and LLM prompting daily for C#/.NET code gen, refactoring, and unit test scaffolding." },
  { icon: "ti-settings", title: "CI/CD & test automation",  desc: "Azure DevOps pipelines + AI-assisted test generation achieving 90%+ coverage with NUnit." },
  { icon: "ti-plug",     title: "LLM API integration",      desc: "OpenAI / LLM APIs in .NET backends for intelligent search, summarization, and NL query features." },
  { icon: "ti-bulb",     title: "ML & computer vision",     desc: "Built ResNet-50 + OpenCV deep learning model for 3D hand pose estimation at Samsung R&D." },
];

const EXPERIENCE = [
  {
    company:  "Eurofins IT Solutions India",
    location: "Bangalore",
    role:     "Software Engineer — Backend / Full Stack (.NET · C# · AI Tools)",
    date:     "Jul 2022 – Present · ~4 yrs",
    current:  true,
    bullets: [
      "Engineered scalable REST APIs for eLIMS enterprise platform using ASP.NET Core / .NET 6/7 and C#.",
      "Redesigned SQL Server queries and EF Core patterns, achieving 30% reduction in response times.",
      "Architected C# service layers improving end-to-end application performance by 25%.",
      "Integrated GitHub Copilot and LLM prompting into daily workflow — accelerating code generation and test scaffolding.",
      "Leveraged AI-assisted test generation to maintain 90%+ unit test coverage with NUnit and Jasmine.",
      "Managed CI/CD pipelines on Azure DevOps, automating build, test, and deployment stages.",
      "Applied SOLID principles, Dependency Injection, and async/await patterns across all modules.",
      "Collaborated in Agile (Scrum) sprints, contributing to code reviews and architectural design sessions.",
    ],
    tags:   ["C#", ".NET 6/7", "ASP.NET Core", "EF Core", "SQL Server", "REST APIs", "Azure DevOps", "NUnit"],
    aiTags: ["GitHub Copilot", "AI Testing"],
  },
  {
    company:  "Siemens Healthineers",
    location: "Bangalore",
    role:     "Software Engineer Intern — Test Automation",
    date:     "Jan 2022 – Jun 2022 · 6 mos",
    current:  false,
    bullets: [
      "Developed unit and integration tests using NUnit and Selenium for regulated healthcare software.",
      "Built reusable automated test scripts, accelerating validation cycles for medical software releases.",
    ],
    tags:   ["C#", "NUnit", "Selenium", "Test Automation"],
    aiTags: [],
  },
];

const SKILLS = {
  backend: [
    { label: "Core",                tags: ["C#", ".NET 6/7", "ASP.NET Core", "REST APIs", "Entity Framework Core"], type: "primary" },
    { label: "Database",            tags: ["MS SQL Server", "LINQ", "Query Optimization", "Stored Procedures"],      type: "primary" },
    { label: "Architecture",        tags: ["Microservices", "SOLID Principles", "Dependency Injection", "Async/Await", "MVVM"], type: "secondary" },
    { label: "DevOps & testing",    tags: ["Azure DevOps", "CI/CD", "NUnit", "Git", "SonarQube"],                  type: "default" },
    { label: "Supporting",          tags: ["Angular", "TypeScript", "Postman", "Swagger"],                          type: "default" },
  ],
  ai: [
    { label: "AI-assisted dev",     tags: ["GitHub Copilot", "ChatGPT / Claude", "LLM Prompting"] },
    { label: "AI integration",      tags: ["OpenAI API", "LLM APIs", "AI Agents", "RAG Pipelines"] },
    { label: "Automation",          tags: ["CI/CD Automation", "Test Generation", "Workflow Automation"] },
    { label: "ML / data",           tags: ["Python", "OpenCV", "Deep Learning", "ResNet-50"] },
  ],
};

const CERTS = [
  { icon: "ti-school",      title: "B.E. Computer Science",       sub: "KLE Technological University · 2022", badge: "CGPA 9.3/10" },
  { icon: "ti-certificate", title: "Microsoft AZ-900",            sub: "Azure Fundamentals · Microsoft",      badge: "Certified"   },
  { icon: "ti-trophy",      title: "Eurofins Excellence Award",   sub: "90%+ test coverage achievement",      badge: "Award"       },
];

const PROJECTS = [
  {
    name:     "Personal Profile — Interactive Web App",
    badge:    "✦ Featured · 2025",
    featured: true,
    badgeCls: "badge-featured",
    desc:     "Built a fully interactive single-page profile web application to showcase professional background for job applications and sharing. Features a React-based UI with 5 navigable sections, metric cards, AI highlights grid, skill tag system, project cards, and copy-to-clipboard contact functionality. Vibe-coded with AI assistance using Claude.",
    bullets: [
      "5-section SPA: Overview, Experience, Skills, Projects, Contact",
      "Metric cards highlighting key impact numbers (30%, 90%+, 25%)",
      "AI & Automation section with categorised skill tags",
      "Copy-to-clipboard for email and phone contact details",
      "Responsive layout with navy + purple design system",
    ],
    tags:   ["React", "HTML/CSS", "JavaScript"],
    aiTags: ["AI-assisted", "Vibe Coded", "Claude"],
  },
  {
    name:     "PETSY — AI-Enhanced Pet Platform",
    badge:    "✦ AI Integration",
    featured: false,
    badgeCls: "badge-ai",
    desc:     "Full-stack ASP.NET Core app with Microsoft Auth, caching, AutoMapper, and async REST APIs. Extended with an AI-powered recommendation agent using LLM APIs to suggest veterinary advice based on pet profile data.",
    bullets:  [],
    tags:   ["ASP.NET Core", "C#", "REST APIs", "Microsoft Auth", "AutoMapper"],
    aiTags: ["LLM API", "AI Agent"],
  },
  {
    name:     "Samsung R&D — 3D Hand Pose Estimation",
    badge:    "ML · Deep Learning",
    featured: false,
    badgeCls: "badge-ml",
    desc:     "Deep learning model using ResNet-50 and OpenCV for real-time 3D hand pose estimation from video input at Samsung R&D. Built end-to-end data preprocessing, model training, and inference pipeline in Python.",
    bullets:  [],
    tags:   ["Python", "OpenCV"],
    aiTags: ["Deep Learning", "ResNet-50", "Computer Vision"],
  },
  {
    name:     ".NET Backend + AI Automation Boilerplate",
    badge:    "✦ AI Agent",
    featured: false,
    badgeCls: "badge-ai",
    desc:     "Reusable ASP.NET Core boilerplate integrating an AI agent layer — connecting LLM APIs to backend services via tool-calling. Enables natural language queries to trigger real C# service methods.",
    bullets:  [],
    tags:   ["ASP.NET Core", "C#", "REST APIs"],
    aiTags: ["OpenAI API", "Tool Calling", "AI Agent", "RAG"],
  },
];

const NAV = [
  { id: "overview",   icon: "ti-home",     label: "Overview"   },
  { id: "experience", icon: "ti-briefcase",label: "Experience" },
  { id: "skills",     icon: "ti-star",     label: "Skills"     },
  { id: "projects",   icon: "ti-folder",   label: "Projects"   },
  { id: "contact",    icon: "ti-mail",     label: "Contact"    },
];

// ── Shared components ──────────────────────────

function Tag({ label, type = "default" }) {
  return <span className={`tag ${type}`}>{label}</span>;
}

function Tags({ tags, aiTags }) {
  return (
    <div className="tags">
      {tags.map(t   => <Tag key={t} label={t} type="secondary" />)}
      {aiTags.map(t => <Tag key={t} label={t} type="ai" />)}
    </div>
  );
}

function SectionTitle({ children, ai }) {
  return <p className={`section-title${ai ? " ai" : ""}`}>{children}</p>;
}

// ── Section: Overview ──────────────────────────

function Overview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
      {/* Hero card */}
      <div className="hero-card">
        <div className="hero-header">
          <div className="hero-avatar">
            {PROFILE.photo
              ? <img src={PROFILE.photo} alt={PROFILE.name} />
              : PROFILE.initials}
          </div>
          <div>
            <div className="hero-name">{PROFILE.name}</div>
            <div className="hero-title">{PROFILE.title}</div>
          </div>
        </div>
        <div className="hero-badges">
          {HERO_BADGES.map(b => <span key={b} className="hero-badge">{b}</span>)}
        </div>
      </div>

      {/* Metrics */}
      <div className="metrics-grid">
        {METRICS.map(m => (
          <div key={m.label} className="metric-box">
            <div className="metric-num">{m.num}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div>
        <SectionTitle>Professional summary</SectionTitle>
        <p className="summary-text">
          <strong>Backend Software Engineer with 4 years of experience</strong> building enterprise-grade applications on the{" "}
          <strong>.NET ecosystem (C#, ASP.NET Core, .NET 6/7)</strong>. Proven ability to design high-performance REST APIs, optimize SQL Server data access, and enforce code quality through CI/CD automation. Actively integrates{" "}
          <strong>AI tools and LLM-powered workflows</strong> — from GitHub Copilot to building AI-assisted automation pipelines. Holds{" "}
          <strong>Azure Fundamentals (AZ-900)</strong> certification with hands-on Azure DevOps CI/CD experience.
        </p>
      </div>

      {/* AI highlight */}
      <div className="ai-highlight-box">
        <SectionTitle ai>✦ AI tools, agents &amp; automation</SectionTitle>
        <div className="ai-cards-grid">
          {AI_CARDS.map(c => (
            <div key={c.title} className="ai-card">
              <div className="ai-card-title">
                <i className={`ti ${c.icon}`} aria-hidden="true" />
                {c.title}
              </div>
              <div className="ai-card-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section: Experience ────────────────────────

function Experience() {
  return (
    <div>
      <SectionTitle>Work experience</SectionTitle>
      <div className="exp-list">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className={`exp-item${job.current ? " current" : ""}`}>
            <div className="exp-header">
              <div>
                <span className="exp-company">{job.company}</span>{" "}
                <span className="exp-location">— {job.location}</span>
              </div>
              <span className="exp-date">{job.date}</span>
            </div>
            <div className="exp-role">{job.role}</div>
            <ul className="exp-bullets">
              {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <Tags tags={job.tags} aiTags={job.aiTags} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: Skills ────────────────────────────

function Skills() {
  return (
    <div className="skills-grid">
      {/* Backend */}
      <div>
        <SectionTitle>Backend skills</SectionTitle>
        {SKILLS.backend.map(g => (
          <div key={g.label} className="skill-group">
            <div className="skill-group-label">{g.label}</div>
            <div className="tags">
              {g.tags.map(t => <Tag key={t} label={t} type={g.type} />)}
            </div>
          </div>
        ))}
      </div>

      {/* AI + Certs */}
      <div>
        <SectionTitle ai>AI &amp; automation</SectionTitle>
        <div className="ai-skills-box">
          {SKILLS.ai.map(g => (
            <div key={g.label} className="skill-group">
              <div className="ai-skill-group-label">{g.label}</div>
              <div className="tags">
                {g.tags.map(t => <Tag key={t} label={t} type="ai" />)}
              </div>
            </div>
          ))}
        </div>

        <SectionTitle>Education &amp; certs</SectionTitle>
        <div className="cert-list">
          {CERTS.map(c => (
            <div key={c.title} className="cert-item">
              <i className={`ti ${c.icon}`} aria-hidden="true" />
              <div className="cert-info">
                <div className="cert-title">{c.title}</div>
                <div className="cert-sub">{c.sub}</div>
              </div>
              <span className="cert-badge">{c.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section: Projects ──────────────────────────

function Projects() {
  // badge style map
  const badgeStyles = {
    "badge-featured": { background: "#fef3e2", color: "#7a4f00", border: "1px solid #f5c97a" },
    "badge-ai":       { background: "#ede8f8", color: "#5c3d9e", border: "1px solid #c3b4ed" },
    "badge-ml":       { background: "#fff3e0", color: "#8a4f00", border: "1px solid #f5c97a" },
  };

  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <div className="project-list">
        {PROJECTS.map((p, i) => (
          <div key={i} className={`project-card${p.featured ? " featured" : ""}${p.badgeCls === "badge-ai" ? " ai-project" : ""}`}>
            {p.featured && <div className="featured-ribbon">Featured project</div>}
            <div className="project-header" style={{ marginTop: p.featured ? 10 : 0 }}>
              <span className="project-name">{p.name}</span>
              <span className="project-badge" style={badgeStyles[p.badgeCls]}>{p.badge}</span>
            </div>
            <p className="project-desc">{p.desc}</p>
            {p.bullets.length > 0 && (
              <ul className="project-bullets">
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
            <Tags tags={p.tags} aiTags={p.aiTags} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: Contact ───────────────────────────

function Contact() {
  const [copied, setCopied] = useState(null);

  const contacts = [
    { icon: "ti-mail",    label: "Email",    value: PROFILE.email,    href: `mailto:${PROFILE.email}`,   copy: true  },
    { icon: "ti-phone",   label: "Phone",    value: PROFILE.phone,    href: `tel:${PROFILE.phone}`,      copy: true  },
    { icon: "ti-link",    label: "LinkedIn", value: PROFILE.linkedin, href: `https://${PROFILE.linkedin}`, copy: false },
    { icon: "ti-map-pin", label: "Location", value: PROFILE.location, href: null,                        copy: false },
  ];

  const doCopy = (val, label) => {
    navigator.clipboard.writeText(val).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div>
      <SectionTitle>Get in touch</SectionTitle>
      <div className="contact-list">
        {contacts.map(c => (
          <div key={c.label} className="contact-row">
            <i className={`ti ${c.icon}`} aria-hidden="true" />
            <div className="contact-info">
              <div className="contact-label">{c.label}</div>
              {c.href
                ? <a href={c.href} className="contact-value">{c.value}</a>
                : <span className="contact-value">{c.value}</span>}
            </div>
            {c.copy && (
              <button
                className={`copy-btn${copied === c.label ? " copied" : ""}`}
                onClick={() => doCopy(c.value, c.label)}
              >
                {copied === c.label ? "✓ Copied" : "Copy"}
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="avail-box">
        <div className="avail-dot" />
        <div>
          <div className="avail-title">Open to Backend / .NET opportunities</div>
          <div className="avail-sub">Full-time · Hybrid / Remote · Bangalore, India</div>
        </div>
      </div>
    </div>
  );
}

// ── App shell ──────────────────────────────────

const SECTION_MAP = { overview: Overview, experience: Experience, skills: Skills, projects: Projects, contact: Contact };

function App() {
  const [active, setActive] = useState("overview");
  const Section = SECTION_MAP[active];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-profile">
          <div className="avatar">
            {PROFILE.photo ? <img src={PROFILE.photo} alt={PROFILE.name} /> : PROFILE.initials}
          </div>
          <div className="sidebar-name">{PROFILE.name}</div>
          <div className="sidebar-role">Backend Engineer</div>
        </div>

        <nav className="sidebar-nav">
          {NAV.map(n => (
            <button
              key={n.id}
              className={`nav-btn${active === n.id ? " active" : ""}`}
              onClick={() => setActive(n.id)}
            >
              <i className={`ti ${n.icon}`} aria-hidden="true" />
              <span>{n.label}</span>
              {n.id === "projects" && (
                <span className="nav-badge">{PROJECTS.length}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="open-badge">
            <span className="open-dot" />
            Open to roles
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <Section />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
