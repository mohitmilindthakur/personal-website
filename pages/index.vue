<template>
    <section class="hello-world">
        <div class="hello-world__text">
            <div class="hello">
                Hello
            </div>
            <div class="world">
                World
            </div>
        </div>
        <div class="digital-intro">
            Welcome to a digital realm where the lines between pixels and purpose blur, and where the symphony of code
            dances with the existential melodies of the soul. As you navigate through this digital expanse, crafted by
            the hands of a frontend developer grappling with the existential abyss, you are invited to ponder the
            profound questions that echo within the corridors of cyberspace.
        </div>
    </section>
    <!-- Navigation -->
    <nav id="navbar">
        <div class="container">
            <div class="logo">MT</div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>Mohit Thakur</h1>
                <p class="tagline">Frontend Developer</p>
                <p>Building high-performance trading platforms and financial applications with modern web technologies. Specialized in Vue.js, React, and real-time data visualization for fintech solutions.</p>
                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary">Get In Touch</a>
                    <a href="#experience" class="btn btn-secondary">View Work</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="code-window">
                    <div class="code-header">
                        <span class="code-dot red"></span>
                        <span class="code-dot yellow"></span>
                        <span class="code-dot green"></span>
                    </div>
                    <div class="code-content">
                        <div><span class="code-keyword">const</span> <span class="code-function">developer</span> = {</div>
                        <div>  name: <span class="code-string">'Mohit Thakur'</span>,</div>
                        <div>  role: <span class="code-string">'Frontend Developer'</span>,</div>
                        <div>  location: <span class="code-string">'Hyderabad'</span>,</div>
                        <div>  experience: <span class="code-string">'6+ years'</span>,</div>
                        <div>  expertise: [</div>
                        <div>    <span class="code-string">'Vue.js'</span>,</div>
                        <div>    <span class="code-string">'React'</span>,</div>
                        <div>    <span class="code-string">'FinTech'</span>,</div>
                        <div>    <span class="code-string">'Real-time Apps'</span></div>
                        <div>  ]</div>
                        <div>};</div>
                        <div><span class="code-comment">// Let's build something amazing!</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>I'm a Frontend Developer with 6+ years of experience specializing in building sophisticated web applications across fintech, logistics, and e-commerce domains.</p>
                    <p>Currently at Quantinsti, I develop cutting-edge trading platforms and financial analysis tools that serve algorithmic traders globally. My work involves real-time market data visualization, complex options strategy builders, and high-performance trading dashboards.</p>
                    <p>Previously, I've contributed to global brands like Nescafe and Starbucks, creating engaging user experiences for millions of users worldwide.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section class="experience" id="experience">
        <div class="container">
            <h2 class="section-title">Professional Experience</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-company">Quantinsti</div>
                    <div class="timeline-role">Frontend Engineer</div>
                    <div class="timeline-date">November 2023 – Present | Hyderabad, India</div>
                    <p class="timeline-description">Building cutting-edge trading platforms and financial analysis tools for algorithmic traders and quantitative analysts.</p>
                    <ul class="timeline-highlights">
                        <li>Developed Options Wizard - an advanced options strategy builder with real-time P&L calculations</li>
                        <li>Implemented optimized real-time LTP streaming service for sub-second market data updates</li>
                        <li>Integrated third-party financial APIs for seamless data exchange and order execution</li>
                        <li>Created reusable trading components library used across multiple platforms</li>
                    </ul>
                    <div class="tech-stack">
                        <span class="tech-tag">Vue 3</span>
                        <span class="tech-tag">Tailwind CSS</span>
                        <span class="tech-tag">WebSocket</span>
                        <span class="tech-tag">RESTful APIs</span>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-company">Publicis Sapient</div>
                    <div class="timeline-role">Experience Engineer L2</div>
                    <div class="timeline-date">April 2022 – October 2023 | Hyderabad, India</div>
                    <p class="timeline-description">Led frontend development for Nescafe's global web ecosystem, serving millions of users worldwide.</p>
                    <ul class="timeline-highlights">
                        <li>Led complete rewrite of nescafe.com with modern architecture and responsive design</li>
                        <li>Created advanced animations using GSAP for enhanced user engagement</li>
                        <li>Implemented 3D interactive globe using Three.js for global product visualization</li>
                        <li>Configured Webpack for code splitting and automated LTR/RTL deployment</li>
                    </ul>
                    <div class="tech-stack">
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">SCSS</span>
                        <span class="tech-tag">GSAP</span>
                        <span class="tech-tag">Three.js</span>
                        <span class="tech-tag">Webpack</span>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-company">Cloudfinch</div>
                    <div class="timeline-role">Frontend Engineer</div>
                    <div class="timeline-date">December 2020 – March 2022 | Remote</div>
                    <p class="timeline-description">Architected and developed SaaS applications for logistics and healthcare sectors from ground up.</p>
                    <ul class="timeline-highlights">
                        <li>Built Cargogen logistics platform with complete frontend architecture</li>
                        <li>Developed Sentree AI safety management system with custom component library</li>
                        <li>Created utility libraries for streamlined API integration</li>
                        <li>Automated deployment pipeline for faster releases</li>
                    </ul>
                    <div class="tech-stack">
                        <span class="tech-tag">Nuxt.js</span>
                        <span class="tech-tag">Element UI</span>
                        <span class="tech-tag">Tailwind CSS</span>
                        <span class="tech-tag">AWS</span>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-company">Aventior</div>
                    <div class="timeline-role">Frontend Engineer</div>
                    <div class="timeline-date">May 2020 – November 2020 | Remote</div>
                    <p class="timeline-description">Developed clinical trials and research platform modules for US healthcare clients.</p>
                    <ul class="timeline-highlights">
                        <li>Architected new module for clinical trials platform</li>
                        <li>Built responsive components with comprehensive API integrations</li>
                        <li>Implemented Agile methodology for rapid development cycles</li>
                    </ul>
                    <div class="tech-stack">
                        <span class="tech-tag">Vue.js</span>
                        <span class="tech-tag">Vuex</span>
                        <span class="tech-tag">Vue Bootstrap</span>
                        <span class="tech-tag">SASS</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="skills" id="skills">
        <div class="container">
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Frontend Frameworks</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Vue.js</span>
                        <span class="skill-tag">Vuex</span>
                        <span class="skill-tag">Nuxt.js</span>
                        <span class="skill-tag">React.js</span>
                        <span class="skill-tag">Redux</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Core Technologies</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">JavaScript (ES6+)</span>
                        <span class="skill-tag">HTML5</span>
                        <span class="skill-tag">CSS3</span>
                        <span class="skill-tag">TypeScript</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Styling & UI</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Tailwind CSS</span>
                        <span class="skill-tag">SASS/SCSS</span>
                        <span class="skill-tag">Element UI</span>
                        <span class="skill-tag">Bootstrap</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Animation & 3D</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">GSAP</span>
                        <span class="skill-tag">Three.js</span>
                        <span class="skill-tag">CSS Animations</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Backend & Database</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Node.js</span>
                        <span class="skill-tag">Express.js</span>
                        <span class="skill-tag">SQL</span>
                        <span class="skill-tag">Python</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Tools & DevOps</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Git</span>
                        <span class="skill-tag">Webpack</span>
                        <span class="skill-tag">Figma</span>
                        <span class="skill-tag">AWS</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">📧</div>
                        <div class="contact-details">
                            <h3>Email</h3>
                            <a href="mailto:mohitmilindthakur@gmail.com">mohitmilindthakur@gmail.com</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📱</div>
                        <div class="contact-details">
                            <h3>Phone</h3>
                            <p>+91 8919772781</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📍</div>
                        <div class="contact-details">
                            <h3>Location</h3>
                            <p>Hyderabad, India</p>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="https://linkedin.com/in/mohitthakur-215244a7" target="_blank" class="social-link" title="LinkedIn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/mohitmilindthakur" target="_blank" class="social-link" title="GitHub">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="contact-form">
                    <h3 style="font-size: 2rem; margin-bottom: 1rem;">Let's Collaborate</h3>
                    <p style="font-size: 1.2rem; color: var(--gray); margin-bottom: 2rem; line-height: 1.8;">
                        I'm always interested in hearing about new projects and opportunities. Whether you're looking to build a trading platform, need frontend expertise, or just want to connect, feel free to reach out!
                    </p>
                    <a href="mailto:mohitmilindthakur@gmail.com" class="btn btn-primary" style="display: inline-block; font-size: 1.1rem;">
                        Send me an email
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2026 Mohit Thakur. Built with passion and modern web technologies.</p>
        </div>
    </footer>
</template>
<script setup>

    window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
</script>

<style scoped lang="scss">
.hello-world {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &__text {
        font-size: 5rem;
        position: relative;
        display: flex;
        gap: 7px;
        overflow: hidden;

        .hello {
            animation: animate-exit-left .5s 1s linear forwards;
        }

        .world {
            animation: animate-exit-right .5s 1s linear forwards;
        }

        &:before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: var(--color-bg);
            // background-color: black;
            z-index: 1;
            animation: animate-hello-world .7s linear forwards;
        }
    }
}

.digital-intro {
    // display: none;
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    animation: animate-fade-in 2s 2s linear forwards;
    max-width: 90%;
    line-height: 140%;
    font-size: 4rem;
}

@keyframes animate-hello-world {
    from {
        // width: 100%;
        // opacity: 1;
    }

    99% {
        transform: translateX(100%);
    }

    100% {
        // width: 0;
        transform: translateX(100%);
        // display: none;
    }
}

@keyframes animate-exit-left {
    from {
        transform: translateX(0)
    }

    to {
        transform: translateX(-100%);
        display: none;
    }
}

@keyframes animate-exit-right {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100%);
        display: none;
    }
}

@keyframes animate-fade-in {
    from {
        opacity: 0;
        display: block;
        width: auto;
        height: auto;
        overflow: visible;
    }

    to {
        opacity: 1;
        display: block;
        width: auto;
        height: auto;
        overflow: visible;
    }
}

@keyframes animate-fade-out {
    0% {
        opacity: 1;
        display: block;
        width: auto;
        height: auto;
        overflow: visible;
    }

    99% {
        opacity: 0;
    }

    100% {
        display: none;
    }
}

* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #2563eb;
            --primary-dark: #1e40af;
            --secondary: #10b981;
            --dark: #0f172a;
            --dark-light: #1e293b;
            --gray: #64748b;
            --light: #f8fafc;
            --white: #ffffff;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background: var(--light);
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 1000;
            transition: all 0.3s ease;
        }

        nav.scrolled {
            padding: 0.5rem 0;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        nav .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        nav .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        nav a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            transition: color 0.3s;
        }

        nav a:hover {
            color: var(--primary);
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, var(--dark) 0%, var(--dark-light) 100%);
            color: var(--white);
            padding-top: 80px;
        }

        .hero .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--white) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-content .tagline {
            font-size: 1.5rem;
            color: var(--secondary);
            margin-bottom: 1rem;
        }

        .hero-content p {
            font-size: 1.1rem;
            color: var(--gray);
            margin-bottom: 2rem;
            line-height: 1.8;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
        }

        .btn {
            padding: 0.875rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            display: inline-block;
        }

        .btn-primary {
            background: var(--primary);
            color: var(--white);
        }

        .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }

        .btn-secondary {
            background: transparent;
            color: var(--white);
            border: 2px solid var(--white);
        }

        .btn-secondary:hover {
            background: var(--white);
            color: var(--dark);
        }

        .hero-image {
            position: relative;
        }

        .code-window {
            background: #1e1e1e;
            border-radius: 12px;
            padding: 1rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        .code-header {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .code-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .code-dot.red { background: #ff5f56; }
        .code-dot.yellow { background: #ffbd2e; }
        .code-dot.green { background: #27c93f; }

        .code-content {
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            color: #d4d4d4;
            line-height: 1.6;
        }

        .code-keyword { color: #569cd6; }
        .code-function { color: #dcdcaa; }
        .code-string { color: #ce9178; }
        .code-comment { color: #6a9955; }

        /* Section Styling */
        section {
            padding: 5rem 2rem;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            position: relative;
            padding-bottom: 1rem;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--primary);
            border-radius: 2px;
        }

        /* About Section */
        .about {
            background: var(--white);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .about-text p {
            margin-bottom: 1rem;
            color: var(--gray);
            font-size: 1.1rem;
        }

        /* Experience Section */
        .experience {
            background: var(--light);
        }

        .timeline {
            position: relative;
            padding-left: 3rem;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--primary);
        }

        .timeline-item {
            position: relative;
            margin-bottom: 3rem;
            background: var(--white);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }

        .timeline-item:hover {
            transform: translateX(10px);
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -3.5rem;
            top: 2rem;
            width: 16px;
            height: 16px;
            background: var(--primary);
            border: 4px solid var(--white);
            border-radius: 50%;
            box-shadow: 0 0 0 4px var(--light);
        }

        .timeline-company {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--dark);
            margin-bottom: 0.5rem;
        }

        .timeline-role {
            color: var(--primary);
            font-weight: 600;
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
        }

        .timeline-date {
            color: var(--gray);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .timeline-description {
            color: var(--gray);
            margin-bottom: 1rem;
        }

        .timeline-highlights {
            list-style: none;
            padding: 0;
        }

        .timeline-highlights li {
            padding-left: 1.5rem;
            position: relative;
            margin-bottom: 0.5rem;
            color: var(--gray);
        }

        .timeline-highlights li::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .tech-tag {
            background: var(--light);
            color: var(--primary);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }

        /* Skills Section */
        .skills {
            background: var(--white);
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .skill-category {
            background: var(--light);
            padding: 2rem;
            border-radius: 12px;
            transition: transform 0.3s;
        }

        .skill-category:hover {
            transform: translateY(-5px);
        }

        .skill-category h3 {
            color: var(--primary);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .skill-tag {
            background: var(--white);
            color: var(--dark);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.9rem;
        }

        /* Contact Section */
        .contact {
            background: linear-gradient(135deg, var(--dark) 0%, var(--dark-light) 100%);
            color: var(--white);
        }

        .contact .section-title {
            color: var(--white);
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .contact-icon {
            width: 50px;
            height: 50px;
            background: var(--primary);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }

        .contact-details h3 {
            margin-bottom: 0.5rem;
        }

        .contact-details p {
            color: var(--gray);
        }

        .contact-details a {
            color: var(--secondary);
            text-decoration: none;
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .social-link {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            text-decoration: none;
            transition: all 0.3s;
        }

        .social-link:hover {
            background: var(--primary);
            transform: translateY(-3px);
        }

        .contact-form {
            background: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: 12px;
            backdrop-filter: blur(10px);
        }

        /* Footer */
        footer {
            background: var(--dark);
            color: var(--white);
            text-align: center;
            padding: 2rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero .container,
            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .hero-content h1 {
                font-size: 2.5rem;
            }

            .hero-content .tagline {
                font-size: 1.2rem;
            }

            nav ul {
                display: none;
            }

            .timeline {
                padding-left: 2rem;
            }
        }
</style>
