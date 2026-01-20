// Smooth scroll for anchor links
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

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Fade in on scroll
const fadeElements = document.querySelectorAll('.topic-card, .guide-item');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                requestAnimationFrame(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                });
            }, index * 100);
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Terminal typing animation
const terminalLines = [
    { selector: '.terminal-line:nth-child(1)', delay: 500 },
    { selector: '.terminal-line:nth-child(2)', delay: 1000 },
    { selector: '.terminal-line:nth-child(3)', delay: 1500 },
    { selector: '.terminal-line:nth-child(4)', delay: 2000 },
    { selector: '.terminal-line:nth-child(5)', delay: 2500 }
];

function animateTerminal() {
    terminalLines.forEach(line => {
        const element = document.querySelector(line.selector);
        if (element) {
            element.style.opacity = '0';
            setTimeout(() => {
                element.style.transition = 'opacity 0.3s ease';
                element.style.opacity = '1';
            }, line.delay);
        }
    });
}

// Run terminal animation when hero is in view
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateTerminal();
            heroObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Add click handlers for guide items
document.querySelectorAll('.guide-item').forEach(guide => {
    guide.addEventListener('click', function() {
        // You can add navigation logic here
        console.log('Guide clicked:', this.querySelector('.guide-title').textContent);
    });
});

// Keyboard navigation enhancement
document.addEventListener('keydown', function(e) {
    // Press '/' to focus search (if you add one later)
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    }
});

// Add subtle parallax effect to hero background
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const parallaxElement = hero.querySelector('::after') || hero;
        const rate = scrolled * 0.3;
        
        if (parallaxElement) {
            parallaxElement.style.transform = `translateY(${rate}px)`;
        }
    }
    
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});
