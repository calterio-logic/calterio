# Calterio Logic Website Implementation Plan

## Overview

Transform the Next.js template into a Calterio Logic product site following UWDS principles, using Calterio brand colors (F28B24, E10209, 131A47), keeping existing components, and creating sophisticated architecture diagrams.

**Status**: 🟡 In Progress  
**Last Updated**: 2025-01-XX

**Progress**: Phases 1-12 Completed ✅

## Deployment Instructions

### Initial Setup

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git remote add origin https://github.com/calterio-logic/calterio.git
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created by GitHub Actions)
   - Custom domain: `calterio.com` (enter in GitHub Pages settings)

3. **Configure DNS** (for calterio.com):
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: `calterio.com` → `calterio-logic.github.io`

4. **First Deployment**:
   ```bash
   git add .
   git commit -m "Initial commit: Calterio Logic website"
   git branch -M main
   git push -u origin main
   ```

5. **Verify Deployment**:
   - GitHub Actions will automatically build and deploy
   - Check Actions tab for build status
   - Site will be available at https://calterio.com after DNS propagation

### Repository Information

- **GitHub Repository**: https://github.com/calterio-logic/calterio.git
- **Custom Domain**: calterio.com
- **Deployment**: Automatic via GitHub Actions on push to `main` branch

---

## Branding & Design Tokens

### Calterio Color Palette

- **Primary Orange**: `#F28B24` (primary CTA, highlights)
- **Accent Red**: `#E10209` (alerts, critical states)
- **Dark Blue**: `#131A47` (backgrounds, depth)
- **Dark Theme Base**: `#0B0F14` (background), `#121826` (surface), `#E5E7EB` (text)

**Status**: ✅ Defined

### Logo Assets

Copy from `D:\cursor-workspace\calterio-fos\frontend\src\images\`:
- `calterio-main-logo.png` → `apps/calterio-site/public/images/logo-main.png`
- `calterio-side-by-side-logo.png` → `apps/calterio-site/public/images/logo-side.png`
- `calterio-site-icon.png` → `apps/calterio-site/public/images/favicon.png`

**Status**: ⏳ Pending

---

## Phase 1: Monorepo Restructuring

### 1.1 Create Monorepo Structure

- [x] Create `packages/uwds-core/` directory structure
- [x] Move current app to `apps/calterio-site/`
- [x] Create root `package.json` with workspace configuration
- [x] Set up `turbo.json` for build orchestration

**Status**: ✅ Completed

### 1.2 Package Configuration

- [x] Create `packages/uwds-core/package.json` with proper exports
- [x] Update `apps/calterio-site/package.json` to depend on `uwds-core`
- [x] Configure TypeScript project references

**Status**: ✅ Completed

---

## Phase 2: UWDS Core Package with Calterio Branding

### 2.1 Design Tokens (`packages/uwds-core/tokens/colors.ts`)

```typescript
export const colors = {
  // Calterio Brand Colors
  calterio: {
    orange: "#F28B24",    // Primary accent
    red: "#E10209",        // Critical/accent
    darkBlue: "#131A47",   // Depth/backgrounds
  },
  // Dark Theme Base
  background: "#0B0F14",
  surface: "#121826",
  text: {
    primary: "#E5E7EB",
    secondary: "#9CA3AF",
  },
  // Semantic colors using Calterio palette
  accent: {
    primary: "#F28B24",    // Orange for CTAs
    secondary: "#E10209",  // Red for alerts
    tertiary: "#131A47",   // Blue for depth
  }
}
```

**Status**: ✅ Completed

### 2.2 Typography Tokens (`packages/uwds-core/tokens/typography.ts`)

- Inter for headings and body (SemiBold for headings, Regular for body)
- JetBrains Mono for code, metrics, and KPIs
- Tight line-height, large headings

**Status**: ✅ Completed

### 2.3 Tailwind Configuration (`packages/uwds-core/tailwind/config.ts`)

- [x] Extend Tailwind with Calterio brand colors
- [x] Configure dark mode as default
- [x] Set up Inter and JetBrains Mono fonts
- [x] Configure spacing, layout tokens

**Status**: ✅ Completed

---

## Phase 3: Component Adaptation Strategy

### 3.1 Keep & Adapt Existing Components

**Header Component** (`src/app/ui/Header/index.jsx`)
- [x] Replace logo with Calterio logo
- [x] Update navigation for Calterio pages
- [x] Apply Calterio color scheme
- [x] Keep responsive menu structure

**Button Component** (`src/app/ui/Button/index.jsx`)
- [x] Adapt to use Calterio orange (#F28B24) for primary
- [x] Keep icon support, update styling to UWDS
- [x] Add variant for secondary (red accent)

**Card Component** (`src/app/ui/Card/index.jsx`)
- [x] Transform to SystemCard for features/capabilities
- [x] Remove image dependency, add icon support
- [x] Apply Calterio colors and UWDS styling

**SectionHeading Component** (`src/app/ui/SectionHeading/index.jsx`)
- [x] Keep structure, update typography to Inter
- [x] Apply Calterio accent colors
- [x] Maintain subtitle/title pattern

**Spacing Component** (`src/app/ui/Spacing/index.jsx`)
- [x] Keep as-is (already utility-based)

**Div Component** (`src/app/ui/Div/index.jsx`)
- [x] Keep as-is (wrapper utility)

**Status**: ✅ Completed

### 3.2 Create New UWDS Components

New components in `packages/uwds-core/components/`:

- [x] **Hero.tsx** - System-focused hero
  - Headline: System capability
  - Subtext: Operational impact
  - Primary CTA (orange) & Secondary CTA
  - Architecture visual slot
  - No stock images, show system diagrams

- [x] **SystemCard.tsx** - Feature/capability cards
  - Title, description, icon
  - Calterio accent color highlights
  - No gradients, clean design

- [x] **MetricBadge.tsx** - KPI/metrics display
  - Large numbers (JetBrains Mono)
  - Labels
  - Calterio accent for emphasis

- [x] **ArchitectureBlock.tsx** - Architecture diagram container
  - Title, description
  - SVG diagram slot
  - Zoomable support
  - Highlight capability

- [x] **FlowTimeline.tsx** - Process workflow
  - Step-by-step visualization
  - Signal → Decision → Execution flow
  - Calterio colors for states

- [x] **IntegrationGrid.tsx** - ERP/WMS/MES integrations
  - Grid of integration logos/icons
  - Protocol labels
  - Calterio accent highlights

- [x] **ProblemBlock.tsx** - Problem/solution sections
  - Problem list
  - Solution list
  - Visual separation with Calterio colors

- [x] **SEOLayout.tsx** - SEO-optimized layout
  - Schema.org JSON-LD generation
  - Meta tags management
  - Exactly one H1 enforcement
  - Build-time validation

**Status**: ✅ Completed

---

## Phase 4: TypeScript Migration

### 4.1 TypeScript Configuration

- [x] Create `tsconfig.json` at root and in each package
- [x] Configure path aliases (`@/`, `@uwds/`)
- [x] Set strict mode

**Status**: ✅ Completed

### 4.2 Gradual File Conversion

- [x] Convert new components to `.tsx`
- [x] Convert existing components incrementally
- [x] Add TypeScript types for YAML schemas
- [x] Type all component props

**Status**: ✅ Completed

---

## Phase 5: Tailwind CSS Integration

### 5.1 Hybrid Approach (Keep SCSS Initially)

- [x] Keep existing SCSS for current components
- [x] Use Tailwind for new UWDS components
- [x] Gradually migrate SCSS to Tailwind utilities
- [x] Configure Tailwind to work alongside SCSS

**Status**: ✅ Completed

### 5.2 Tailwind Setup

- [x] Install Tailwind CSS
- [x] Configure to use UWDS tokens
- [x] Create utility classes
- [x] Set up dark mode

**Status**: ✅ Completed

---

## Phase 6: Sophisticated SVG Architecture Diagrams

### 6.1 Diagram Components (`packages/uwds-core/diagrams/`)

- [x] **FOSArchitecture.tsx** - FOS Logical Architecture
  - Show FOS components: UNS Engine, Event Broker, Workflow Engine, Digital Twin
  - Edge Runtime connection
  - Cloud/Edge separation
  - Use Calterio colors: Orange for core systems, Red for critical paths, Blue for data flows
  - Interactive: highlight components on hover
  - Zoomable with pan/zoom controls

- [x] **LogicEditorFlow.tsx** - Logic Editor Workflow
  - Visual programming flow: Ladder Logic → Structured Text → Simulation → Deployment
  - Show editor interface mockup
  - Real-time simulation visualization
  - Export/import paths
  - Calterio orange for active states

- [x] **DeploymentTopology.tsx** - Cloud/Edge Deployment
  - Multi-plant architecture
  - Edge nodes per plant/line
  - Cloud FOS orchestration
  - Network connections
  - High availability clusters
  - Use Calterio dark blue for infrastructure, orange for active nodes

- [x] **DataFlow.tsx** - UNS Data Flow
  - Hierarchical namespace visualization: `factory/plant/line/cell/machine/state`
  - Event flow: Device → Adapter → FOS → UNS → MOS
  - Time-series data paths
  - Real-time vs batch flows
  - Calterio colors: Orange for real-time, Blue for storage, Red for critical events

- [x] **IntegrationPoints.tsx** - System Integrations
  - Show integration gateway
  - ERP, PLM, CMMS, QMS connections
  - Protocol abstraction layer
  - Bidirectional sync visualization
  - Calterio orange for active integrations

- [x] **StateMachineFlow.tsx** - Machine State Transitions
  - Canonical states: IDLE → READY → RUNNING → PAUSED → FAULTED
  - Guard conditions visualization
  - Safety interlock points
  - Transition rules
  - Calterio red for faulted states, orange for active

- [x] **IntentBasedControl.tsx** - Intent API Flow
  - High-level intent → Validation → Execution → Confirmation
  - Safety gate checks
  - State machine compilation
  - Edge execution visualization
  - Calterio colors for each stage

**Status**: ✅ Completed

### 6.2 Diagram Features

- [x] SVG-only (no raster)
- [x] Interactive: hover highlights, click to zoom
- [x] Responsive: scale on mobile
- [x] Accessible: ARIA labels, keyboard navigation
- [x] Animations: subtle transitions (150-250ms)
- [x] Export: PNG/SVG download option (via browser)

**Status**: ✅ Completed

---

## Phase 7: Calterio Landing Page Transformation

### 7.1 Homepage (`apps/calterio-site/src/app/page.tsx`)

Transform to Calterio Logic focus:

**Hero Section**
- [x] Headline: "Calterio Logic: Visual PLC Programming for Modern Factories"
- [x] Subtext: "Factory Operating System with deterministic control, unified data management, and intelligent analytics"
- [x] Primary CTA: "Request Architecture Walkthrough" (orange)
- [x] Secondary CTA: "Explore Platform" (outline)
- [x] Architecture visual: FOS + Logic Editor diagram (sophisticated SVG)

**What Calterio Orchestrates**
- [x] SystemCard grid showing:
  - Calterio FOS (orchestration platform)
  - Logic Editor (visual PLC programming)
  - Edge Runtime (deterministic execution)
  - UNS Engine (unified namespace)
  - Digital Twin (simulation)
  - Factory Intelligence (AI/ML)

**Logic Editor Features**
- [x] Ladder Logic Editor visualization
- [x] Structured Text Editor mockup
- [x] Real-time Simulation demo
- [x] Export/Import capabilities
- [x] Use FlowTimeline component

**Use Cases Section** (Programmatic)
- [x] Grid of use case cards generated from YAML
- [x] Industries: Agro, Automotive, Electronics, Pharma, Chemical, Textile, Food & Beverage, Aerospace
- [x] Each card links to detailed use case page

**Metrics Section**
- [x] MetricBadge components:
  - "<100ms" - Latency
  - "50K events/sec" - Throughput
  - "99.9%" - Uptime
  - "30-40%" - Downtime reduction
  - "25-30%" - Cost reduction

**Integrations Grid**
- [x] IntegrationGrid showing:
  - PLCs: Siemens, Rockwell, Beckhoff, Mitsubishi
  - Robots: ABB, KUKA, Fanuc
  - Protocols: OPC UA, Modbus, Profinet, EtherCAT, MQTT
  - Enterprise: ERP, PLM, CMMS, QMS

**Architecture Preview**
- [x] ArchitectureBlock with FOSArchitecture diagram
- [x] Link to full architecture page

**Demo Section**
- [x] Embedded demo or screenshot
- [x] CTA to request live demo

**Status**: ✅ Completed

---

## Phase 8: Architecture Page

### 8.1 Architecture Page (`apps/calterio-site/src/app/architecture/page.tsx`)

Mandatory sections:

- [x] **Logical Architecture**
  - FOSArchitecture diagram (sophisticated, interactive)
  - Component descriptions
  - Data flow annotations

- [x] **Deployment Topology**
  - DeploymentTopology diagram
  - Cloud/Edge architecture
  - High availability setup

- [x] **Data Flow**
  - DataFlow diagram
  - UNS hierarchy visualization
  - Event flow paths

- [x] **Integration Points**
  - IntegrationPoints diagram
  - Protocol abstraction
  - Enterprise system connections

- [x] **Security & Governance**
  - Security architecture diagram
  - Zero-trust model visualization
  - Compliance standards (IEC 61508, ISO 13849, IEC 62443)

**Status**: ✅ Completed

---

## Phase 9: Programmatic SEO System

### 9.1 YAML Schema (`apps/calterio-site/seo/usecases/*.yaml`)

```yaml
slug: predictive-maintenance-pharmaceutical
title: Predictive Maintenance for Pharmaceutical Manufacturing
h1: Predictive Maintenance Architecture for Pharma Plants
meta_description: ML-powered predictive maintenance reducing downtime by 30-40% in pharmaceutical manufacturing
industry: Pharmaceutical
problem:
  - Unplanned equipment failures
  - Compliance risks
  - Production stoppages
solution:
  - ML models for failure prediction
  - Sensor fusion and monitoring
  - Predictive alerts and scheduling
architecture_ref: pm-arch-v1
workflow:
  - Sensor data collection
  - Feature engineering
  - ML model inference
  - Alert generation
  - Maintenance scheduling
kpis:
  - 30-40% downtime reduction
  - 25-30% maintenance cost reduction
  - Extended equipment lifespan
integrations:
  - CMMS systems
  - Sensor networks
  - Maintenance scheduling
cta: Request Architecture Walkthrough
related_use_cases:
  - quality-control-pharmaceutical
  - energy-optimization-pharmaceutical
```

**Status**: ✅ Completed

### 9.2 Dynamic Route (`apps/calterio-site/src/app/use-cases/[slug]/page.tsx`)

- [x] Generate pages at build time with SSG
- [x] Use SEOLayout component
- [x] Enforce exactly one H1
- [x] Generate schema.org JSON-LD (SoftwareApplication, HowTo)
- [x] Build fails if meta description missing
- [x] Internal linking to related use cases

**Status**: ✅ Completed

### 9.3 Initial Use Case YAML Files

Create YAML files for:
- [x] `predictive-maintenance-pharmaceutical.yaml`
- [x] `predictive-maintenance-automotive.yaml`
- [x] `quality-control-pharmaceutical.yaml`
- [x] `energy-optimization-textile.yaml`
- [x] `production-optimization-electronics.yaml`
- [x] `multi-vendor-integration-pharmaceutical.yaml`
- [x] `operator-training-chemical.yaml`
- [x] `traceability-food-beverage.yaml`

**Status**: ✅ Completed

---

## Phase 10: Next.js Configuration for GitHub Pages

### 10.1 Next.js Config (`apps/calterio-site/next.config.mjs`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '', // Empty for root domain (calterio.com)
  assetPrefix: '', // Empty for root domain
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
```

**Status**: ✅ Completed

### 10.2 Custom Domain Setup

- [x] Configure for `calterio.com` domain
- [x] Set up CNAME file in `public/` directory
- [x] Configure GitHub Pages custom domain settings (via GitHub Actions)
- [x] Ensure HTTPS is enabled (GitHub Pages default)

**Status**: ✅ Completed

---

## Phase 11: Build System & Validation

### 11.1 Build Scripts (`apps/calterio-site/package.json`)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "npm run build:seo-validate && next build",
    "build:validate": "npm run build:seo-validate && npm run build:lighthouse",
    "build:seo-validate": "node scripts/validate-seo.js",
    "build:lighthouse": "echo 'Lighthouse CI not configured yet'",
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .next out"
  }
}
```

**Status**: ✅ Completed

### 11.2 SEO Validation Script (`apps/calterio-site/scripts/validate-seo.js`)

- [x] Check exactly one H1 per page
- [x] Verify meta description exists
- [x] Check for duplicate meta tags
- [x] Validate schema.org JSON-LD
- [x] Fail build on errors

**Status**: ✅ Completed

### 11.3 GitHub Actions Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Build and Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: |
          cd apps/calterio-site
          npm install
      - name: Run linting
        run: |
          cd apps/calterio-site
          npm run lint
      - name: Validate SEO
        run: |
          cd apps/calterio-site
          npm run build:seo-validate
      - name: Build Next.js app
        run: |
          cd apps/calterio-site
          npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './apps/calterio-site/out'

  deploy:
    environment:
      name: github-pages
      url: https://calterio.com
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

**Status**: ✅ Completed

---

## Phase 12: Content Integration

### 12.1 Extract Product Content

From `PRESENTATION.md` and `FEATURES.md`:
- [ ] Core capabilities → SystemCard components
- [ ] 31+ features → Feature pages/sections
- [ ] 8 target industries → Use case YAML files
- [ ] Business benefits → Metrics section
- [ ] Competitive advantages → Comparison tables

**Status**: ⏳ Pending

### 12.2 Logo Integration

- [x] Copy logos to `apps/calterio-site/public/images/`
- [x] Update Header component to use Calterio logo
- [x] Set favicon from `calterio-site-icon.png`
- [x] Use appropriate logo variant (main vs side-by-side)

**Status**: ✅ Completed

---

## File Structure After Transformation

```
calterio-site/
├── packages/
│   └── uwds-core/
│       ├── tokens/
│       │   ├── colors.ts (Calterio: F28B24, E10209, 131A47)
│       │   ├── typography.ts
│       │   ├── spacing.ts
│       │   └── layout.ts
│       ├── components/
│       │   ├── Hero.tsx
│       │   ├── SystemCard.tsx
│       │   ├── MetricBadge.tsx
│       │   ├── ArchitectureBlock.tsx
│       │   ├── FlowTimeline.tsx
│       │   ├── IntegrationGrid.tsx
│       │   ├── ProblemBlock.tsx
│       │   └── SEOLayout.tsx
│       ├── diagrams/
│       │   ├── FOSArchitecture.tsx (sophisticated)
│       │   ├── LogicEditorFlow.tsx (sophisticated)
│       │   ├── DeploymentTopology.tsx (sophisticated)
│       │   ├── DataFlow.tsx (sophisticated)
│       │   ├── IntegrationPoints.tsx (sophisticated)
│       │   ├── StateMachineFlow.tsx (sophisticated)
│       │   └── IntentBasedControl.tsx (sophisticated)
│       ├── tailwind/
│       │   └── config.ts
│       ├── package.json
│       └── tsconfig.json
├── apps/
│   └── calterio-site/
│       ├── src/
│       │   └── app/
│       │       ├── page.tsx (Calterio Landing)
│       │       ├── architecture/
│       │       │   └── page.tsx
│       │       ├── use-cases/
│       │       │   └── [slug]/
│       │       │       └── page.tsx
│       │       ├── layout.tsx (with Calterio logo)
│       │       └── globals.css
│       ├── seo/
│       │   └── usecases/
│       │       └── *.yaml (8+ use cases)
│       ├── public/
│       │   ├── images/
│       │   │   ├── logo-main.png
│       │   │   ├── logo-side.png
│       │   │   └── favicon.png
│       │   ├── diagrams/ (SVG exports if needed)
│       │   └── CNAME (calterio.com)
│       ├── scripts/
│       │   └── validate-seo.js
│       ├── package.json
│       ├── tsconfig.json
│       ├── tailwind.config.ts
│       └── next.config.mjs
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json (root workspace)
├── turbo.json
└── tsconfig.json (root)
```

---

## Key Implementation Details

### Calterio Brand Colors
- **Primary Orange**: `#F28B24` (CTAs, highlights)
- **Accent Red**: `#E10209` (alerts, critical)
- **Dark Blue**: `#131A47` (backgrounds, depth)

### Logo Usage
- **Header**: `calterio-main-logo.png` or `calterio-side-by-side-logo.png`
- **Favicon**: `calterio-site-icon.png`

### Component Strategy
- **Keep existing**: Header, Button, Card, SectionHeading, Spacing, Div
- **Adapt styling**: To Calterio colors and UWDS principles
- **Create new**: Hero, SystemCard, MetricBadge, ArchitectureBlock, etc.

### Diagram Sophistication
- Interactive SVG diagrams with hover/click
- Zoomable with pan controls
- Multi-layer architecture visualization
- Color-coded flows using Calterio palette
- Animated transitions (subtle, 150-250ms)

### Custom Domain
- Configure for `calterio.com`
- CNAME file in public directory
- GitHub Pages custom domain settings

### Performance
- Target: <300ms load time
- Optimize SVG diagrams
- Lazy load non-critical components
- Static export for fast delivery

---

## Status Legend

- ✅ **Completed** - Task is finished
- 🟡 **In Progress** - Currently being worked on
- ⏳ **Pending** - Not yet started
- ❌ **Blocked** - Waiting on dependency or clarification

---

**This plan transforms the template into a UWDS-compliant Calterio Logic site with Calterio branding, sophisticated diagrams, and programmatic SEO, ready for deployment to calterio.com via GitHub Pages.**
