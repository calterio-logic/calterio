# Calterio Logic Website

Enterprise website for Calterio Logic - Factory Operating System with Visual PLC Programming.

## Repository

- **GitHub**: https://github.com/calterio-logic/calterio.git
- **Website**: https://calterio.com

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + SCSS
- **Design System**: UWDS (Unified Web Design System)
- **Deployment**: GitHub Pages (Static Export)

## Project Structure

```
calterio-site/
├── apps/
│   └── calterio-site/          # Main Next.js application
│       ├── src/
│       │   └── app/            # App Router pages
│       ├── seo/
│       │   └── usecases/      # YAML use case definitions
│       └── public/            # Static assets
├── packages/
│   └── uwds-core/             # UWDS design system package
│       ├── tokens/            # Design tokens
│       ├── components/        # Reusable components
│       ├── diagrams/          # SVG architecture diagrams
│       └── tailwind/          # Tailwind configuration
└── .github/
    └── workflows/             # CI/CD workflows
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Install dependencies
npm install

# Navigate to app directory
cd apps/calterio-site

# Install app dependencies
npm install
```

### Development

```bash
# Run development server
cd apps/calterio-site
npm run dev
```

Visit http://localhost:3000

### Build

```bash
# Build for production
cd apps/calterio-site
npm run build

# Validate SEO before build
npm run build:seo-validate
```

### Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

**Custom Domain**: calterio.com

## Design System

This project uses the Unified Web Design System (UWDS) with Calterio brand colors:

- **Primary Orange**: #F28B24
- **Accent Red**: #E10209
- **Dark Blue**: #131A47

## Programmatic SEO

Use cases are defined in YAML files in `apps/calterio-site/seo/usecases/`. Pages are automatically generated at build time with full SEO optimization.

## License

Private - Calterio Logic

