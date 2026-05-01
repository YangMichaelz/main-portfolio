import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink, Moon, Sun } from 'lucide-react';
import resumePdf from './Resume.pdf';

const CONTACT = {
  name: "Michael Yang",
  location: "Ottawa, Canada",
  status: "Available for Fall 2026 Co-op",
  email: "michaelzijunyang@gmail.com",
  github: "https://github.com/YangMichaelz",
  linkedin: "https://www.linkedin.com/in/michael-yang3/",
  resume: resumePdf
};

const EXPERIENCE = [
  {
    role: "Software Developer (Co-op)",
    company: "JSI Telecom",
    period: "Summer 2026",
    description: "",
    status: "Incoming"
  },
  {
    role: "Software Developer Co-op",
    company: "JSI Telecom",
    period: "Sept 2025 - Dec 2025",
    description: "Developed LLM-powered agents to streamline workflows. Ensured application reliability by writing comprehensive automated tests and documentation. Built monitoring tools to track system performance and improve observability."
  },
  {
    role: "Software Developer Co-op - Incubation",
    company: "Nokia",
    period: "Jun 2025 - Aug 2025",
    description: "Worked in an R&D team to create simulation software to test and improve 5G network traffic management. Wrote automated tests to ensure code quality and maintainability. Worked closely within a cross-functional agile team to deliver software features."
  }
];

const PROJECTS = [
    {
    title: "CrashSentryAI",
    type: "Smart system crash detector (Work in progress)",
    tech: ["C++", "Python", "PDH Library", "Agno", "QT Creator"],
    description: "A diagnostic software that proactively monitors and predicts system crashes using PDH library ",
    repo: ""
  },
  {
    title: "AIsk",
    type: "RAG Chatbot",
    tech: ["JavaScript", "LangChain", "React", "MongoDB", "Node.js", "Express.js", "Pinecone"],
    description: "An AI RAG-enabled chatbot web application that leverages Tavily API, PineconeDB, and LangChain to provide context-aware responses related to healthcare by fetching data from various Healthcare sources.",
    repo: "https://github.com/YangMichaelz/AIsk-RAG-Healthcare-Chat-Bot"
  }
];

const SKILLS = {
  Languages: ["Python", "JavaScript", "TypeScript", "Go", "Java", "C++", "Lua", "HTML/CSS"],
  Frontend: ["React", "Next.js", "Tailwind", "Streamlit"],
  Backend: ["Node.js", "PostgreSQL", "Express.js", "FastAPI", "Agno", "MongoDB", "Flask"],
  DevOps: ["Git", "Docker", "GitHub Actions"],
  Tools: ["VS Code", "Jira", "TestRail", "Postman", "Prometheus", "Grafana", "Pytest", "Jupyter", "Linux", "QT Creator"]
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('darkMode') !== 'false';
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
      return next;
    });
  };

  return (
    <div className="bg-brand-bg text-brand-ink min-h-screen font-sans selection:bg-brand-ink selection:text-white">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Left Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl sm:text-5xl tracking-tight text-brand-ink font-bold">
                Hi there!
              </h1>
              <h2 className="mt-3 text-lg sm:text-xl tracking-tight text-brand-ink pr-10">
                I am {CONTACT.name}. I'm a 3rd-year CS student at Carleton University and full-stack developer, previously worked on backend systems at Nokia and JSI Telecom.
              </h2>
              
              <nav className="nav hidden lg:block mt-16">
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="#experience" className="group flex items-center py-2 w-max">
                      <span className="nav-indicator mr-4 h-px w-8 bg-brand-border transition-all group-hover:w-16 group-hover:bg-brand-ink"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-accent group-hover:text-brand-ink transition-colors">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="group flex items-center py-2 w-max">
                      <span className="nav-indicator mr-4 h-px w-8 bg-brand-border transition-all group-hover:w-16 group-hover:bg-brand-ink"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-accent group-hover:text-brand-ink transition-colors">
                        Projects
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="group flex items-center py-2 w-max">
                      <span className="nav-indicator mr-4 h-px w-8 bg-brand-border transition-all group-hover:w-16 group-hover:bg-brand-ink"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-accent group-hover:text-brand-ink transition-colors">
                        Skills
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            
            <ul className="mt-12 lg:mt-0 flex items-center gap-6">
              <li>
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-ink transition-colors flex items-center gap-2" aria-label="GitHub">
                  <Github size={24} />
                </a>
              </li>
              <li>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-ink transition-colors flex items-center gap-2" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </li>
              <li>
                <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-ink transition-colors flex items-center gap-2" aria-label="Resume">
                  <FileText size={24} />
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="text-brand-accent hover:text-brand-ink transition-colors flex items-center gap-2" aria-label="Email">
                  <Mail size={24} />
                </a>
              </li>
              <li>
                <button 
                  onClick={toggleDarkMode} 
                  className="text-brand-accent hover:text-brand-ink transition-colors flex items-center gap-2 p-1 rounded-md" 
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </li>
            </ul>
          </header>

          {/* Right Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            <section id="experience" className="mb-24 lg:mb-32 scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-brand-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-12">
                <div className="flex items-center gap-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-brand-ink">Experience</h2>
                  <div className="h-px bg-brand-border flex-grow hidden lg:block"></div>
                </div>
              </div>
              <div className="flex flex-col gap-12">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                    <header className="z-10 mb-2 mt-1 text-sm font-semibold tracking-wide text-brand-accent sm:col-span-2">
                      {exp.period}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-bold text-lg leading-snug text-brand-ink">
                        {exp.role}
                      </h3>
                      <h3 className="text-md leading-snug text-brand-ink">
                        {exp.company}
                      </h3>
                      {exp.status && (
                        <span className="mt-2 text-xs font-semibold tracking-wider text-brand-ink border border-brand-border px-2 py-0.5 rounded inline-block bg-brand-subtle">
                          {exp.status}
                        </span>
                      )}
                      <p className="mt-4 text-sm leading-relaxed text-brand-accent">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="mb-24 lg:mb-32 scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-brand-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-12">
                <div className="flex items-center gap-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-brand-ink">Projects</h2>
                  <div className="h-px bg-brand-border flex-grow hidden lg:block"></div>
                </div>
              </div>
              <div>
                {PROJECTS.map((project, idx) => (
                  <div key={idx} className="group relative grid gap-4 pb-6 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 border border-brand-border p-6 rounded-lg hover:border-brand-ink/20 hover:bg-brand-subtle transition-all bg-brand-bg mb-4">
                    <div className="z-10 sm:col-span-8">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold leading-snug text-brand-ink text-lg">
                          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-brand-accent transition-colors">
                            {project.title}
                            <ExternalLink size={16} className="ml-1" />
                          </a>
                        </h3>
                        <span className="text-xs tracking-wider font-semibold text-brand-accent">{project.type}</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-brand-accent">
                        {project.description}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <li key={i} className="flex items-center rounded-md bg-brand-subtle border border-brand-border px-3 py-1 text-xs font-medium text-brand-ink">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="skills" className="mb-24 lg:mb-32 scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-brand-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-12">
                <div className="flex items-center gap-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-brand-ink">Skills</h2>
                  <div className="h-px bg-brand-border flex-grow hidden lg:block"></div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                {Object.entries(SKILLS).map(([category, items], idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-ink mb-4">{category}</h3>
                    <ul className="flex flex-wrap gap-3">
                      {items.map((item, i) => (
                        <li key={i} className="bg-brand-subtle text-brand-ink border border-brand-border px-4 py-2 rounded-lg text-sm font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
