# DEV://NEXUS — Portfolio & Client Services Portal

Cyber-industrial developer dashboard built with **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

**Author:** Isaac Kiplangat (alias: Sixtus)  
**Primary repository:** isaackiplangat.github.io  
**Theme:** NVIDIA Developer / Cyber-Industrial (`#09090B` base, `#76B900` green accent)

---

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Custom hex codes, glow utilities, grid background
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Combines all sections
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx   # Sticky glass nav + monogram logo + status badge
│   │   └── sections/
│   │       ├── Hero.tsx     # Terminal typing animation + dual CTAs
│   │       ├── ProjectsGrid.tsx  # Bento-box grid + tech tags + launch/GitHub icons
│   │       ├── Services.tsx      # Interactive service cards (hover lift + glow icon)
│   │       └── ContactHub.tsx    # Contact form + social buttons (incl. WhatsApp wa.me)
│   └── data/
│       └── portfolio.ts     # JSON data: profile, contact, services, projects
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started (Local Development)

### 1. Install dependencies

```bash
cd portfolio
npm install
```

This installs `next`, `react`, `react-dom`, `tailwindcss`, `framer-motion`, and `lucide-react`.

### 2. Run the dev server

```bash
npm run dev
```

Open <http://localhost:3000>.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Adding Content (No UI Code Changes)

Edit `src/data/portfolio.ts`:

- **Projects** — Add new objects to the `PROJECTS` array. Fields: `id`, `title`, `category`, `description`, `techStack`, `liveUrl` (string or `null`), `githubUrl` (string or `null`), `status` (`"Active" | "In Development" | "Prototyping" | "Completed"`), `statusColor`.
- **Services** — Add to the `SERVICES` array. Fields: `id`, `title`, `description`, `icon` (Lucide icon name), `startingRate`.
- **Contact** — Update email, phone, WhatsApp `wa.me` link, and social URLs in `CONTACT`.
- **Profile** — Update name, alias, headline, bio, status, skills in `PROFILE`.

---

## Deployment to Vercel

### Option A: GitHub Integration (Recommended)

1. Push this project to GitHub (e.g., `isaackiplangat/portfolio`):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/isaackiplangat/portfolio.git
   git push -u origin main
   ```

2. Go to <https://vercel.com> and log in.

3. Click **"Add New Project"** → **"Import Git Repository"** → select your `portfolio` repo.

4. Configure the project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./portfolio` (if the repo root contains the `portfolio/` folder) or `./` (if the repo is the portfolio itself)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

5. Click **Deploy**.

Vercel will assign a production URL (e.g., `https://portfolio.vercel.app`).

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy from the portfolio directory
cd portfolio
vercel

# Follow the prompts, then for production:
vercel --prod
```

### Option C: Deploy to `isaackiplangat.github.io`

If you want this at your primary repository `isaackiplangat.github.io`:

1. Push the built output to the `isaackiplangat.github.io` repo (GitHub Pages), or
2. Connect that repo to Vercel as a custom domain in the Vercel project settings → **Domains** → add `isaackiplangat.github.io`.

---

## Environment Variables

No required env vars for the base build. If you add a real backend for the contact form, create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://your-api.example.com
```

Then update the fetch endpoints in `ContactHub.tsx`.

---

## Tech Stack

| Layer | Package |
|-------|---------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (UI) + JetBrains Mono (labels/numbers) |
| Language | TypeScript |

---

## Scripts

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```
