'use client';
import React from 'react';
import { MetricBadge, ArchitectureBlock, FlowTimeline, IntegrationGrid, ProblemBlock } from '@calterio/uwds-core/components';
import { FOSArchitecture, LogicEditorFlow } from '@calterio/uwds-core/diagrams';
import SectionHeading from '@/app/ui/SectionHeading';
import Spacing from '@/app/ui/Spacing';
import SystemCard from '@/app/ui/Card';
import FullScreenVerticalSlider2 from '@/app/ui/Slider/FullScreenVerticalSlider2';
import { Icon } from '@iconify/react';

export default function Home() {
  // Core Capabilities for Decision Makers
  const capabilities = [
    {
      title: 'Universal Device & Protocol Abstraction',
      description: 'Connect any device, protocol, or system without vendor lock-in. 60-70% reduction in integration costs.',
      iconName: 'mdi:network',
      link: '/architecture',
      accent: 'orange' as const,
    },
    {
      title: 'Unified Namespace (UNS) Engine',
      description: 'Single source of truth for all factory data. Real-time 360° visibility across entire operations.',
      iconName: 'mdi:database-network',
      link: '/architecture',
      accent: 'blue' as const,
    },
    {
      title: 'Deterministic Real-Time Control',
      description: 'Millisecond-level precision with safety enforcement. Sub-100ms response times for critical operations.',
      iconName: 'mdi:clock-fast',
      link: '/architecture',
      accent: 'red' as const,
    },
    {
      title: 'Factory Intelligence & Analytics',
      description: 'AI/ML-powered predictive maintenance, root cause analysis, and optimization. 30-40% reduction in unplanned downtime.',
      iconName: 'mdi:brain',
      link: '/architecture',
      accent: 'orange' as const,
    },
    {
      title: 'Intent-Based Control',
      description: 'High-level semantic commands. System decides "how" to execute safely. Faster operations with reduced errors.',
      iconName: 'mdi:gesture-tap',
      link: '/architecture',
      accent: 'orange' as const,
    },
    {
      title: 'Digital Twin',
      description: 'Real-time synchronization with physical assets. What-if scenario simulation and risk-free testing.',
      iconName: 'mdi:cube-outline',
      link: '/architecture',
      accent: 'orange' as const,
    },
  ];

  // Key Features
  const features = [
    {
      title: 'SCADA System',
      description: 'Real-time visualization with customizable dashboards, intelligent alarm management, and historical trend analysis.',
      iconName: 'mdi:monitor-dashboard',
      link: '/architecture',
      accent: 'orange' as const,
    },
    {
      title: 'Workflow Orchestration',
      description: 'BPMN-based workflow orchestration with business rules engine for process standardization and compliance.',
      iconName: 'mdi:workflow',
      link: '/architecture',
      accent: 'orange' as const,
    },
    {
      title: 'Integration Gateway',
      description: 'Pre-built adapters for ERP, PLM, CMMS, QMS. Apache Camel-based integration framework with bidirectional sync.',
      iconName: 'mdi:gate',
      link: '/architecture',
      accent: 'orange' as const,
    },
    {
      title: 'High Availability',
      description: 'Active-active clustering with 99.9% uptime. Horizontal scaling supports 10x growth without platform change.',
      iconName: 'mdi:server-network',
      link: '/architecture',
      accent: 'orange' as const,
    },
  ];

  // Business Benefits
  const benefits = [
    {
      category: 'Operational Excellence',
      items: [
        { metric: '30-40%', label: 'Reduction in Unplanned Downtime' },
        { metric: '10-15%', label: 'Increase in OEE' },
        { metric: '70%', label: 'Reduction in MTTR' },
        { metric: '20-25%', label: 'Reduction in Process Variations' },
      ],
    },
    {
      category: 'Cost Reduction',
      items: [
        { metric: '15-20%', label: 'Reduction in Energy Costs' },
        { metric: '25-30%', label: 'Reduction in Maintenance Costs' },
        { metric: '60-70%', label: 'Reduction in Integration Costs' },
        { metric: '10-15%', label: 'Reduction in Scrap Rates' },
      ],
    },
    {
      category: 'Risk Mitigation',
      items: [
        { metric: '100%', label: 'Safety Compliance' },
        { metric: '20-30%', label: 'Reduction in Quality Defects' },
        { metric: '50%', label: 'Reduction in Audit Time' },
        { metric: 'Zero', label: 'Downtime During Network Outages' },
      ],
    },
  ];

  // Integrations
  const integrations = [
    { name: 'Siemens', category: 'PLC' as const, icon: 'mdi:chip' },
    { name: 'Rockwell', category: 'PLC' as const, icon: 'mdi:chip' },
    { name: 'Beckhoff', category: 'PLC' as const, icon: 'mdi:chip' },
    { name: 'Mitsubishi', category: 'PLC' as const, icon: 'mdi:chip' },
    { name: 'ABB', category: 'Robot' as const, icon: 'mdi:robot-industrial' },
    { name: 'KUKA', category: 'Robot' as const, icon: 'mdi:robot-industrial' },
    { name: 'Fanuc', category: 'Robot' as const, icon: 'mdi:robot-industrial' },
    { name: 'OPC UA', category: 'Protocol' as const, icon: 'mdi:network' },
    { name: 'Modbus', category: 'Protocol' as const, icon: 'mdi:network' },
    { name: 'Profinet', category: 'Protocol' as const, icon: 'mdi:network' },
    { name: 'EtherCAT', category: 'Protocol' as const, icon: 'mdi:network' },
    { name: 'MQTT', category: 'Protocol' as const, icon: 'mdi:network' },
    { name: 'ERP', category: 'Enterprise' as const, icon: 'mdi:office-building' },
    { name: 'PLM', category: 'Enterprise' as const, icon: 'mdi:office-building' },
    { name: 'CMMS', category: 'Enterprise' as const, icon: 'mdi:office-building' },
    { name: 'QMS', category: 'Enterprise' as const, icon: 'mdi:office-building' },
  ];

  return (
    <>
      {/* Factory Floor Video Showcase */}
      <section className="relative min-h-screen">
        <FullScreenVerticalSlider2
          data={[
            {
              introTitle: 'Operational Excellence',
              title: '40% Reduction in Unplanned Downtime',
              videoUrl: '/videos/automated-conveyor-in-cosmetic-factory-automated-2025-12-17-07-34-41-utc.mp4',
              href: '/architecture',
            },
            {
              introTitle: 'Cost Optimization',
              title: '25-30% Reduction in Total Operating Costs',
              videoUrl: '/videos/automation-slide-place-transfer-machine-2025-12-17-20-51-15-utc.mp4',
              href: '/architecture',
            },
            {
              introTitle: 'Real-Time Control',
              title: 'Sub-100ms Response Times for Critical Operations',
              videoUrl: '/videos/cosmetic-industry-the-process-of-mascara-productio-2025-12-17-13-22-56-utc.mp4',
              href: '/architecture',
            },
          ]}
        />
      </section>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-background">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-tight">
                Factory Operating System for Modern Manufacturing
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl">
                Transform manufacturing operations through real-time control, unified data management, and AI-powered insights. Reduce downtime by 40%, lower costs by 25-30%, and achieve operational excellence.
              </p>
              
              {/* Key Value Props */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:trending-up" className="text-2xl text-calterio-orange" />
                  <div>
                    <div className="text-2xl font-semibold text-text-primary">40%</div>
                    <div className="text-sm text-text-secondary">Downtime Reduction</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:currency-usd" className="text-2xl text-calterio-orange" />
                  <div>
                    <div className="text-2xl font-semibold text-text-primary">25-30%</div>
                    <div className="text-sm text-text-secondary">Cost Reduction</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:lightning-bolt" className="text-2xl text-calterio-orange" />
                  <div>
                    <div className="text-2xl font-semibold text-text-primary">&lt;100ms</div>
                    <div className="text-sm text-text-secondary">Real-Time Control</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:link-variant" className="text-2xl text-calterio-orange" />
                  <div>
                    <div className="text-2xl font-semibold text-text-primary">Universal</div>
                    <div className="text-sm text-text-secondary">Integration</div>
                  </div>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Request Architecture Walkthrough
                  <Icon icon="bi:arrow-right" className="ml-2" />
                </a>
                <a
                  href="/architecture"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Explore Platform
                </a>
              </div>
            </div>

            {/* Architecture Visual */}
            <div className="relative">
              <div className="w-full bg-surface border border-border-default rounded-md p-4">
                <FOSArchitecture highlight={['uns', 'event', 'edgeruntime', 'intelligence']} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Core Capabilities"
            subtitle="Transform Your Factory Operations"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <SystemCard
                key={index}
                title={capability.title}
                description={capability.description}
                iconName={capability.iconName}
                link={capability.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Business Benefits"
            subtitle="Proven Results for Decision Makers"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-surface border border-border-default rounded-md p-6">
                <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-2">
                  <Icon icon="mdi:chart-line" className="text-calterio-orange" />
                  {benefit.category}
                </h3>
                <div className="space-y-4">
                  {benefit.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="text-3xl font-bold text-calterio-orange min-w-[80px]">
                        {item.metric}
                      </div>
                      <div className="text-text-secondary pt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Key Features"
            subtitle="Comprehensive Factory Operating System"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <SystemCard
                key={index}
                title={feature.title}
                description={feature.description}
                iconName={feature.iconName}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <IntegrationGrid
            integrations={integrations}
            title="Universal Integration - Connect Any Device, Protocol, or System"
          />
        </div>
      </section>

      {/* Architecture Preview */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="System Architecture"
            subtitle="Cloud Orchestration with Edge Execution"
            variant="cs-style1"
            btnText="View Full Architecture"
            btnLink="/architecture"
          />
          <Spacing lg="90" md="45" />
          
          <ArchitectureBlock
            title="Calterio FOS Logical Architecture"
            description="Comprehensive Factory Operating System with cloud orchestration, edge execution, unified namespace, and factory intelligence"
            diagram={<FOSArchitecture highlight={['uns', 'event', 'workflow', 'intelligence', 'scada']} />}
            highlight={['UNS Engine', 'Event Broker', 'Workflow Engine', 'Factory Intelligence', 'SCADA System']}
          />
        </div>
      </section>

      {/* Demo Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-surface border border-border-default rounded-md p-12 text-center">
            <h2 className="text-4xl font-semibold text-text-primary mb-4">
              See Calterio Platform in Action
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Experience how Calterio transforms manufacturing operations. Schedule a personalized demonstration tailored to your industry and use cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Request Live Demo
                <Icon icon="bi:arrow-right" className="ml-2" />
              </a>
              <a
                href="/architecture"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Explore Architecture
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
