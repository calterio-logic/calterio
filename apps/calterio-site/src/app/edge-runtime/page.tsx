'use client';
import React from 'react';
import { ArchitectureBlock, FlowTimeline } from '@calterio/uwds-core/components';
import { DeploymentTopology, StateMachineFlow } from '@calterio/uwds-core/diagrams';
import SectionHeading from '@/app/ui/SectionHeading';
import Spacing from '@/app/ui/Spacing';
import SystemCard from '@/app/ui/Card';
import { Icon } from '@iconify/react';

export default function EdgeRuntimePage() {
  const features = [
    {
      title: 'Deterministic Execution',
      description: 'Real-time execution with guaranteed latency. Sub-100ms response times for critical operations.',
      icon: 'mdi:clock-fast',
    },
    {
      title: 'Safety Enforcement',
      description: 'Built-in safety interlocks and guard conditions. Local enforcement independent of cloud connectivity.',
      icon: 'mdi:shield-check',
    },
    {
      title: 'Offline-First Operation',
      description: 'Factory continues operating without cloud connectivity. Local plan storage and event buffering.',
      icon: 'mdi:server-network',
    },
    {
      title: 'Device Abstraction',
      description: 'Universal device adapters for PLCs, robots, sensors. Protocol translation and normalization.',
      icon: 'mdi:chip',
    },
  ];

  const capabilities = [
    {
      title: 'Execution Engine',
      description: 'Executes compiled state machines from FOS with deterministic precision',
      icon: 'mdi:play-circle',
      link: '#',
      accent: 'orange' as const,
    },
    {
      title: 'Safety & Policy Engine',
      description: 'Enforces safety constraints and evaluates guard conditions locally',
      icon: 'mdi:shield-alert',
      link: '#',
      accent: 'red' as const,
    },
    {
      title: 'Device Adapters',
      description: 'Universal adapters for PLCs, robots, conveyors, and sensors',
      icon: 'mdi:chip',
      link: '#',
      accent: 'orange' as const,
    },
    {
      title: 'Event Generator',
      description: 'Generates canonical events and buffers locally for offline operation',
      icon: 'mdi:event',
      link: '#',
      accent: 'orange' as const,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-background">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-semibold text-text-primary leading-tight mb-6">
              Edge Runtime
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Lightweight, real-time component deployed at the factory edge. Executes plans from FOS with deterministic precision, enforces safety constraints, and operates offline-first.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              Request Demo
              <Icon icon="bi:arrow-right" className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Edge Runtime Features"
            subtitle="Real-Time Execution at the Factory Edge"
            variant="cs-style1"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FlowTimeline
              steps={features.map(step => ({
                title: step.title,
                description: step.description,
                icon: step.icon,
              }))}
              flowType="linear"
            />
            <div className="bg-background border border-border-default rounded-md p-6">
              <StateMachineFlow currentState="RUNNING" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Core Capabilities"
            subtitle="Factory Edge Execution"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <SystemCard
                key={index}
                title={capability.title}
                description={capability.description}
                iconName={capability.icon}
                link={capability.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Topology */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Deployment Topology"
            subtitle="Edge Runtime Distribution"
            variant="cs-style1"
          />
          <Spacing lg="90" md="45" />
          
          <ArchitectureBlock
            title="Multi-Plant Edge Deployment"
            description="Edge Runtime deployed at plant and line levels. Cloud FOS orchestrates multiple edge nodes across facilities."
            diagram={<DeploymentTopology highlight={['plant1', 'plant2', 'plant3']} />}
            highlight={['Plant-Level Edge Nodes', 'Line-Level Edge Nodes', 'Cloud FOS Orchestration']}
            zoomable={true}
          />
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Performance Guarantees"
            subtitle="Real-Time Execution Metrics"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: '≤ 20ms', label: 'Sensor to Event', description: 'Device event generation latency' },
              { metric: '≤ 10ms', label: 'Plan Execution Start', description: 'Execution plan loading and start' },
              { metric: '≤ 5ms', label: 'State Transition', description: 'State machine transition latency' },
            ].map((item, index) => (
              <div key={index} className="bg-surface border border-border-default rounded-md p-6 text-center">
                <div className="text-4xl font-bold text-calterio-orange mb-2">
                  {item.metric}
                </div>
                <div className="text-xl font-semibold text-text-primary mb-2">
                  {item.label}
                </div>
                <div className="text-sm text-text-secondary">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

