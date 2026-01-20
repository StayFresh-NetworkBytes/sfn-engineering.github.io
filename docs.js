// Active TOC link on scroll
const docSections = document.querySelectorAll('.doc-section, .doc-header');
const tocLinks = document.querySelectorAll('.toc-link');

function updateActiveTocLink() {
    let currentSection = '';
    
    docSections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
    
    // Also update sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveTocLink);

// Copy code to clipboard
document.querySelectorAll('.code-copy').forEach(button => {
    button.addEventListener('click', async function() {
        const codeBlock = this.closest('.code-block');
        const code = codeBlock.querySelector('code').textContent;
        
        try {
            await navigator.clipboard.writeText(code);
            this.textContent = 'Copied!';
            this.style.background = 'var(--color-primary)';
            this.style.color = 'var(--color-bg)';
            
            setTimeout(() => {
                this.textContent = 'Copy';
                this.style.background = 'transparent';
                this.style.color = 'var(--color-text-dim)';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            this.textContent = 'Failed';
            setTimeout(() => {
                this.textContent = 'Copy';
            }, 2000);
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Header height
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add heading anchor links
document.querySelectorAll('.doc-section h2, .doc-section h3').forEach(heading => {
    if (heading.id) {
        heading.style.cursor = 'pointer';
        heading.addEventListener('click', function() {
            const url = window.location.pathname + '#' + this.id;
            window.history.pushState({}, '', url);
            
            // Visual feedback
            this.style.color = 'var(--color-primary)';
            setTimeout(() => {
                this.style.color = '';
            }, 500);
        });
    }
});

// Highlight code syntax (basic)
function highlightCode() {
    document.querySelectorAll('.code-block code').forEach(block => {
        let html = block.innerHTML;
        
        // Keywords
        html = html.replace(/\b(function|const|let|var|if|else|return|import|export|class|interface|type|async|await)\b/g, 
            '<span style="color: var(--color-accent)">$1</span>');
        
        // Strings
        html = html.replace(/(".*?"|'.*?')/g, 
            '<span style="color: var(--color-primary)">$1</span>');
        
        // Comments
        html = html.replace(/(#.*$|\/\/.*$)/gm, 
            '<span style="color: var(--color-text-dimmer)">$1</span>');
        
        block.innerHTML = html;
    });
}

// Run after page load
window.addEventListener('load', () => {
    updateActiveTocLink();
    highlightCode();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Progress indicator
function createProgressIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'reading-progress';
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--color-primary);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = (window.pageYOffset / documentHeight) * 100;
        indicator.style.width = scrolled + '%';
    });
}

createProgressIndicator();
