'use client';
import React from 'react';
import { MetricBadge, ArchitectureBlock, FlowTimeline, IntegrationGrid } from '@calterio/uwds-core/components';
import { FOSArchitecture, LogicEditorFlow } from '@calterio/uwds-core/diagrams';
import SectionHeading from '@/app/ui/SectionHeading';
import Spacing from '@/app/ui/Spacing';
import Div from '@/app/ui/Div';
import SystemCard from '@/app/ui/Card';
import { Icon } from '@iconify/react';

export default function Home() {
  // Calterio Orchestrates - Core components
  const calterioComponents = [
    {
      title: 'Calterio FOS',
      description: 'Cloud-deployable orchestration platform with SCADA, UNS Engine, and Factory Intelligence',
      iconName: 'mdi:factory',
      link: '/architecture',
      accent: 'orange' as const,
    },
    {
      title: 'Logic Editor',
      description: 'Visual PLC Programming Studio with Ladder Logic, Structured Text, and real-time simulation',
      iconName: 'mdi:code-braces',
      link: '/architecture',
      accent: 'orange' as const,
    },
    {
      title: 'Edge Runtime',
      description: 'Real-time deterministic execution with safety enforcement and offline-first operation',
      iconName: 'mdi:server-network',
      link: '/architecture',
      accent: 'red' as const,
    },
    {
      title: 'UNS Engine',
      description: 'Unified Namespace providing hierarchical data organization and single source of truth',
      iconName: 'mdi:database-network',
      link: '/architecture',
      accent: 'blue' as const,
    },
    {
      title: 'Digital Twin',
      description: 'Real-time synchronization with physical assets enabling what-if scenario simulation',
      iconName: 'mdi:cube-outline',
      link: '/architecture',
      accent: 'orange' as const,
    },
    {
      title: 'Factory Intelligence',
      description: 'AI/ML-powered insights for predictive maintenance, root cause analysis, and optimization',
      iconName: 'mdi:brain',
      link: '/architecture',
      accent: 'orange' as const,
    },
  ];

  // Logic Editor Features
  const logicEditorSteps = [
    {
      title: 'Ladder Logic Editor',
      description: 'Drag-and-drop visual programming with IEC 61131-3 compliance. Intuitive interface for creating control logic.',
      icon: 'mdi:view-grid',
    },
    {
      title: 'Structured Text Editor',
      description: 'Code-based programming with IntelliSense support. Full-featured editor for complex control algorithms.',
      icon: 'mdi:code-tags',
    },
    {
      title: 'Real-Time Simulation',
      description: 'Test programs before deployment with deterministic simulation. Debug with variable watch tables and breakpoints.',
      icon: 'mdi:play-circle',
    },
    {
      title: 'Export & Deploy',
      description: 'Export to PLCopen XML, OpenPLC, or Canonical JSON. Industry-standard formats for seamless integration.',
      icon: 'mdi:export',
    },
  ];

  // Metrics
  const metrics = [
    { value: '<100ms', label: 'Latency', accent: 'orange' as const },
    { value: '50K', label: 'Events/sec', accent: 'orange' as const },
    { value: '99.9%', label: 'Uptime', accent: 'orange' as const },
    { value: '30-40%', label: 'Downtime Reduction', accent: 'red' as const },
    { value: '25-30%', label: 'Cost Reduction', accent: 'orange' as const },
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-background">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-tight">
                Calterio Logic: Visual PLC Programming for Modern Factories
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl">
                Factory Operating System with deterministic control, unified data management, and intelligent analytics. Transform manufacturing operations through real-time control and AI-powered insights.
              </p>
              
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
                <FOSArchitecture highlight={['uns', 'event', 'edgeruntime']} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Calterio Orchestrates */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Calterio Orchestrates"
            subtitle="Platform Components"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calterioComponents.map((component, index) => (
              <SystemCard
                key={index}
                title={component.title}
                description={component.description}
                iconName={component.iconName}
                link={component.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Logic Editor Features */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Logic Editor Features"
            subtitle="Visual PLC Programming"
            variant="cs-style1"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FlowTimeline
              steps={logicEditorSteps.map(step => ({
                title: step.title,
                description: step.description,
                icon: step.icon,
              }))}
              flowType="linear"
            />
            <div className="bg-surface border border-border-default rounded-md p-6">
              <LogicEditorFlow activeStep="ladder" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Use Cases"
            subtitle="Industry Solutions"
            variant="cs-style1 text-center"
            btnText="View All Use Cases"
            btnLink="/use-cases"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Predictive Maintenance', industry: 'Pharmaceutical', link: '/use-cases/predictive-maintenance-pharmaceutical' },
              { title: 'Quality Control', industry: 'Automotive', link: '/use-cases/quality-control-pharmaceutical' },
              { title: 'Energy Optimization', industry: 'Textile', link: '/use-cases/energy-optimization-textile' },
              { title: 'Production Optimization', industry: 'Electronics', link: '/use-cases/production-optimization-electronics' },
            ].map((useCase, index) => (
              <SystemCard
                key={index}
                title={useCase.title}
                description={`${useCase.industry} manufacturing solutions`}
                iconName="mdi:application"
                link={useCase.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Performance Metrics"
            subtitle="Proven Results"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {metrics.map((metric, index) => (
              <MetricBadge
                key={index}
                value={metric.value}
                label={metric.label}
                accent={metric.accent}
                size="md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <IntegrationGrid
            integrations={integrations}
            title="Universal Integration"
          />
        </div>
      </section>

      {/* Architecture Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="System Architecture"
            subtitle="Platform Overview"
            variant="cs-style1"
            btnText="View Full Architecture"
            btnLink="/architecture"
          />
          <Spacing lg="90" md="45" />
          
          <ArchitectureBlock
            title="Calterio FOS Logical Architecture"
            description="Comprehensive Factory Operating System with cloud orchestration and edge execution"
            diagram={<FOSArchitecture highlight={['uns', 'event', 'workflow', 'intelligence']} />}
            highlight={['UNS Engine', 'Event Broker', 'Workflow Engine', 'Factory Intelligence']}
          />
        </div>
      </section>

      {/* Demo Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="bg-background border border-border-default rounded-md p-12 text-center">
            <h2 className="text-4xl font-semibold text-text-primary mb-4">
              See Calterio Logic in Action
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Experience the power of visual PLC programming and factory orchestration with a personalized demonstration.
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

