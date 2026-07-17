# Kunver Sudhanshu — Portfolio

A production-grade personal portfolio built with React.js. Features a dark industrial aesthetic, smooth scroll animations, typewriter effect, responsive design, and interactive sections for Experience, Projects, Skills, and Contact.

---


## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html              # HTML shell with Google Fonts
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css    # Fixed navigation with active-section tracking
│   │   ├── Hero.js / .css      # Landing section with typewriter + stats
│   │   ├── About.js / .css     # Bio, code card, education
│   │   ├── Experience.js / .css # Tabbed work history with metrics
│   │   ├── Projects.js / .css  # Project cards with expandable detail
│   │   ├── Skills.js / .css    # Skill categories with animated bars
│   │   ├── Contact.js / .css   # Contact links + copy email
│   │   ├── Footer.js / .css    # Footer
│   │   └── Section.css         # Shared section styles
│   ├── hooks/
│   │   └── useScrollReveal.js  # IntersectionObserver for animations
│   ├── data.js                 # ALL your content — edit this file
│   ├── App.js                  # Root component
│   ├── App.css
│   └── index.css               # Global styles + CSS variables
└── package.json
```

---


## 📱 Features

- ✅ Responsive — works on all screen sizes
- ✅ Smooth scroll animations (IntersectionObserver)
- ✅ Typewriter effect with multiple role titles
- ✅ Animated skill bars
- ✅ Tabbed experience section
- ✅ Expandable project details
- ✅ Copy-to-clipboard email button
- ✅ Active section tracking in navbar
- ✅ Industrial dark theme with amber accents
- ✅ Accessible (ARIA labels, semantic HTML)

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | 18.2.0 | UI library |
| react-dom | 18.2.0 | DOM rendering |
| react-scripts | 5.0.1 | CRA toolchain (build, dev server) |

No external UI libraries — 100% custom CSS.

---

Built by Kunver Sudhanshu · [LinkedIn](https://linkedin.com/in/kunver-sudhanshu) · [GitHub](https://github.com/kunver333)
