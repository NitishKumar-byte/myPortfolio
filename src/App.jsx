import portrait from "./assets/nitish-portrait.png";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Employee Details",
    description: "A responsive page to display employee information.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/your-username/employee-details",
    color: "violet",
  },
  {
    number: "02",
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my work and skills.",
    tags: ["React", "Vite", "CSS"],
    link: "https://github.com/your-username/portfolio",
    color: "blue",
  },
  {
    number: "03",
    title: "Coming Soon",
    description: "A new project will be added here soon.",
    tags: ["Your skill", "Your tool"],
    link: "https://github.com/your-username",
    color: "pink",
  },
];

const skills = ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Python", "C++"];

function ProjectCard({ project }) {
  function handlePointerMove(event) {
    if (event.pointerType !== "mouse") return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    card.style.setProperty("--rotate-y", `${(x / bounds.width - 0.5) * 12}deg`);
    card.style.setProperty(
      "--rotate-x",
      `${(0.5 - y / bounds.height) * 12}deg`,
    );
    card.style.setProperty("--pointer-x", `${x}px`);
    card.style.setProperty("--pointer-y", `${y}px`);
  }

  function resetCard(event) {
    event.currentTarget.style.setProperty("--rotate-x", "0deg");
    event.currentTarget.style.setProperty("--rotate-y", "0deg");
  }

  return (
    <article
      className={`project-card project-card--${project.color}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
    >
      <div className="card-content">
        <div className="card-topline">
          <span>PROJECT {project.number}</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div>
          <h3>{project.title}</h3>
          <p className="card-description">{project.description}</p>
        </div>
        <div className="card-bottomline">
          <ul className="tag-list">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noreferrer">
            View project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function SkillCard({ skill, index }) {
  function handlePointerMove(event) {
    if (event.pointerType !== "mouse") return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    card.style.setProperty("--rotate-y", `${(x / bounds.width - 0.5) * 10}deg`);
    card.style.setProperty("--rotate-x", `${(0.5 - y / bounds.height) * 10}deg`);
    card.style.setProperty("--pointer-x", `${x}px`);
    card.style.setProperty("--pointer-y", `${y}px`);
  }

  function resetCard(event) {
    event.currentTarget.style.setProperty("--rotate-x", "0deg");
    event.currentTarget.style.setProperty("--rotate-y", "0deg");
  }

  return (
    <div
      className={`skill-item skill-item--${(index % 3) + 1}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
    >
      <span className="skill-number">0{index + 1}</span>
      <span className="skill-name">{skill}</span>
      <span className="skill-arrow" aria-hidden="true">↗</span>
    </div>
  );
}

export default function App() {
  return (
    <main className="page" id="home">
      <header className="navigation">
        <a className="wordmark" href="#home">
          NITISH KUMAR<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
            </p>
            <h1>
              Building digital
              <br />
              experiences <span>with care.</span>
            </h1>
            <div className="hero-footer">
              <p>
                I’m Nitish Kumar, a React developer creating thoughtful and
                responsive websites.
              </p>
              <a className="scroll-link" href="#projects">
                SCROLL TO EXPLORE <span>↓</span>
              </a>
            </div>
          </div>
          <div className="portrait-frame">
            <img src={portrait} alt="Nitish Kumar" />
            <span className="portrait-caption">Full Stack Developer</span>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>About me<span>.</span></h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Nitish Kumar, a Computer Science and Engineering student at MMMUT,
            Gorakhpur. I’m interested in full-stack development and building
            responsive web experiences. I also enjoy exploring AI and machine
            learning and strengthening my foundations in programming and problem-solving.
          </p>
          <a
            className="resume-button"
            href={`${import.meta.env.BASE_URL}Nitish-Kumar-Resume.pdf`}
            download
          >
            Download my resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW THINGS I’VE MADE</p>
            <h2>
              Selected work<span>.</span>
            </h2>
          </div>
          <p className="project-count">03 PROJECTS</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TOOLS I WORK WITH</p>
            <h2>My skills<span>.</span></h2>
          </div>
          <p className="project-count">07 SKILLS</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={skill} skill={skill} index={index} />
          ))}
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-heading">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>
            Let’s talk<span>.</span>
          </h2>
          <p className="contact-intro">
            I’m open to new projects and opportunities. Reach out using any of the details below.
          </p>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-label">EMAIL</span>
            <a href="mailto:mk6981123@gmail.com">mk6981123@gmail.com <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-item">
            <span className="contact-label">PHONE</span>
            <a href="tel:+919696788105">+91 96967 88105 <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-item">
            <span className="contact-label">ADDRESS</span>
            <p>Chandauli 232104, Uttar Pradesh, India</p>
          </div>
          <div className="contact-item">
            <span className="contact-label">SOCIAL</span>
            <div className="social-links">
              <a href="https://github.com/NitishKumar-byte" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/nitish-kumar-672b13270" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://www.instagram.com/nitishkumar____official/" target="_blank" rel="noreferrer">Instagram ↗</a>
            </div>
          </div>
        </div>

        <p className="copyright">© {new Date().getFullYear()} NitishKumar</p>
      </footer>
    </main>
  );
}
