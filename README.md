# Calterio Logic Website

Enterprise website for Calterio Logic - Factory Operating System with Visual PLC Programming.

## Repository

- **GitHub**: https://github.com/calterio-logic/calterio.git
- **Website**: https://calterio-logic.github.io/calterio/ (or https://calterio-logic.github.io/ if organization page)

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

For detailed setup instructions, see [docs/SETUP.md](docs/SETUP.md)

### Quick Start

```bash
# Install dependencies
npm install
cd apps/calterio-site
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000

### Build

```bash
# Build for production
npm run build

# Validate SEO before build
npm run build:seo-validate
```

### Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

**GitHub Pages URL**: 
- If project page: `https://calterio-logic.github.io/calterio/`
- If organization page: `https://calterio-logic.github.io/`

For complete deployment instructions, see [docs/SETUP.md](docs/SETUP.md)

## Design System

This project uses the Unified Web Design System (UWDS) with Calterio brand colors:

- **Primary Orange**: #F28B24
- **Accent Red**: #E10209
- **Dark Blue**: #131A47

## Programmatic SEO

Use cases are defined in YAML files in `apps/calterio-site/seo/usecases/`. Pages are automatically generated at build time with full SEO optimization.

## License

Private - Calterio Logic

