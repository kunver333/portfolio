# Kunver Sudhanshu — Portfolio

A production-grade personal portfolio built with React.js. Features a dark industrial aesthetic, smooth scroll animations, typewriter effect, responsive design, and interactive sections for Experience, Projects, Skills, and Contact.

---

## 🚀 Getting Started in VS Code

### Prerequisites
- **Node.js** v16+ — Download from [nodejs.org](https://nodejs.org)
- **VS Code** — Download from [code.visualstudio.com](https://code.visualstudio.com)
- **Git** (optional, for version control)

### Step 1 — Open in VS Code
1. Extract the portfolio folder (if zipped)
2. Open VS Code
3. Go to **File → Open Folder** → select the `portfolio` folder

### Step 2 — Open the Terminal
In VS Code, press `` Ctrl + ` `` (backtick) to open the integrated terminal.

### Step 3 — Install Dependencies
```bash
npm install
```
This installs all packages listed in `package.json`. Takes 1–2 minutes.

### Step 4 — Start the Dev Server
```bash
npm start
```
Your browser opens automatically at **http://localhost:3000** 🎉

### Step 5 — Build for Production
When you're ready to deploy:
```bash
npm run build
```
This creates an optimized `build/` folder.

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

## ✏️ Customizing Content

**All your content lives in `src/data.js`** — it's the single source of truth.

To update anything:
- Change job title, email, links → edit the top of `data.js`
- Add a new job → add an object to the `experience` array
- Update project details → edit the `projects` array
- Add a skill → add it to the relevant category in `skills`

### Adding a Profile Photo
1. Place your photo in `public/` (e.g. `public/photo.jpg`)
2. In `About.js`, add this inside `.about__card-col`:
```jsx
<img src="/photo.jpg" alt="Kunver Sudhanshu" className="about__photo" />
```
3. Add this CSS to `About.css`:
```css
.about__photo {
  width: 100%;
  border-radius: var(--radius-lg);
  border: 2px solid var(--border);
  margin-bottom: 1.5rem;
}
```

---

## 🌐 Where to Host (Free Options)

### Option 1: Vercel ⭐ Recommended
The easiest, fastest option with automatic HTTPS and CI/CD.

```bash
# Install Vercel CLI
npm install -g vercel

# From the portfolio folder
vercel

# Follow the prompts — your site is live in ~30 seconds
```

Or use the web interface:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Click **Add New Project** → import your repo
4. Click **Deploy** — done!

Your URL: `https://kunver-sudhanshu.vercel.app` (customizable)

---

### Option 2: Netlify
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → drag the `build/` folder into the deploy area
3. Done! Or use Git integration for auto-deploy on every push.

---

### Option 3: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json "scripts":
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Add this line to the top of package.json:
"homepage": "https://yourusername.github.io/portfolio"

# Deploy
npm run deploy
```
Your URL: `https://kunver333.github.io/portfolio`

---

### Option 4: Custom Domain
Any of the above hosts let you connect a custom domain for free. Buy a `.dev` or `.me` domain from Namecheap (~$10/yr) and point it to Vercel or Netlify.

**Recommended domain:** `kunversudhanshu.dev` or `kunver.dev`

---

## 🔧 Recommended VS Code Extensions

Install these for a better dev experience:
- **ES7+ React/Redux/React-Native snippets** — fast component boilerplate
- **Prettier - Code formatter** — auto-format on save
- **Auto Rename Tag** — rename JSX tags together
- **CSS Peek** — peek into CSS from className

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
