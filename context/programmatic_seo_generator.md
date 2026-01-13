A. Programmatic SEO Page Generator (Core Growth Engine)
A1. What You’re Building

A code-driven SEO factory that generates hundreds of high-authority pages from structured data — without WordPress.

Ideal Use Cases (for you)

“Inventory Optimization for {Industry}”

“Drone Cycle Counting for {Warehouse Type}”

“Warehouse Digital Twin for {Use Case}”

“RFID vs Vision vs Drones – {Context}”

A2. Data Model (SEO Input)
# seo/usecases/warehouse-digital-twin.yaml
slug: warehouse-digital-twin-cold-chain
title: Warehouse Digital Twin for Cold Chain Logistics
h1: Digital Twin Architecture for Cold Chain Warehouses
meta_description: Real-time warehouse digital twin using IoT, drones and AI.
industry: Cold Chain
problem:
  - Temperature excursions
  - Inventory blind spots
solution:
  - 3D digital twin
  - Sensor fusion
  - Predictive alerts
architecture_ref: dt-arch-v1
kpis:
  - 30% waste reduction
  - 99.7% inventory accuracy
cta: Request Architecture Walkthrough

A3. Generator Flow (Next.js / Astro)
YAML / JSON
   ↓
MDX compiler
   ↓
Static Pages (SSG)
   ↓
Schema.org + Internal Links
   ↓
CDN

Page Assembly
<SEOLayout>
  <Hero />
  <ProblemBlock />
  <ArchitectureDiagram />
  <Workflow />
  <Metrics />
  <IntegrationGrid />
  <CTA />
</SEOLayout>


Result: Google sees deep, structured authority, not blogs.

B. Exact Folder Structure (Monorepo-Ready)
web/
├── apps/
│   ├── kunaxi-site/
│   │   ├── pages/
│   │   │   ├── index.tsx
│   │   │   ├── use-cases/[slug].tsx
│   │   │   └── architecture.tsx
│   │   ├── seo/
│   │   │   └── usecases/*.yaml
│   │   └── public/diagrams/
│   ├── company-site/
│   └── docs/
├── packages/
│   ├── uwds-core/
│   │   ├── tokens/
│   │   ├── components/
│   │   ├── diagrams/
│   │   └── tailwind/
│   └── seo-engine/
├── .github/workflows/
└── turbo.json

C. CI / CD Pipeline (Non-Negotiable)
GitHub Actions
name: Web Build & Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - checkout
      - pnpm install
      - pnpm lint
      - pnpm build
      - deploy-to-vercel

SEO-Specific Gates

❌ No missing H1

❌ No duplicate meta

❌ Lighthouse < 90 fails build

D. Embedding Demos, Digital Twins & Architecture
D1. Architecture Diagrams (SVG-first)
Rules

SVG only

No raster images

Highlight with CSS

Zoomable

<ArchitectureDiagram
  src="/diagrams/kunaxi-wos.svg"
  highlight={["AI Engine", "Drone Runtime"]}
/>

D2. Digital Twin Embeds (Three.js)
<DigitalTwinEmbed
  scene="/twins/warehouse.glb"
  overlays={["inventory", "robots"]}
  readOnly
/>


Read-only for public pages

Interactive for logged-in demos

D3. Live Demo Sandboxes
<DemoFrame
  src="https://demo.kunaxi.ai/read-only"
  mode="guided"
/>


Use:

Feature-limited data

Timed sessions

No auth friction

E. Design Tokens + Tailwind Config
E1. Tokens
// tokens/colors.ts
export const colors = {
  background: "#0B0F14",
  surface: "#121826",
  text: "#E5E7EB",
  accent: {
    kunaxi: "#3B82F6",
    zieder: "#F97316"
  }
}

E2. Tailwind Config
theme: {
  extend: {
    colors,
    fontFamily: {
      sans: ["Inter"],
      mono: ["JetBrains Mono"]
    },
    borderRadius: {
      sm: "6px",
      md: "8px"
    }
  }
}

F. Exact React Component APIs (UWDS Core)
F1. SystemCard
<SystemCard
  title="Autonomous Cycle Counting"
  description="Drone-based inventory verification"
  icon="drone"
  accent="kunaxi"
/>

F2. MetricBadge
<MetricBadge
  value="99.7%"
  label="Inventory Accuracy"
/>

F3. ArchitectureBlock
<ArchitectureBlock
  title="Kunaxi WOS Architecture"
  diagram="wos.svg"
  description="Signal → Decision → Execution"
/>

G. Reference Landing Page — Kunaxi
Page Sections

System Hero (Architecture Visual)

What Kunaxi Orchestrates

WOS Layers

Use Cases (Programmatic)

Metrics

Integrations

Demo

CTA

Hero Copy

Kunaxi is the cognitive brain of modern inventory networks.

H. Diagram Language (SVG Rules)
Visual Grammar

Rectangles = Systems

Rounded = Services

Circles = Signals

Dashed = Async

Solid = Sync

Colors

Gray base

Single accent per product

No gradients

Font

Inter

Uppercase system labels