'use client';
import React from 'react';
import { ArchitectureBlock } from '@calterio/uwds-core/components';
import { DataFlow } from '@calterio/uwds-core/diagrams';
import SectionHeading from '@/app/ui/SectionHeading';
import Spacing from '@/app/ui/Spacing';
import SystemCard from '@/app/ui/Card';
import { Icon } from '@iconify/react';

export default function DataflowModelerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-background">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-semibold text-text-primary leading-tight mb-6">
              Dataflow Modeler
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Design and model data flows across your factory. Visualize the Unified Namespace (UNS) hierarchy and create data flow models for factory operations.
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

      {/* Data Flow Architecture */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Data Flow Modeling"
            subtitle="Unified Namespace Architecture"
            variant="cs-style1"
          />
          <Spacing lg="90" md="45" />
          
          <ArchitectureBlock
            title="Unified Namespace (UNS) Data Flow"
            description="Hierarchical data organization: factory/plant/line/cell/machine/state. Real-time event-driven updates with time-series awareness."
            diagram={<DataFlow highlight={['device', 'adapter', 'fos', 'uns']} />}
            highlight={['Device', 'Adapter', 'FOS', 'UNS', 'MOS']}
            zoomable={true}
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Key Features"
            subtitle="Design Time Environment"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Hierarchical Modeling', description: 'Model factory structure: enterprise/plant/line/cell/machine', icon: 'mdi:sitemap' },
              { title: 'Data Flow Design', description: 'Visualize data flows from devices to UNS to MOS', icon: 'mdi:flowchart' },
              { title: 'Schema Definition', description: 'Define and version data schemas', icon: 'mdi:database-cog' },
              { title: 'Event Modeling', description: 'Model event-driven data flows', icon: 'mdi:event' },
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

      {/* UNS Structure */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Unified Namespace Structure"
            subtitle="Hierarchical Organization"
            variant="cs-style1"
          />
          <Spacing lg="90" md="45" />
          
          <div className="bg-background border border-border-default rounded-md p-8">
            <div className="font-mono text-lg text-text-primary space-y-2">
              <div>factory/</div>
              <div className="ml-4">plant/</div>
              <div className="ml-8">line/</div>
              <div className="ml-12">cell/</div>
              <div className="ml-16">machine/</div>
              <div className="ml-20">state</div>
              <div className="ml-20">metrics/</div>
              <div className="ml-20">events/</div>
              <div className="ml-20">alarms/</div>
              <div className="ml-20">commands/</div>
              <div className="ml-20">health</div>
              <div className="ml-20">config</div>
            </div>
            <p className="text-text-secondary mt-6">
              Domain segments: state, metrics, events, alarms, commands, health, config
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

