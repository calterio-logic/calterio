# Calterio Logic Website - Developer Setup Guide

Complete setup instructions for developers working on the Calterio Logic website.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Key Commands](#key-commands)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm**: Comes with Node.js
  - Verify installation: `npm --version`
- **Git**: For version control
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

### Recommended Tools

- **VS Code**: Recommended IDE
- **GitHub CLI**: Optional, for easier GitHub operations

---

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/calterio-logic/calterio.git
cd calterio-site
```

### 2. Install Root Dependencies

From the root directory (`calterio-site/`):

```bash
npm install
```

This installs workspace dependencies including Turbo for monorepo management.

### 3. Install App Dependencies

Navigate to the app directory and install dependencies:

```bash
cd apps/calterio-site
npm install
```

This installs all Next.js, React, Tailwind CSS, and other app-specific dependencies.

### 4. Verify Installation

Verify that Next.js is installed:

```bash
npx next --version
```

You should see the Next.js version number.

---

## Development

### Start Development Server

From `apps/calterio-site/` directory:

```bash
npm run dev
```

The development server will start at `http://localhost:3000`

### Development Features

- **Hot Reload**: Changes automatically refresh in the browser
- **TypeScript**: Type checking enabled
- **Tailwind CSS**: Utility-first styling
- **UWDS Components**: Reusable design system components

### Development Workflow

1. Make changes to files in `apps/calterio-site/src/`
2. Changes are automatically reflected in the browser
3. Check browser console for any errors
4. Use TypeScript for type safety

---

## Building

### Build for Production

From `apps/calterio-site/` directory:

```bash
npm run build
```

This will:
1. Run SEO validation
2. Build the Next.js app
3. Generate static files in `out/` directory

### Build Output

The build generates static files in:
```
apps/calterio-site/out/
```

These files are ready for deployment to GitHub Pages or any static hosting.

### Validate SEO Before Build

Run SEO validation separately:

```bash
npm run build:seo-validate
```

This checks:
- All YAML use case files have required fields
- Exactly one H1 per use case
- Meta descriptions are present
- Build fails on validation errors

### Full Validation (Including Lighthouse)

```bash
npm run build:validate
```

Note: Lighthouse CI needs to be configured separately.

---

## Deployment

### GitHub Pages Deployment

The site is automatically deployed via GitHub Actions when you push to the `main` branch.

#### Repository Information

- **GitHub Repository**: https://github.com/calterio-logic/calterio.git
- **Custom Domain**: calterio.com
- **Deployment Branch**: `gh-pages` (automatically created)

#### Initial Deployment Setup

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically by GitHub Actions)
   - Custom domain: Enter `calterio.com`

2. **Configure DNS** (for calterio.com):
   
   **Option A: A Records** (Recommended)
   - Add these A records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   
   **Option B: CNAME Record**
   - Add CNAME record: `calterio.com` → `calterio-logic.github.io`

3. **First Deployment**:
   ```bash
   # Initialize git (if not already done)
   git init
   git remote add origin https://github.com/calterio-logic/calterio.git
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit: Calterio Logic website"
   
   # Set main branch
   git branch -M main
   
   # Push to GitHub
   git push -u origin main
   ```

4. **Verify Deployment**:
   - Check GitHub Actions tab for build status
   - Site will be available at https://calterio.com after DNS propagation (can take up to 24 hours)

#### Automatic Deployment

After initial setup, every push to `main` branch automatically:
1. Runs linting
2. Validates SEO
3. Builds the Next.js app
4. Deploys to GitHub Pages

### Manual Deployment (Alternative)

If you need to deploy manually:

```bash
# Build the site
cd apps/calterio-site
npm run build

# The static files are in apps/calterio-site/out/
# Upload these files to your hosting provider
```

---

## Project Structure

```
calterio-site/
├── apps/
│   └── calterio-site/              # Main Next.js application
│       ├── src/
│       │   ├── app/               # App Router pages
│       │   │   ├── page.tsx       # Landing page
│       │   │   ├── architecture/ # Architecture page
│       │   │   ├── use-cases/     # Use case pages (dynamic)
│       │   │   ├── layout.tsx     # Root layout
│       │   │   └── globals.css    # Global styles
│       │   ├── lib/               # Utilities
│       │   │   └── yaml-loader.ts # YAML file loader
│       │   ├── types/             # TypeScript types
│       │   │   ├── seo.ts         # SEO types
│       │   │   └── components.ts  # Component types
│       │   └── ui/                # UI components
│       │       ├── Header/        # Header component
│       │       ├── Button/        # Button component
│       │       ├── Card/          # Card/SystemCard component
│       │       └── ...            # Other components
│       ├── seo/
│       │   └── usecases/          # YAML use case definitions
│       │       ├── *.yaml         # Use case files
│       ├── public/
│       │   ├── images/            # Images and logos
│       │   │   ├── logo-main.png
│       │   │   ├── logo-side.png
│       │   │   └── favicon.png
│       │   └── CNAME              # Custom domain file
│       ├── scripts/
│       │   └── validate-seo.js   # SEO validation script
│       ├── package.json
│       ├── next.config.mjs        # Next.js configuration
│       ├── tailwind.config.ts     # Tailwind configuration
│       └── tsconfig.json          # TypeScript configuration
├── packages/
│   └── uwds-core/                 # UWDS design system package
│       ├── tokens/                # Design tokens
│       │   ├── colors.ts         # Calterio brand colors
│       │   ├── typography.ts     # Typography tokens
│       │   ├── spacing.ts        # Spacing tokens
│       │   └── layout.ts         # Layout tokens
│       ├── components/            # Reusable components
│       │   ├── Hero.tsx
│       │   ├── SystemCard.tsx
│       │   ├── MetricBadge.tsx
│       │   ├── ArchitectureBlock.tsx
│       │   ├── FlowTimeline.tsx
│       │   ├── IntegrationGrid.tsx
│       │   ├── ProblemBlock.tsx
│       │   └── SEOLayout.tsx
│       ├── diagrams/              # SVG architecture diagrams
│       │   ├── FOSArchitecture.tsx
│       │   ├── LogicEditorFlow.tsx
│       │   ├── DeploymentTopology.tsx
│       │   ├── DataFlow.tsx
│       │   ├── IntegrationPoints.tsx
│       │   ├── StateMachineFlow.tsx
│       │   └── IntentBasedControl.tsx
│       ├── tailwind/
│       │   └── config.ts         # Tailwind configuration
│       └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions deployment
├── context/                      # Context documentation
├── docs/                         # Documentation
│   ├── IMPLEMENTATION.md        # Implementation plan
│   └── SETUP.md                 # This file
├── package.json                  # Root package.json (workspace)
├── turbo.json                    # Turbo configuration
└── tsconfig.json                 # Root TypeScript config
```

---

## Key Commands

### Development

```bash
# Start development server
npm run dev

# Run from app directory
cd apps/calterio-site
npm run dev
```

### Building

```bash
# Build for production
npm run build

# Validate SEO only
npm run build:seo-validate

# Full validation (SEO + Lighthouse)
npm run build:validate
```

### Code Quality

```bash
# Run linting
npm run lint

# Type checking (if using TypeScript directly)
npx tsc --noEmit
```

### Cleanup

```bash
# Remove build artifacts
npm run clean

# Or manually
rm -rf apps/calterio-site/.next
rm -rf apps/calterio-site/out
```

---

## Troubleshooting

### Issue: `'next' is not recognized`

**Solution**: Dependencies are not installed. Run:
```bash
cd apps/calterio-site
npm install
```

### Issue: Module not found errors

**Solution**: 
1. Ensure you're in the correct directory (`apps/calterio-site/`)
2. Reinstall dependencies: `npm install`
3. Check that `node_modules/` exists

### Issue: TypeScript errors

**Solution**:
1. Ensure TypeScript is installed: `npm install -D typescript`
2. Check `tsconfig.json` configuration
3. Restart your IDE/editor

### Issue: Tailwind classes not working

**Solution**:
1. Ensure Tailwind is installed: `npm install -D tailwindcss`
2. Check `tailwind.config.ts` has correct content paths
3. Verify `globals.css` imports Tailwind directives
4. Restart the dev server

### Issue: YAML files not loading

**Solution**:
1. Ensure `js-yaml` is installed: `npm install js-yaml`
2. Check YAML files are in `apps/calterio-site/seo/usecases/`
3. Verify YAML syntax is correct
4. Run SEO validation: `npm run build:seo-validate`

### Issue: Build fails with SEO validation errors

**Solution**:
1. Check the error message in terminal
2. Verify all YAML files have required fields:
   - `slug`
   - `title`
   - `h1`
   - `meta_description`
   - `industry`
   - `problem`
   - `solution`
   - `cta`
3. Ensure exactly one `h1` field per YAML file
4. Fix errors and rebuild

### Issue: GitHub Pages deployment fails

**Solution**:
1. Check GitHub Actions tab for error details
2. Verify `next.config.mjs` has `output: 'export'`
3. Ensure `CNAME` file exists in `public/` directory
4. Check that build completes successfully locally first

### Issue: Custom domain not working

**Solution**:
1. Verify DNS records are configured correctly
2. Check GitHub Pages settings has custom domain entered
3. Wait for DNS propagation (can take up to 24 hours)
4. Verify `CNAME` file is in `public/` directory and contains `calterio.com`

### Issue: Images not loading

**Solution**:
1. Ensure images are in `apps/calterio-site/public/images/`
2. Use paths starting with `/images/` (not `./images/`)
3. For static export, images must be in `public/` directory
4. Check `next.config.mjs` has `images: { unoptimized: true }`

---

## Environment Variables

Currently, no environment variables are required. If needed in the future, create:

- `.env.local` - Local development variables (not committed)
- `.env.production` - Production variables (if needed)

---

## Adding New Use Cases

To add a new use case:

1. Create a new YAML file in `apps/calterio-site/seo/usecases/`
2. Follow the schema defined in `src/types/seo.ts`
3. Required fields:
   ```yaml
   slug: your-use-case-slug
   title: Your Use Case Title
   h1: Your H1 Heading
   meta_description: Your meta description (required)
   industry: Industry Name
   problem:
     - Problem 1
     - Problem 2
   solution:
     - Solution 1
     - Solution 2
   cta: Request Architecture Walkthrough
   ```
4. Run SEO validation: `npm run build:seo-validate`
5. The page will be automatically generated at `/use-cases/your-use-case-slug`

---

## Working with UWDS Components

### Using UWDS Components

Import from the UWDS core package:

```typescript
import { Hero, SystemCard, MetricBadge } from '@calterio/uwds-core/components';
import { FOSArchitecture } from '@calterio/uwds-core/diagrams';
```

### Using Design Tokens

```typescript
import { colors } from '@calterio/uwds-core/tokens';

// Access Calterio colors
const orange = colors.calterio.orange; // #F28B24
const red = colors.calterio.red;       // #E10209
const blue = colors.calterio.darkBlue;  // #131A47
```

### Tailwind Classes

Use Tailwind utility classes with Calterio colors:

```tsx
<div className="bg-calterio-orange text-background">
  Calterio Orange Background
</div>
```

Available color utilities:
- `text-calterio-orange`, `bg-calterio-orange`, `border-calterio-orange`
- `text-calterio-red`, `bg-calterio-red`, `border-calterio-red`
- `text-calterio-dark-blue`, `bg-calterio-dark-blue`, `border-calterio-dark-blue`

---

## Git Workflow

### Daily Development

```bash
# Pull latest changes
git pull origin main

# Create a new branch for your work
git checkout -b feature/your-feature-name

# Make your changes
# ... edit files ...

# Stage changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to remote
git push origin feature/your-feature-name

# Create pull request on GitHub
```

### Before Pushing

Always run these checks:

```bash
# Lint your code
npm run lint

# Validate SEO (if you modified YAML files)
npm run build:seo-validate

# Test build locally
npm run build
```

---

## Performance Targets

- **Load Time**: <300ms
- **Lighthouse Score**: ≥90 (all categories)
- **SEO**: Topical authority, not blog-style content

---

## Support

For issues or questions:

1. Check this SETUP.md file
2. Review `docs/IMPLEMENTATION.md` for architecture details
3. Check GitHub Issues
4. Contact the development team

---

## Quick Start Checklist

- [ ] Node.js 20+ installed
- [ ] Git installed
- [ ] Repository cloned
- [ ] Root dependencies installed (`npm install`)
- [ ] App dependencies installed (`cd apps/calterio-site && npm install`)
- [ ] Development server runs (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] SEO validation passes (`npm run build:seo-validate`)

---

**Last Updated**: 2025-01-XX  
**Version**: 1.0.0

