<template>
  <div class="page">
    <div v-if="showIntroAnimation" class="intro-screen" aria-hidden="true">
      <p class="typewriter">Hello World</p>
    </div>

    <div class="page-content" :class="{ 'is-visible': showPageContent }">
      <header class="site-header">
        <nav class="max-width-container nav">
          <a class="brand" href="#home">mohit.thakur()</a>
          <ul class="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="home" class="max-width-container content">
      <section id="about" class="hero section">
        <p class="eyebrow">FRONTEND DEVELOPER</p>
        <h1>Professionally functional. Existentially unresolved.</h1>
        <p class="lead">
  Frontend Developer with 6.5 years of experience in Vue.js and React, working across fintech, logistics,
  healthcare, and consumer brands. Currently at Quantinsti, building trading tools and a white-label
  solution used by one of India's largest brokers. Previously developed web applications for brands like
  Nescafe and Starbucks, and SaaS products in logistics and healthcare.
        </p>
        <p class="lead">
          I write code that tells machines what to render. They comply without hesitation, while I wonder
          whether this universe is just a side project shipped to production too early.
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="/Mohit_Thakur_Resume.pdf" target="_blank" rel="noopener">
            Open Resume
          </a>
          <a class="btn" href="#projects">See Projects</a>
        </div>
      </section>

      <section id="projects" class="section">
        <div class="section-head">
          <h2>Projects</h2>
          <p>Things I built while pretending deadlines are linear and not philosophical.</p>
        </div>

        <div class="project-list">
          <article v-for="project in projects" :key="project.title" class="project-row">
            <div class="project-top">
              <div>
                <p class="project-company">{{ project.company }}</p>
                <h3>{{ project.title }}</h3>
                <p class="project-role">{{ project.role }}</p>
              </div>
              <span class="pill">{{ project.period }}</span>
            </div>
            <p>{{ project.description }}</p>
            <ul class="project-highlights">
              <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
            <p class="project-impact">{{ project.impact }}</p>
            <ul class="tag-list">
              <li v-for="tag in project.stack" :key="tag">{{ tag }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="skills" class="section">
        <div class="section-head">
          <h2>Skills</h2>
          <p>Tools I use to shape digital chaos into something deployable.</p>
        </div>

        <div class="skills-grid">
          <article class="card">
            <h3>Frontend</h3>
            <ul class="plain-list">
              <li>Vue / Nuxt</li>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>SCSS / Tailwind</li>
            </ul>
          </article>
          <article class="card">
            <h3>Backend</h3>
            <ul class="plain-list">
              <li>Node.js / Express</li>
              <li>REST APIs</li>
              <li>WebSockets</li>
              <li>API integration</li>
            </ul>
          </article>
          <article class="card">
            <h3>Data + Tools</h3>
            <ul class="plain-list">
              <li>SQL / MongoDB</li>
              <li>Git / GitHub</li>
              <li>Webpack / AWS</li>
              <li>Performance optimization</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="section-head">
          <h2>Contact</h2>
          <p>For projects, opportunities, or shared confusion about existence.</p>
        </div>

        <div class="contact-wrap card">
          <p>
            Prefer email for serious work. If you are a recruiter, founder, or collaborator, I would love to
            connect.
          </p>
          <div class="contact-actions">
            <a class="btn btn-primary" href="mailto:mohitmilindthakur@gmail.com">Email Me</a>
            <a class="btn" href="https://github.com/mohitmilindthakur" target="_blank" rel="noopener">GitHub</a>
            <a class="btn" href="https://www.linkedin.com/in/mohit-thakur-215244a7/" target="_blank" rel="noopener">LinkedIn</a>
            <a class="btn" href="/Mohit_Thakur_Resume.pdf" target="_blank" rel="noopener">Resume</a>
          </div>
        </div>
      </section>
      </main>

      <footer class="footer">
        Built with <span class="text-love">&hearts;</span> deployed with doubt.
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const showPageContent = ref(false);
const showIntroAnimation = ref(true);

let showContentTimerId;
let hideIntroTimerId;

onMounted(() => {
  showContentTimerId = window.setTimeout(() => {
    showPageContent.value = true;
  }, 1040);

  hideIntroTimerId = window.setTimeout(() => {
    showIntroAnimation.value = false;
  }, 1100);
});

onBeforeUnmount(() => {
  window.clearTimeout(showContentTimerId);
  window.clearTimeout(hideIntroTimerId);
});

const projects = [
  {
    title: "Blueshift White-Label Revamp",
    company: "Quantinsti",
    role: "Frontend Engineer (sole frontend owner for 1+ year)",
    period: "2023 - Present",
    description:
      "Built and maintained the frontend of Blueshift, an algorithmic trading platform and white-label solution used by one of India's largest brokers.",
    highlights: [
      "Integrated broker APIs and WebSockets for real-time prices, positions, and trade updates.",
      "Created reusable trading components including order entry, position managers, LTP, and symbol modules.",
      "Led complete UI revamp and implemented dark/light themes with full mobile responsiveness.",
    ],
    impact:
      "Delivered end-to-end features by directly gathering requirements from clients and translating them into production-ready workflows.",
    stack: ["Vue.js", "WebSockets", "Broker APIs", "SCSS", "Design Systems"],
  },
  {
    title: "Nescafe.com Complete Rewrite",
    company: "Publicis Sapient",
    role: "Experience Engineer L2",
    period: "2022 - 2023",
    description:
      "Part of the frontend team for a complete rewrite of nescafe.com with refreshed design system and modern architecture.",
    highlights: [
      "Built animation-heavy interactions using CSS and GSAP across high-visibility landing sections.",
      "Implemented an interactive 3D globe using Three.js.",
      "Added RTL support to the majority of reusable components and helped set up LTR/RTL architecture with Webpack.",
      "Developed responsive, cross-browser components including carousels, cards, filters, and product modules.",
    ],
    impact:
      "Improved visual experience and global readiness of the platform while keeping components production-stable.",
    stack: ["React", "GSAP", "Three.js", "Webpack"],
  },
  {
    title: "Cargogen + Sentree AI",
    company: "Cloudfinch",
    role: "Frontend Engineer",
    period: "2020 - 2022",
    description:
      "Worked as the sole frontend developer across logistics and healthcare SaaS products, building interfaces from scratch and shipping client-facing modules.",
    highlights: [
      "Developed complete UI foundations for Cargogen and Sentree AI from initial phase to production.",
      "Handled API integrations for multiple business-critical modules and created utility libraries to standardize integration patterns.",
      "Configured theme and component systems in Element UI aligned to product design systems.",
      "Set up and automated deployments, while maintaining and scaling live product features.",
    ],
    impact:
      "Reduced frontend delivery friction by creating reusable patterns and owning implementation across product lines.",
    stack: ["Nuxt.js", "Element UI", "Tailwind CSS", "SASS", "AWS"],
  },
];
</script>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
}

.intro-screen {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
}

.typewriter {
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  font-size: var(--heading-h2);
  font-weight: 700;
  border-right: 2px solid var(--color-text);
  animation: typing 950ms steps(11, end) 60ms forwards, cursor 600ms step-end infinite;
}

.page-content {
  opacity: 0;
  transform: translateY(12px);
  filter: blur(3px);
  transition:
    opacity 1100ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 1100ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 1100ms cubic-bezier(0.22, 1, 0.36, 1);
}

.page-content.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(31, 31, 31, 0.92);
  backdrop-filter: blur(8px);
}

.nav {
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.brand {
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--body-sm);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 1.4rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-list a {
  text-decoration: none;
  color: var(--color-text);
  font-size: var(--body-sm);
  opacity: 0.85;
}

.nav-list a:hover {
  opacity: 1;
}

.content {
  padding: 3rem 2rem 10rem;
}

.section {
  padding: 4rem 0;
}

.hero {
  padding-top: 5rem;
}

.eyebrow {
  font-size: var(--body-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.75;
  margin-bottom: 1.2rem;
}

h1 {
  max-width: none;
}

.lead {
  max-width: none;
  margin-top: 1.6rem;
  font-size: var(--body-lg);
  opacity: 0.92;
}

.hero-actions {
  margin-top: 2.4rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: var(--color-text);
  background: transparent;
  text-decoration: none;
  padding: 1rem 1.6rem;
  border-radius: 999px;
  font-size: var(--body-sm);
  transition: all 0.2s ease;
}

.btn:hover {
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-primary {
  background: var(--color-text);
  color: var(--color-bg);
  border-color: var(--color-text);
}

.section-head {
  display: grid;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.section-head p {
  opacity: 0.8;
}

.project-list,
.skills-grid {
  display: grid;
  gap: 1.4rem;
}

.project-list {
  gap: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.project-row {
  padding: 2.4rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.skills-grid .card {
  grid-column: span 4;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.02);
  padding: 1.8rem;
}

.card {
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.02);
  padding: 1.8rem;
}

.project-head,
.timeline-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 1.1rem;
}

.project-company {
  font-size: var(--body-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.75;
  margin-bottom: 0.8rem;
}

.project-role {
  margin-top: 0.4rem;
  margin-bottom: 0;
  font-size: var(--body-sm);
  opacity: 0.9;
}

.project-highlights {
  margin-top: 1.2rem;
  padding-left: 1.8rem;
  display: grid;
  gap: 0.8rem;
}

.project-highlights li {
  line-height: 1.5;
}

.project-impact {
  margin-top: 1.2rem;
  padding-top: 1.2rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.2);
  font-size: var(--body-sm);
  opacity: 0.9;
}

.pill {
  font-size: var(--body-xs);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  padding: 0.2rem 0.8rem;
  opacity: 0.85;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.6rem;
  margin-top: 1.2rem;
}

.tag-list li {
  font-size: var(--body-xs);
  opacity: 0.85;
}

.plain-list {
  list-style: none;
  display: grid;
  gap: 0.7rem;
  margin-top: 1rem;
}

.timeline-item {
  max-width: 72ch;
}

.contact-wrap {
  max-width: 72ch;
}

.contact-actions {
  margin-top: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(31, 31, 31, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--body-sm);
  gap: 0.6rem;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 11ch;
  }
}

@keyframes cursor {
  to {
    border-right-color: transparent;
  }
}

@media (max-width: 900px) {
  .skills-grid .card {
    grid-column: span 6;
  }
}

@media (max-width: 640px) {
  .nav {
    align-items: flex-start;
    flex-direction: column;
  }

  .content {
    padding: 2rem 1.6rem 9rem;
  }

  .section {
    padding: 3rem 0;
  }

  .hero {
    padding-top: 2rem;
  }

  .skills-grid .card {
    grid-column: span 12;
  }

  .project-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer {
    font-size: var(--body-xs);
    text-align: center;
    padding: 0 1rem;
  }
}
</style>