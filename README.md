# Infrastructure Engineering Documentation Site

A modern, terminal-inspired documentation website for infrastructure engineering topics.

## 🚀 Quick Start

1. **Upload to GitHub Pages:**
   - Push all files to your GitHub repository
   - Go to repository Settings → Pages
   - Select source: `main` branch, `/` (root)
   - Your site will be live at `https://yourusername.github.io/your-repo-name/`

2. **Local Development:**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

## 📁 File Structure

```
├── index.html          # Main landing page
├── networking.html     # Example documentation page
├── styles.css          # Main site styles
├── docs.css           # Documentation page styles
├── script.js          # Interactive features
├── docs.js            # Documentation page scripts
└── README.md          # This file
```

## 🎨 Customization Guide

### 1. Colors & Theme

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #00ff88;      /* Main accent color */
    --color-accent: #00d4ff;       /* Secondary accent */
    --color-bg: #0a0e14;          /* Background */
    /* ... modify as needed */
}
```

### 2. Site Name & Logo

In `index.html` and other pages, change:

```html
<span class="logo-text">infra.docs</span>
```

To your preferred name.

### 3. Add New Documentation Pages

Create a new HTML file (e.g., `servers.html`) based on `networking.html`:

1. Copy `networking.html`
2. Update the sidebar navigation
3. Replace content sections
4. Update breadcrumbs and page title
5. Link from `index.html`

### 4. Modify Topic Cards

In `index.html`, find the `.topics-grid` section and update:

```html
<a href="your-topic.html" class="topic-card">
    <div class="topic-icon">
        <!-- Add your SVG icon -->
    </div>
    <h3 class="topic-title">Your Topic</h3>
    <p class="topic-description">Description here</p>
    <div class="topic-meta">
        <span class="topic-count">X guides</span>
        <span class="topic-arrow">→</span>
    </div>
</a>
```

## 📝 Content Guidelines

### Writing Documentation

Use semantic HTML structure:

```html
<section class="doc-section" id="unique-id">
    <h2>Section Title</h2>
    <p>Introductory paragraph...</p>
    
    <h3>Subsection</h3>
    <p>Content...</p>
</section>
```

### Code Blocks

```html
<div class="code-block">
    <div class="code-header">
        <span class="code-lang">bash</span>
        <button class="code-copy">Copy</button>
    </div>
    <pre><code>your code here</code></pre>
</div>
```

### Info Boxes

Three types available:

```html
<!-- Information -->
<div class="info-box">
    <div class="info-box-title">
        <span class="info-icon">ℹ️</span>
        Title
    </div>
    <div class="info-box-content">
        Content here
    </div>
</div>

<!-- Warning -->
<div class="warning-box">
    <div class="warning-title">
        <span class="warning-icon">⚠️</span>
        Title
    </div>
    <div class="warning-content">
        Content here
    </div>
</div>

<!-- Tip -->
<div class="tip-box">
    <div class="tip-title">
        <span class="tip-icon">💡</span>
        Title
    </div>
    <div class="tip-content">
        Content here
    </div>
</div>
```

### Tables

```html
<div class="table-wrapper">
    <table class="doc-table">
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
        </tbody>
    </table>
</div>
```

## ✨ Features

- **Responsive Design:** Works on desktop, tablet, and mobile
- **Terminal Aesthetic:** Dark theme with green/cyan accents
- **Smooth Navigation:** Sticky headers and table of contents
- **Code Highlighting:** Copy buttons on all code blocks
- **Progressive Enhancement:** Works without JavaScript
- **Fast Loading:** No external dependencies except Google Fonts
- **SEO Friendly:** Semantic HTML structure

## 🔧 Advanced Customization

### Change Font

Replace the Google Fonts import in HTML files:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Update CSS:

```css
--font-mono: 'Your Font', monospace;
```

### Add Search Functionality

To add search, you can integrate:
- [Algolia DocSearch](https://docsearch.algolia.com/)
- [Lunr.js](https://lunrjs.com/) for static search
- Custom search with JavaScript

### Analytics

Add to the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## 📱 Mobile Optimization

The site is fully responsive with breakpoints at:
- 768px: Mobile layout
- 1200px: Tablet/hide TOC

## 🎯 Best Practices

1. **Keep URLs Clean:** Use descriptive filenames (e.g., `network-security.html`)
2. **Consistent Naming:** Use kebab-case for files, IDs
3. **Optimize Images:** If adding images, compress them first
4. **Test Locally:** Always preview changes before pushing
5. **Update Navigation:** Keep sidebar and footer links synchronized

## 🐛 Troubleshooting

### Links Not Working
- Check that all `href` paths are correct
- Use relative paths: `networking.html` not `/networking.html`

### Styling Issues
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Check CSS file paths in HTML

### Mobile Issues
- Test with browser dev tools mobile emulation
- Verify viewport meta tag is present

## 📚 Resources for Content

Great sources for infrastructure documentation:
- [DigitalOcean Tutorials](https://www.digitalocean.com/community/tutorials)
- [Arch Linux Wiki](https://wiki.archlinux.org/)
- [Red Hat Documentation](https://access.redhat.com/documentation/)
- [AWS Documentation](https://docs.aws.amazon.com/)

## 🤝 Contributing

To add new sections:
1. Create a new HTML file based on the template
2. Update navigation in all relevant files
3. Add content using provided components
4. Test across browsers
5. Push to GitHub

## 📄 License

MIT License - Feel free to use this template for your own projects!

## 🆘 Support

For issues with GitHub Pages:
- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Verify your repository settings

---

**Built with:** HTML5, CSS3, Vanilla JavaScript  
**Fonts:** JetBrains Mono, Space Mono  
**Inspired by:** Terminal interfaces and hacker aesthetics
