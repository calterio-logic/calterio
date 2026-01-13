The Cenuara Unified Web Design System (UWDS)

Design principle:
Consulting-grade clarity + Product-grade realism + Engineering credibility

1. Design Philosophy (Non-Negotiable)
1.1 What We Are NOT

❌ Marketing fluff
❌ Gradient-heavy SaaS clones
❌ Illustrations without meaning
❌ “Startup-y” vibes

1.2 What We ARE

✅ Systems-first
✅ Architecture-visible
✅ Industrial, precise, confident
✅ CTO / CXO readable
✅ SEO + product-led

Think:

Palantir × Databricks × Stripe (technical pages)

2. Global Design Tokens (Shared Across All Products)

These tokens never change, regardless of product.

2.1 Typography
Usage	Font
Headings	Inter / Satoshi (SemiBold)
Body	Inter (Regular)
Code / Metrics	JetBrains Mono
Numbers / KPIs	JetBrains Mono

Rules

No decorative fonts

Tight line-height

Large headings (authority signal)

2.2 Layout System
Token	Value
Max Width	1200–1320px
Grid	12-column
Section Padding	96px desktop / 56px mobile
Card Radius	8px (never more)
Shadows	Minimal / structural only
2.3 Motion (Subtle Intelligence)

No bounce

No gimmicks

Use motion to explain state changes

150–250ms transitions

Prefer opacity + transform only

3. Product Differentiation Without Fragmentation

All products share structure, not color.

Product Accent Palette
Product	Accent
Kunaxi	Electric Blue
Zieder	Industrial Orange
Calterio	Steel Green
Proclym	Deep Indigo
Troncu	Signal Red
Company / Labs	Graphite Gray

Accent colors appear only in:

CTAs

Section dividers

Active states

Diagrams

Never backgrounds. Never gradients.

4. Core Page Templates (Mandatory)

Every product site must use these templates.

4.1 Product Landing Page (Hero = System)

Hero Section Rules

No stock imagery

No abstract blobs

Must show:

Architecture

Dashboard

System flow

Hero Structure

[Headline: System Capability]
[Subtext: Operational Impact]
[Primary CTA]
[Secondary CTA]
[Product Visual / Diagram]

4.2 Architecture Page (Your Differentiator)

Mandatory Sections

Logical Architecture

Deployment Topology (Cloud / Edge)

Data Flow

Integration Points

Security & Governance

No product page should exist without architecture.

4.3 Use Case Pages (SEO Powerhouse)

Each use case page includes:

Problem framing

Workflow diagram

Metrics impact

Screenshots

Integration context

4.4 Platform / OS Page

For OS-style products (Kunaxi WOS, Zieder MOS, Calterio FOS):

Signal → Decision → Execution → Learning


This becomes a repeatable narrative across products.

5. Visual Language (Extremely Important)
5.1 Allowed Visuals

✅ Architecture diagrams
✅ Flow charts
✅ State machines
✅ Digital twin visuals
✅ Real dashboards

5.2 Forbidden Visuals

❌ Random illustrations
❌ People shaking hands
❌ Generic AI brains
❌ Overused isometric factories

Diagram Style Rules

Monochrome base

Accent color highlights

Thin lines

Consistent arrowheads

SVG only

6. Component System (Shared)
6.1 Core Components
Component	Purpose
SystemCard	Feature + capability
ArchitectureBlock	Diagrams
MetricBadge	ROI / KPIs
FlowTimeline	Process
IntegrationGrid	ERP/WMS/MES
PersonaBlock	CIO / Ops / Plant Head
CapabilityMatrix	Competitive edge
6.2 CTA Philosophy

No “Get Started Free” by default

Prefer:

“Request Architecture Walkthrough”

“View Reference Deployment”

“Explore Platform”

Signals enterprise seriousness.

7. Dark Mode Is the Default

All product sites:

Default to dark

Light mode optional

Company sites may use light

Dark mode:

Feels industrial

Improves diagram contrast

Signals “systems software”

8. Content Tone & Language System
Writing Rules

Short sentences

Declarative tone

No hype

Use metrics

Use system verbs:

Orchestrates

Executes

Synchronizes

Optimizes

Governs

Avoid

“Revolutionary”

“Game-changing”

“Disruptive”

9. Technical Enforcement (Critical)

This design system must be:

A shared NPM package

Used by:

Marketing pages

Product UI

Admin UI

Docs

Stack Recommendation

React

Tailwind (tokenized)

MDX for content

Storybook (internal)

10. Governance Model
Versioning
uwds-core
├── tokens
├── layouts
├── components
└── diagrams


Changes require:

Architecture approval

Visual diff review

Product alignment

This prevents drift.

Final Mental Model

Your websites should feel like operating manuals for intelligent systems—not brochures.

This design system will:

Instantly differentiate you from WordPress sites

Increase enterprise trust

Enable programmatic SEO

Reduce long-term design entropy

Align product + marketing + docs