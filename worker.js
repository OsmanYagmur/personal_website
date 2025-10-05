// Cloudflare Workers için hazırlanmış tek dosyalı web sitesi
// Tüm HTML, CSS ve JavaScript bu dosyada bulunur

export default {
  async fetch(request) {
    // CSS içeriği
    const CSS = `
/* ===========================
   CSS Reset & Base Styles
   =========================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #a78bfa;
    --primary-dark: #8b5cf6;
    --primary-light: #c4b5fd;
    --secondary-color: #1e1b4b;
    --bg-dark: #0f172a;
    --bg-darker: #020617;
    --card-bg: #1e293b;
    --text-dark: #f1f5f9;
    --text-light: #cbd5e1;
    --white: #ffffff;
    --border-color: #334155;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--bg-dark);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-sm);
    z-index: 1000;
    transition: all 0.3s ease;
    border-bottom: 1px solid var(--border-color);
}

.navbar.scrolled {
    box-shadow: var(--shadow-md);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20px;
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    cursor: pointer;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: var(--text-light);
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.nav-toggle span {
    width: 25px;
    height: 3px;
    background-color: var(--text-dark);
    transition: all 0.3s ease;
}

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #6d28d9 100%);
    position: relative;
    overflow: hidden;
    padding-top: 80px;
    z-index: 1;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
}

.hero-content {
    text-align: center;
    color: var(--white);
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8;
    opacity: 0.95;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--bg-dark);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--white);
    backdrop-filter: blur(10px);
    border: 2px solid var(--white);
}

.btn-secondary:hover {
    background-color: var(--primary-color);
    color: var(--bg-dark);
}

.btn-outline {
    background-color: transparent;
    color: var(--white);
    border: 2px solid var(--white);
}

.btn-outline:hover {
    background-color: var(--primary-color);
    color: var(--bg-dark);
}

section {
    padding: 5rem 0;
    position: relative;
    z-index: 10;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-dark);
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: var(--primary-color);
    border-radius: 2px;
}

.about {
    background-color: var(--bg-darker);
    position: relative;
    z-index: 10;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.about-text {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: 1.5rem;
    text-align: justify;
}

.experience {
    background-color: var(--bg-dark);
    position: relative;
    z-index: 10;
}

.experience-timeline {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
}

.experience-timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--primary-light);
}

.timeline-item {
    position: relative;
    padding-left: 60px;
    margin-bottom: 3rem;
}

.timeline-dot {
    position: absolute;
    left: 11px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 4px solid var(--bg-dark);
    box-shadow: var(--shadow-md);
}

.timeline-content {
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
}

.timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
}

.timeline-content h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.timeline-content h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
}

.timeline-date {
    font-size: 0.875rem;
    color: var(--text-light);
    margin-bottom: 1rem;
}

.timeline-list {
    list-style: none;
    padding-left: 0;
}

.timeline-list li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-light);
}

.timeline-list li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--primary-color);
}

.education {
    background-color: var(--bg-darker);
    position: relative;
    z-index: 10;
}

.education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.education-card {
    background-color: var(--card-bg);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
}

.education-card:hover {
    border-color: var(--primary-color);
    box-shadow: var(--shadow-lg);
    transform: translateY(-5px);
}

.card-icon {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.education-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.75rem;
}

.education-card h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.card-subtitle {
    font-size: 1rem;
    color: var(--text-light);
    margin-bottom: 0.25rem;
}

.card-date {
    font-size: 0.875rem;
    color: var(--text-light);
    margin-bottom: 1rem;
}

.card-list {
    list-style: none;
    padding-left: 0;
}

.card-list li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-light);
}

.card-list li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

.skills {
    background-color: var(--bg-dark);
    position: relative;
    z-index: 10;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.skill-card {
    background-color: var(--card-bg);
    border-radius: 16px;
    padding: 2.5rem;
    text-align: left;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
}

.skill-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-color);
}

.skill-icon {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    display: inline-block;
}

.skill-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 1.5rem;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: flex-start;
}

.skill-tag {
    background-color: rgba(167, 139, 250, 0.15);
    color: var(--primary-light);
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(167, 139, 250, 0.3);
    transition: all 0.3s ease;
}

.skill-tag:hover {
    background-color: var(--primary-color);
    color: var(--bg-dark);
    transform: translateY(-2px);
}

.contact {
    background-color: var(--bg-darker);
    position: relative;
    z-index: 10;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
}

.contact-card {
    background-color: var(--card-bg);
    border-radius: 16px;
    padding: 2rem;
    text-align: left;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.contact-card:hover {
    background-color: var(--card-bg);
    transform: translateX(5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.contact-card:hover .contact-icon {
    background-color: var(--primary-color);
    color: var(--bg-dark);
}

.contact-icon {
    color: var(--primary-color);
    background-color: rgba(167, 139, 250, 0.15);
    padding: 1.2rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.contact-info {
    flex: 1;
}

.contact-card h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
}

.contact-card a {
    color: var(--text-light);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease;
    display: block;
}

.contact-card a:hover {
    color: var(--primary-color);
}

.contact-card p {
    color: var(--text-light);
    font-size: 0.95rem;
    transition: color 0.3s ease;
    margin: 0;
}

.footer {
    background-color: var(--bg-darker);
    color: var(--text-light);
    text-align: center;
    padding: 2rem 0;
    border-top: 1px solid var(--border-color);
}

.footer p {
    margin: 0;
    opacity: 0.9;
}

.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: var(--bg-dark);
        width: 100%;
        text-align: center;
        transition: left 0.3s ease;
        box-shadow: var(--shadow-lg);
        padding: 2rem 0;
        border-bottom: 1px solid var(--border-color);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-toggle {
        display: flex;
    }

    .nav-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 300px;
    }

    .section-title {
        font-size: 2rem;
    }

    .experience-timeline::before {
        left: 10px;
    }

    .timeline-item {
        padding-left: 50px;
    }

    .timeline-dot {
        left: 1px;
    }

    .education-grid,
    .skills-grid,
    .contact-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 0.9rem;
    }

    section {
        padding: 3rem 0;
    }

    .timeline-content {
        padding: 1rem;
    }

    .education-card,
    .skill-card,
    .contact-card {
        padding: 1.5rem;
    }
}
`;

    // JavaScript içeriği
    const JS = `
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === \`#\${sectionId}\`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
    observer.observe(element);
});

window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 100);
    }
});

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = \`translateY(\${scrolled * parallaxSpeed}px)\`;
    }
});

const cards = document.querySelectorAll('.timeline-content, .education-card, .skill-card, .contact-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.setAttribute('id', 'scrollTopBtn');
    button.style.cssText = \`
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #7c3aed;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    \`;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.backgroundColor = '#6d28d9';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = '#7c3aed';
    });
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
};

createScrollTopButton();

const updateCopyrightYear = () => {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = \`© \${currentYear} Osman Yağmur. All rights reserved.\`;
    }
};

updateCopyrightYear();

document.addEventListener('DOMContentLoaded', () => {
    const cvLink = document.querySelector('a[href="/cv.pdf"]');
    if (cvLink) {
        cvLink.addEventListener('click', (e) => {
            console.log('CV download requested');
        });
    }
});

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c👋 Merhaba! Bu web sitesi Osman Yağmur için özel olarak tasarlanmıştır.', 
    'color: #7c3aed; font-size: 16px; font-weight: bold;');
console.log('%c💼 İş fırsatları için: osmanymrr@gmail.com', 
    'color: #6b7280; font-size: 14px;');
`;

    // HTML içeriği
    const html = `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Osman Yağmur - İstatistik öğrencisi, veri analizi ve finans tutkunu">
    <title>Osman Yağmur | İstatistik Öğrencisi & Finans Tutkunu</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>${CSS}</style>
</head>
<body>
    <nav class="navbar" id="navbar">
        <div class="container">
            <div class="nav-brand">Osman Yağmur</div>
            <div class="nav-toggle" id="navToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-menu" id="navMenu">
                <li><a href="#home" class="nav-link">Ana Sayfa</a></li>
                <li><a href="#about" class="nav-link">Hakkımda</a></li>
                <li><a href="#experience" class="nav-link">Deneyim</a></li>
                <li><a href="#skills" class="nav-link">Beceriler</a></li>
                <li><a href="#contact" class="nav-link">İletişim</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content fade-in">
                <h1 class="hero-title">Osman Yağmur</h1>
                <p class="hero-subtitle">İstatistik öğrencisi • Veri analizi, finans ve bankacılık alanlarında kendini geliştiren bir genç profesyonel.</p>
                <div class="hero-buttons">
                    <a href="https://www.linkedin.com/in/osmanymr/" target="_blank" class="btn btn-primary">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                    </a>
                    <a href="mailto:osmanymrr@gmail.com" class="btn btn-secondary">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                        </svg>
                        E-posta
                    </a>
                    <a href="/cv.pdf" download class="btn btn-outline">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/>
                        </svg>
                        CV İndir
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title fade-in">Hakkımda</h2>
            <div class="about-content fade-in">
                <p class="about-text">
                    Hacettepe Üniversitesi İstatistik bölümü öğrencisiyim. Veri odaklı düşünme ve analiz becerilerimi sürekli geliştirirken, finans ve bankacılık sektörüne olan ilgim doğrultusunda kendimi bu alanlarda derinleştiriyorum.
                </p>
                <p class="about-text">
                    Girişken, özgüvenli ve topluluk faaliyetlerinde aktif bir bireyim. Liderlik ve organizasyon becerilerim, ACM Hacettepe'deki etkin görevlerimde de kendini göstermektedir. Veri bilimi, finans ve teknoloji alanlarında sürekli öğrenmeye ve gelişmeye odaklanıyorum.
                </p>
            </div>
        </div>
    </section>

    <section id="experience" class="experience">
        <div class="container">
            <h2 class="section-title fade-in">Deneyim</h2>
            <div class="experience-timeline">
                <div class="timeline-item fade-in">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>alBaraka Türk Katılım Bankası</h3>
                        <h4>Portföy Yöneticisi Asistanı</h4>
                        <p class="timeline-date">Haziran 2025 - Halen</p>
                        <ul class="timeline-list">
                            <li>Finansal çözümler geliştirme ve analiz</li>
                            <li>Portföy yönetimi ve risk değerlendirmesi</li>
                            <li>Müşteri bağlılığı geliştirme stratejileri</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item fade-in">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>QNB</h3>
                        <h4>Online Staj</h4>
                        <p class="timeline-date">Ocak 2025 - Şubat 2025</p>
                        <ul class="timeline-list">
                            <li>Finansal süreçler ve dijital bankacılık sistemleri</li>
                            <li>Sektörel networking ve iş geliştirme</li>
                            <li>Bankacılık operasyonları deneyimi</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item fade-in">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>Denizbank</h3>
                        <h4>Online Staj</h4>
                        <p class="timeline-date">Aralık 2024 - Ocak 2025</p>
                        <ul class="timeline-list">
                            <li>Finansal analiz ve raporlama</li>
                            <li>Dijital bankacılık sistemleri deneyimi</li>
                            <li>Müşteri hizmetleri ve operasyonel süreçler</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item fade-in">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>Vestel</h3>
                        <h4>Satış Danışmanı</h4>
                        <p class="timeline-date">Temmuz 2024 - Eylül 2024</p>
                        <ul class="timeline-list">
                            <li>Müşteri ilişkileri yönetimi ve danışmanlık</li>
                            <li>İkna ve iletişim becerileri geliştirme</li>
                            <li>Stratejik pazarlama ve satış teknikleri</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item fade-in">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>Shakespeare Bistro</h3>
                        <h4>Barista</h4>
                        <p class="timeline-date">Mayıs 2024 - Temmuz 2024</p>
                        <ul class="timeline-list">
                            <li>Müşteri memnuniyeti ve hizmet kalitesi</li>
                            <li>Etkili iletişim ve problem çözme</li>
                            <li>Hızlı tempolu çalışma ortamında adaptasyon</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="education" class="education">
        <div class="container">
            <div class="education-grid">
                <div class="education-card fade-in">
                    <div class="card-icon">
                        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                        </svg>
                    </div>
                    <h3>Eğitim</h3>
                    <h4>Hacettepe Üniversitesi</h4>
                    <p class="card-subtitle">İstatistik Lisans</p>
                    <p class="card-date">Eylül 2024 - Halen</p>
                    <ul class="card-list">
                        <li>Temel istatistik ve veri bilimi</li>
                        <li>Programlama: Python, R, C</li>
                        <li>Veri analizi ve modelleme</li>
                    </ul>
                </div>

                <div class="education-card fade-in">
                    <div class="card-icon">
                        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                        </svg>
                    </div>
                    <h3>Topluluk ve Faaliyetler</h3>
                    <h4>ACM Hacettepe</h4>
                    <p class="card-subtitle">Aktif Üye</p>
                    <p class="card-date">Eylül 2024 - Halen</p>
                    <ul class="card-list">
                        <li>Eğitim ve seminer organizasyonları</li>
                        <li>Teknik içerik üretimi</li>
                        <li>Topluluk koordinasyonu ve liderlik</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title fade-in">Beceriler</h2>
            <div class="skills-grid">
                <div class="skill-card fade-in">
                    <div class="skill-icon">
                        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                        </svg>
                    </div>
                    <h3>Programlama</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">R</span>
                        <span class="skill-tag">C</span>
                    </div>
                </div>

                <div class="skill-card fade-in">
                    <div class="skill-icon">
                        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                        </svg>
                    </div>
                    <h3>Finans</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Finansal Analiz</span>
                        <span class="skill-tag">Portföy Yönetimi</span>
                        <span class="skill-tag">Stratejik Planlama</span>
                    </div>
                </div>

                <div class="skill-card fade-in">
                    <div class="skill-icon">
                        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                        </svg>
                    </div>
                    <h3>Yabancı Dil</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">İngilizce</span>
                    </div>
                </div>

                <div class="skill-card fade-in">
                    <div class="skill-icon">
                        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                        </svg>
                    </div>
                    <h3>Sertifikalar</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Finansal Okuryazarlık Seviye 1</span>
                        <span class="skill-tag">Finansal Okuryazarlık Seviye 2</span>
                        <span class="skill-tag">Finansal Okuryazarlık Seviye 3</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title fade-in">İletişim</h2>
            <div class="contact-grid">
                <div class="contact-card fade-in">
                    <div class="contact-icon">
                        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </div>
                    <div class="contact-info">
                        <h3>E-posta</h3>
                        <a href="mailto:osmanymrr@gmail.com">osmanymrr@gmail.com</a>
                    </div>
                </div>

                <div class="contact-card fade-in">
                    <div class="contact-icon">
                        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                    </div>
                    <div class="contact-info">
                        <h3>Telefon</h3>
                        <a href="tel:+905401612004">0540 161 2004</a>
                    </div>
                </div>

                <div class="contact-card fade-in">
                    <div class="contact-icon">
                        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </div>
                    <div class="contact-info">
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/osmanymr/" target="_blank">linkedin.com/in/osmanymr</a>
                    </div>
                </div>

                <div class="contact-card fade-in">
                    <div class="contact-icon">
                        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                    </div>
                    <div class="contact-info">
                        <h3>Konum</h3>
                        <p>Çankaya, Ankara</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Osman Yağmur. All rights reserved.</p>
        </div>
    </footer>

    <script>${JS}</script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  },
};
