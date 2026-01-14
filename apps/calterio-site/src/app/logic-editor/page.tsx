'use client';
import React from 'react';
import { ArchitectureBlock, FlowTimeline } from '@calterio/uwds-core/components';
import { LogicEditorFlow } from '@calterio/uwds-core/diagrams';
import SectionHeading from '@/app/ui/SectionHeading';
import Spacing from '@/app/ui/Spacing';
import SystemCard from '@/app/ui/Card';
import { Icon } from '@iconify/react';

export default function LogicEditorPage() {
  const features = [
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-background">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-semibold text-text-primary leading-tight mb-6">
              Logic Editor
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Visual PLC Programming Studio for creating control logic that runs on the Edge Runtime. Support for Ladder Logic, Structured Text, and real-time simulation.
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

      {/* Features */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Logic Editor Features"
            subtitle="Visual PLC Programming"
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
              <LogicEditorFlow activeStep="ladder" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Key Capabilities"
            subtitle="IEC 61131-3 Compliant"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Ladder Logic', description: 'Visual drag-and-drop programming', icon: 'mdi:view-grid' },
              { title: 'Structured Text', description: 'Code-based programming with IntelliSense', icon: 'mdi:code-tags' },
              { title: 'Simulation', description: 'Real-time testing before deployment', icon: 'mdi:play-circle' },
              { title: 'Validation', description: 'IEC 61131-3 compliance checking', icon: 'mdi:check-circle' },
            ].map((item, index) => (
              <SystemCard
                key={index}
                title={item.title}
                description={item.description}
                iconName={item.icon}
                link="#"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

