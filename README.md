# Akshra Das — Developer Portfolio

A sleek, responsive, dark futuristic personal portfolio website built for **Akshra Das**, an aspiring full-stack developer and student. Showcases foundational skills in Python, structured CSV data management, HTML/CSS frontend development, and SQL.

Designed with a tailored dark purple visual identity (`#08070D`, `#100D18`, `#15111F`, with vibrant purple & violet accents `#A855F7`, `#C084FC`).

---

## 🌟 Features

- **Personal Profile & Hero Section**: Understated status indicator (*"OPEN TO LEARNING & OPPORTUNITIES"*), clean typography, and an interactive developer code console.
- **Interactive About Me**: 2-column layout with student background from Carmel Convent School, Sector 7D, Faridabad, and an interactive terminal panel with copyable outputs.
- **Categorized Skills Toolkit**: Categorized into Web Development (HTML, CSS), Programming (Python), Data Analysis (NumPy, Pandas, Matplotlib), and Databases (SQL, CSV Handling). No misleading fake percentage bars.
- **Featured Projects with Interactive Previews**:
  - **Skyflow — Airline Management Software**: Python & CSV-powered flight management system with an interactive route & passenger simulator, CSV flat-file inspector, and source code viewer.
  - **Festival Website**: Responsive HTML & CSS frontend project exploring layouts, ambient lighting, and semantic structure with a live component preview.
- **Academic Learning Journey**: Education timeline detailing school curriculum (Physics, Chemistry, Biology, English, and Informatics Practices).
- **Accessible Contact Section**: Contact form with inline validation, direct copyable details, and a reliable email client (`mailto:`) fallback for static deployment.
- **Interactive Resume Modal**: Overview of qualifications with one-click `.txt` summary download and simple instructions to add a custom PDF resume.
- **SEO & Social Sharing**: Pre-configured OpenGraph metadata, Twitter cards, and Schema.org `Person` JSON-LD structured data.

---

## 📂 Project Architecture

```
├── index.html                   # HTML entry point with SEO, OG tags & JSON-LD
├── metadata.json                # AI Studio application metadata
├── package.json                 # Project dependencies & npm scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── src/
│   ├── main.tsx                 # Application mount point
│   ├── App.tsx                  # Root layout & modal management
│   ├── index.css                # Tailwind styling, Google Fonts, glowing utilities
│   ├── data/
│   │   └── portfolioData.ts     # Centralized, easily editable portfolio configuration
│   └── components/
│       ├── Navbar.tsx           # Sticky navigation with 3-zone Top Bar Contract
│       ├── Hero.tsx             # Hero section with interactive engineering console
│       ├── About.tsx            # Biography & interactive terminal
│       ├── Skills.tsx           # Categorized skill cards with topic breakdowns
│       ├── Projects.tsx         # Signature project cards (Skyflow & Festival)
│       ├── Education.tsx        # Carmel Convent School & academic subjects
│       ├── Contact.tsx          # Contact form with validation & mailto fallback
│       ├── Footer.tsx           # Clean footer with dynamic year
│       ├── SkyflowModal.tsx     # Interactive Skyflow flight simulator & CSV viewer
│       ├── FestivalModal.tsx    # Live festival website preview & HTML/CSS viewer
│       ├── GitHubNoticeModal.tsx# Source code guidance modal
│       └── ResumeModal.tsx      # Resume summary view & download
```

---

## 🛠️ Personalizing Your Portfolio

All your personal details, project descriptions, skills, and links are kept in a single configuration file:
👉 **`src/data/portfolioData.ts`**

### 1. Update Social & Contact Links
In `src/data/portfolioData.ts`, find the `contact` block:
```typescript
contact: {
  email: "akshrar7@gmail.com",                  // Your email
  githubPlaceholder: "https://github.com/your-username", // Your GitHub profile
  linkedinPlaceholder: "https://www.linkedin.com/in/your-username", // Your LinkedIn
  location: "Faridabad, Haryana, India",
  availability: "Available for learning, student internships, and developer collaborations",
  resumePath: "/resume.pdf"
}
```

### 2. Update Project Repositories
Update the `githubUrl` under each project in `portfolioData.ts`:
```typescript
links: {
  liveDemoUrl: "#skyflow-demo",
  githubUrl: "https://github.com/your-username/skyflow-airline-management"
}
```

### 3. Add Your Resume PDF
To enable direct 1-click download of your PDF resume:
1. Save your resume file as `resume.pdf`
2. Place it in the `public/` directory (e.g. `public/resume.pdf`)
3. The "Resume" button will immediately link to your official PDF!

---

## 🚀 Local Development Commands

To run this website locally on your computer:

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server (with hot reload)
npm run dev

# 3. Open http://localhost:3000 in your browser
```

---

## 📦 Production Build & Testing

```bash
# Build the production-ready static files into the /dist directory
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Free Static Hosting & Deployment

This portfolio is a completely static, high-performance web application that requires no database or server runtime to host. You can deploy it for free in minutes:

### Option A: Vercel (Recommended, 2 Minutes)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) with GitHub.
3. Click **Add New Project** and select your portfolio repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your portfolio will receive a custom `.vercel.app` URL and automatic HTTPS.

### Option B: Netlify
1. Sign in to [Netlify](https://netlify.com) with GitHub.
2. Click **Add new site** > **Import an existing project**.
3. Select your repository. Build settings will auto-populate (`Build command: npm run build`, `Publish directory: dist`).
4. Click **Deploy**.

### Option C: GitHub Pages
1. In `vite.config.ts`, ensure `base: './'` is set if publishing to a subdirectory.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Choose **GitHub Actions** as the source and choose the standard Vite / Static HTML workflow.

---

## ✅ Deployment Checklist

- [x] Verified build compilation without any TypeScript or bundling errors
- [x] Tested responsive layout across mobile, tablet, and desktop viewports
- [x] Verified keyboard navigation and visible focus rings
- [x] Checked that contact form provides instant validation and email fallback
- [x] Tested interactive project simulators (Skyflow CSV search & Festival live preview)
- [x] Replaced placeholders with real profile URLs in `src/data/portfolioData.ts`
