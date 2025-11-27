import React, { useState } from 'react';
import profileImg from './assets/profile.jpg';
import './App.css';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
  { href: '#resume', label: 'Resume' },
];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((open) => !open);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="logo" onClick={closeNav}>
            <span className="logo-main">Sadbhav</span>
            <span className="logo-sub">Web Developer</span>
          </a>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${isNavOpen ? 'nav-open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeNav}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="section hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <p className="hero-tag">Web Developer · B.E CSE</p>
              <h1>
                Hi, I&apos;m <span className="highlight">Sadbhav</span>
              </h1>
              <p className="hero-subtitle">
                A Computer Science graduate from Atria Institute of Technology, focused on
                building clean and responsive web applications using React, JavaScript and
                modern web tools.
              </p>
              <p className="hero-subtitle">
                I enjoy turning ideas into real working applications and continuously
                improving my skills by learning new concepts, tools and best practices.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn primary">
                  View Projects
                </a>
                <a href="#contact" className="btn ghost">
                  Contact Me
                </a>
              </div>

              <div className="hero-meta">
                <span>React &amp; JavaScript Enthusiast</span>
                <span>Strong in Java &amp; MySQL</span>
              </div>
            </div>

            <div className="hero-image">
              <div className="profile-wrapper">
                <img src={profileImg} alt="Sadbhav portrait" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <p className="section-intro">
              I am a Computer Science graduate who enjoys creating digital products that
              are simple, intuitive and visually appealing. My focus is on frontend and
              basic full-stack development, and I take pride in writing readable and
              structured code.
            </p>
            <div className="about-grid">
              <div className="about-card">
                <h3>How I Work</h3>
                <ul>
                  <li>Learn through hands-on projects.</li>
                  <li>Focus on understanding concepts instead of memorising.</li>
                  <li>Write clean, maintainable and well-structured code.</li>
                  <li>Pay attention to user experience and responsive design.</li>
                </ul>
              </div>
              <div className="about-card">
                <h3>Career Goal</h3>
                <p>
                  I am actively seeking a Software / Web Developer role where I can
                  contribute to real projects, collaborate with a team and continue
                  growing as a developer.
                </p>
                <p>
                  I am particularly interested in roles that involve React, JavaScript,
                  Java and databases, with opportunities to work on end-to-end features.
                </p>
                <p>
                  Beyond coding, I value clear communication, taking ownership of tasks
                  and being reliable in a team. I enjoy breaking down problems into small,
                  testable pieces and iterating quickly based on feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section section-alt">
          <div className="container">
            <h2>Tech Stack &amp; Tools</h2>
            <p className="section-intro">
              These are the different technologies and tools I have worked with so far.
            </p>

            <div className="skills-grid">
              <div className="skills-group">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript (ES6)</li>
                  <li>React (Vite)</li>
                  <li>Responsive UI Development</li>
                </ul>
              </div>

              <div className="skills-group">
                <h3>Backend &amp; Database</h3>
                <ul>
                  <li>Java (Core)</li>
                  <li>MySQL</li>
                  <li>Firebase (Auth, Firestore — basic)</li>
                  <li>Basic understanding of REST APIs</li>
                </ul>
              </div>

              <div className="skills-group">
                <h3>Tools</h3>
                <ul>
                  <li>VS Code</li>
                  <li>Git &amp; GitHub</li>
                  <li>Chrome DevTools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <h2>Projects</h2>
            <p className="section-intro">
              A selection of my projects that showcase my skills in frontend development,
              Java, databases and integrating different technologies.
            </p>

            <div className="projects-grid">
              <article className="project-card">
                <h3>Niche Community Platform</h3>
                <p className="project-tagline">
                  A responsive social platform where users can join interest-based groups
                  and interact in real time.
                </p>
                <p className="project-description">
                  This project strengthened my skills in React, routing, conditional
                  rendering and Firebase integration. I focused on creating a clean UI,
                  responsive layouts and smooth user flows between different sections.
                </p>
                <p className="project-tech">
                  Tech Used: React (Vite), JavaScript (ES6), Firebase, CSS3
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/sadbhavSK/Niche-Community-Platform"
                    target="_blank"
                    rel="noreferrer"
                    className="btn small"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://niche-community-platform.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn small ghost"
                  >
                    Live Demo
                  </a>
                </div>
              </article>

              <article className="project-card">
                <h3>Sentiment Analysis of Court Case Evidence</h3>
                <p className="project-tagline">
                  A system that analyses text-based legal evidence and classifies it into
                  sentiment categories.
                </p>
                <p className="project-description">
                  I mainly worked on the frontend design, building input forms and
                  connecting the ML model&apos;s output to the web interface. This project
                  improved my understanding of integrating Python Flask APIs with a web
                  frontend.
                </p>
                <p className="project-tech">
                  Tech Used: Python, Flask, HTML, CSS, JavaScript
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/sadbhavSK/Sentiment_analysis_using_deep_learing"
                    target="_blank"
                    rel="noreferrer"
                    className="btn small"
                  >
                    GitHub
                  </a>
                </div>
              </article>

              <article className="project-card">
                <h3>Farm Management System</h3>
                <p className="project-tagline">
                  A Java-MySQL based system to manage crop details, expenses, revenue and
                  inventory.
                </p>
                <p className="project-description">
                  This project strengthened my JDBC connectivity and database handling
                  skills. I worked on designing tables, writing SQL queries and
                  implementing Java code for CRUD operations.
                </p>
                <p className="project-tech">
                  Tech Used: Java, MySQL, JDBC, HTML, CSS
                </p>
              </article>

              <article className="project-card">
                <h3>Dog Breed Classification</h3>
                <p className="project-tagline">
                  A machine learning based application that predicts dog breeds from
                  images using a pretrained CNN model.
                </p>
                <p className="project-description">
                  This mini-project gave me basic exposure to working with deep learning
                  models and understanding how to integrate a trained model into an
                  application workflow.
                </p>
                <p className="project-tech">
                  Tech Used: Python, Deep Learning (pretrained model)
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* GitHub Stats & Calendar */}
        <section id="github" className="section section-alt">
          <div className="container">
            <h2>GitHub Statistics &amp; Calendar</h2>
            <p className="section-intro">
             
            </p>

            <div className="github-stats-layout">
              <div className="github-summary-card">
                <h3>sadbhavSK&apos;s GitHub Stats</h3>
                <p className="github-summary-subtitle">
                  I am gradually increasing my activity and focusing on writing small but
                  meaningful commits instead of just pushing large chunks of code.
                </p>
                <div className="github-summary-grid">
                  <div className="github-summary-left">
                    <ul>
                      <li>
                        <span>Total Stars Earned:</span>
                        <strong>0</strong>
                      </li>
                      <li>
                        <span>Total Commits (last year):</span>
                        <strong>32</strong>
                      </li>
                      <li>
                        <span>Total PRs:</span>
                        <strong>0</strong>
                      </li>
                      <li>
                        <span>Total Issues:</span>
                        <strong>0</strong>
                      </li>
                      <li>
                        <span>Repositories contributed to (last year):</span>
                        <strong>0</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="github-summary-right">
                    <div className="github-grade-circle">
                      <span className="github-grade-letter">C</span>
                    </div>
                    <p className="github-grade-caption">
                      Current contribution level. I am working on moving this up by
                      committing regularly and taking up more mini-projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="github-contrib-card">
                <div className="github-contrib-item">
                  <p className="github-contrib-label">Total Contributions</p>
                  <p className="github-contrib-value">48</p>
                  <p className="github-contrib-meta">Sep 8, 2023 - Present</p>
                </div>
                <div className="github-contrib-item">
                  <p className="github-contrib-label">Current Streak</p>
                  <p className="github-contrib-value">0</p>
                  <p className="github-contrib-meta">Nov 24</p>
                </div>
                <div className="github-contrib-item">
                  <p className="github-contrib-label">Longest Streak</p>
                  <p className="github-contrib-value">3</p>
                  <p className="github-contrib-meta">Feb 28 - Mar 2</p>
                </div>
              </div>

              <p className="github-progress-note">
                
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
            <p className="section-intro">
              Feel free to reach out for job opportunities, internships, collaborations
              or project discussions.
            </p>

            <div className="contact-grid">
              <div className="contact-card">
                <h3>Contact Details</h3>
                <ul className="contact-list">
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+918150045519">+91 81500 45519</a>
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:sadbhavkadvade@gmail.com">
                      sadbhavkadvade@gmail.com
                    </a>
                  </li>
                  <li>
                    <span>LinkedIn:</span>
                    <a
                      href="https://www.linkedin.com/in/sadbhav-s-k-b3111a293/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/sadbhav-s-k-b3111a293
                    </a>
                  </li>
                  <li>
                    <span>GitHub:</span>
                    <a
                      href="https://github.com/sadbhavSK"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/sadbhavSK
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="section section-alt">
          <div className="container resume-section">
            <h2>Resume</h2>
            <p className="section-intro">
              You can view or download my resume using the buttons below.
            </p>

            <div className="resume-actions">
              <a
                className="btn primary"
                href="https://drive.google.com/uc?export=download&id=1ZZvnmx_6nE_ggOgHA08SMsUtYfk9KGh6"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
              <a
                className="btn ghost"
                href="https://drive.google.com/file/d/1ZZvnmx_6nE_ggOgHA08SMsUtYfk9KGh6/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View on Google Drive
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © 2025 Sadbhav — Portfolio created for placements &amp; professional
            opportunities.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
