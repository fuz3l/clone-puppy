# TeddyPups 🐾 — Premium Pet Adoption Platform

A warm, friendly, and accessible pet adoption web application built with **Next.js (App Router)**, **plain JavaScript (ES6+ / JSX)**, and **Tailwind CSS**.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: JavaScript (ES6+ / JSX with JSDoc typing)
- **Styling**: Tailwind CSS v4 with custom CSS variable design tokens
- **Typography**: Google Fonts via `next/font/google` (`Fredoka`, `Plus Jakarta Sans`, `Caveat`)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) with `prefers-reduced-motion` compliance
- **Icons**: Lucide React
- **Utilities**: `clsx`

---

## 🎨 Design Tokens & Palette

The visual design system is warm, friendly, and elevated, inspired by modern pet-adoption and care brands:

| Token | CSS Variable | Hex | Purpose |
| :--- | :--- | :--- | :--- |
| **Cream** | `--cream` | `#FAF6F0` | Warm, calming page background |
| **Milk** | `--milk` | `#FFFFFF` | Elevated card surfaces and interactive containers |
| **Cocoa** | `--cocoa` | `#2E221B` | High-contrast, friendly dark text & accents |
| **Cocoa Muted** | `--cocoa-muted` | `#6B5B53` | Secondary text, captions, and metadata |
| **Apricot** | `--apricot` | `#E67A47` | Primary brand accent for CTAs and highlights |
| **Apricot Light**| `--apricot-light` | `#FCEEE6` | Badge backgrounds and accessible text selection |
| **Sand** | `--sand` | `#E7DDD2` | Clean structural borders and dividers |
| **Sand Light** | `--sand-light` | `#F4EFEB` | Subtle pill/tag backgrounds and input surfaces |

### Typography Tokens
- **Display Heading (`font-display`)**: `Fredoka` (Rounded, playful, welcoming)
- **Body Text (`font-body`)**: `Plus Jakarta Sans` (Clean, highly legible geometric sans)
- **Accent Script (`font-script`)**: `Caveat` (Warm, personal handwritten touches)

---

## 🚀 Setup & Local Development

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm / yarn

### Installation
```bash
# Clone the repository (or navigate to project directory)
cd teddypups

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 📁 Folder Structure

```text
teddypups/
├── public/
│   └── images/                     # Static imagery and SVG placeholders
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css             # Design tokens, CSS reset, focus outline & utilities
│   │   ├── layout.js               # Shell (Skip link, fixed header, main, footer, mobile bar, Lenis)
│   │   └── page.js                 # Foundation showcase preview page
│   ├── components/
│   │   ├── layout/
│   │   │   └── SmoothScroll.jsx    # Client component wrapping Lenis smooth scrolling
│   │   ├── sections/               # Page section components (Hero, Adoption, etc. - Phase 2)
│   │   └── ui/
│   │       ├── Button.jsx          # Button primitive (primary/secondary/ghost, sm/md/lg)
│   │       ├── Container.jsx       # Reusable layout container (max 1200px + gutters)
│   │       └── SectionHeading.jsx  # Reusable section heading (eyebrow, title, subtitle)
│   ├── data/
│   │   └── puppies.js              # Puppy data model with JSDoc @typedef and sample entries
│   └── lib/
│       └── utils.js                # Shared utility helpers (e.g. cn with clsx)
├── jsconfig.json                   # Path alias mappings (@/* -> ./src/*)
├── next.config.mjs                 # Next.js & Turbopack configuration
├── package.json
└── README.md
```

---

## ♿ Accessibility & Motion

- **Skip Link**: Top-level accessible skip-to-content anchor for screen reader and keyboard navigators.
- **Focus Rings**: High-contrast, customized `:focus-visible` ring using `--apricot` accent.
- **Prefers Reduced Motion**: Lenis scrolling gracefully deactivates and all animations collapse to `0.01ms` for users with motion sensitivity.
- **Semantic Structure**: Proper landmark roles (`banner`, `main`, `contentinfo`, `toolbar`) and heading levels.

---

## 📸 Image Credits & Sources

All photography utilized in puppy sample data and placeholders are sourced under free-use, permissive licenses:
- Unsplash: Free photography platform ([unsplash.com/license](https://unsplash.com/license))
  - Milo (Teddy Maltipoo): Unsplash pet collection
  - Rosie (Mini Cavapoo): Unsplash pet collection
  - Biscuit (Toy Poodle): Unsplash pet collection
- SVG placeholders generated in-repo under `/public/images/puppy-placeholder.svg`
