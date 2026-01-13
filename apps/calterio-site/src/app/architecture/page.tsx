'use client';
import React from 'react';
import { ArchitectureBlock } from '@calterio/uwds-core/components';
import {
  FOSArchitecture,
  DeploymentTopology,
  DataFlow,
  IntegrationPoints,
  StateMachineFlow,
  IntentBasedControl,
} from '@calterio/uwds-core/diagrams';
import SectionHeading from '@/app/ui/SectionHeading';
import Spacing from '@/app/ui/Spacing';
import Div from '@/app/ui/Div';

export default function ArchitecturePage() {
  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="System Architecture"
            subtitle="Platform Overview"
            variant="cs-style1"
          />
          <p className="text-xl text-text-secondary max-w-3xl mt-6">
            Calterio Platform provides a comprehensive Factory Operating System that serves as the digital foundation for modern manufacturing. 
            Explore the architecture, deployment topologies, data flows, and integration capabilities.
          </p>
        </div>
      </section>

      {/* Logical Architecture */}
      <section id="logical-architecture" className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <ArchitectureBlock
            title="Logical Architecture"
            description="Calterio FOS consists of core orchestration components in the cloud and deterministic execution at the edge. The system provides unified data management, workflow orchestration, and factory intelligence."
            diagram={<FOSArchitecture highlight={['uns', 'event', 'workflow', 'digitaltwin', 'intelligence', 'edgeruntime']} />}
            highlight={['UNS Engine', 'Event Broker', 'Workflow Engine', 'Digital Twin', 'Factory Intelligence', 'Edge Runtime']}
            zoomable={true}
          />
          
          <Spacing lg="60" md="40" />
          
          {/* Component Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">UNS Engine</h3>
              <p className="text-text-secondary text-sm">
                Hierarchical namespace organizing factory data: factory/plant/line/cell/machine/state. Single source of truth for all factory operations.
              </p>
            </div>
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Event Broker</h3>
              <p className="text-text-secondary text-sm">
                Low-latency event distribution system. Ordered per asset, buffered for resilience, replayable on recovery.
              </p>
            </div>
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Workflow Engine</h3>
              <p className="text-text-secondary text-sm">
                BPMN-based workflow orchestration with business rules engine. State machine compiler for execution plans.
              </p>
            </div>
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Digital Twin</h3>
              <p className="text-text-secondary text-sm">
                Real-time synchronization with physical assets. What-if scenario simulation and deterministic replay of historical events.
              </p>
            </div>
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Factory Intelligence</h3>
              <p className="text-text-secondary text-sm">
                AI/ML-powered insights for predictive maintenance, root cause analysis, and optimization. Feature engineering and anomaly detection.
              </p>
            </div>
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Edge Runtime</h3>
              <p className="text-text-secondary text-sm">
                Deterministic execution engine with &lt;100ms latency. Safety constraint enforcement and offline-first operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Topology */}
      <section id="deployment" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ArchitectureBlock
            title="Deployment Topology"
            description="Hybrid cloud-edge architecture enables cloud orchestration with edge-native execution. Multi-plant deployments with high availability clustering and horizontal scaling."
            diagram={<DeploymentTopology highlight={['plant1', 'plant2', 'plant3']} />}
            highlight={['Cloud FOS', 'Edge Nodes', 'Line Nodes']}
            zoomable={true}
          />
          
          <Spacing lg="60" md="40" />
          
          {/* Deployment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-surface border border-border-default rounded-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Cloud Deployment</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-calterio-orange mt-1">•</span>
                  <span>Deploy FOS in public cloud (AWS, Azure, GCP) or private cloud</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-calterio-orange mt-1">•</span>
                  <span>Active-active clustering for high availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-calterio-orange mt-1">•</span>
                  <span>Horizontal scaling as factory grows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-calterio-orange mt-1">•</span>
                  <span>99.9% uptime SLA</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface border border-border-default rounded-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Edge Deployment</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-calterio-red mt-1">•</span>
                  <span>Edge Runtime deployed at factory for deterministic execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-calterio-red mt-1">•</span>
                  <span>Offline-first operation (factory runs without cloud connectivity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-calterio-red mt-1">•</span>
                  <span>Line-level or cell-level edge nodes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-calterio-red mt-1">•</span>
                  <span>Supports 100+ PLCs per edge node</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section id="data-flow" className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <ArchitectureBlock
            title="Data Flow"
            description="Unified Namespace (UNS) provides hierarchical data organization with real-time event-driven updates. Device data flows through adapters to FOS, then to UNS for storage and MOS for orchestration."
            diagram={<DataFlow highlight={['device', 'adapter', 'fos', 'uns']} />}
            highlight={['Device', 'Adapter', 'FOS', 'UNS', 'MOS']}
            zoomable={true}
          />
          
          <Spacing lg="60" md="40" />
          
          {/* Data Flow Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Hierarchical Namespace</h3>
              <div className="font-mono text-sm text-text-secondary space-y-1">
                <div>factory/</div>
                <div className="ml-4">plant/</div>
                <div className="ml-8">line/</div>
                <div className="ml-12">cell/</div>
                <div className="ml-16">machine/</div>
                <div className="ml-20">state</div>
              </div>
              <p className="text-text-secondary text-sm mt-4">
                Domain segments: state, metrics, events, alarms, commands, health, config
              </p>
            </div>
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Event Flow</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-calterio-orange"></div>
                  <span className="text-text-secondary text-sm">Real-time: Device → Adapter → FOS → UNS</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-calterio-dark-blue"></div>
                  <span className="text-text-secondary text-sm">Time-series: UNS → Storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-calterio-dark-blue"></div>
                  <span className="text-text-secondary text-sm">Events: FOS → UNS → MOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Points */}
      <section id="integrations" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ArchitectureBlock
            title="Integration Points"
            description="Universal protocol abstraction and enterprise system integration. Apache Camel-based integration framework enables bidirectional data synchronization with ERP, PLM, CMMS, and QMS systems."
            diagram={<IntegrationPoints highlight={['erp', 'plm', 'opcua', 'modbus']} />}
            highlight={['ERP', 'PLM', 'CMMS', 'QMS', 'OPC UA', 'Modbus']}
            zoomable={true}
          />
          
          <Spacing lg="60" md="40" />
          
          {/* Integration Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-surface border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Enterprise Systems</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• ERP Integration</li>
                <li>• PLM Connectivity</li>
                <li>• CMMS Integration</li>
                <li>• QMS Integration</li>
              </ul>
            </div>
            <div className="bg-surface border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Industrial Protocols</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• OPC UA (Primary)</li>
                <li>• Modbus (TCP/RTU)</li>
                <li>• Profinet/Profibus</li>
                <li>• EtherCAT</li>
                <li>• MQTT/Sparkplug B</li>
              </ul>
            </div>
            <div className="bg-surface border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Devices</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• PLCs (Siemens, Rockwell, Beckhoff)</li>
                <li>• Robots (ABB, KUKA, Fanuc)</li>
                <li>• Sensors & I/O Modules</li>
                <li>• Legacy Devices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* State Machine Flow */}
      <section id="state-machine" className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <ArchitectureBlock
            title="Machine State Transitions"
            description="Deterministic state machines with canonical states and guard conditions. Safety interlock enforcement ensures safe state transitions."
            diagram={<StateMachineFlow currentState="RUNNING" />}
            highlight={['IDLE', 'READY', 'RUNNING', 'PAUSED', 'FAULTED', 'MAINTENANCE']}
            zoomable={true}
          />
          
          <Spacing lg="60" md="40" />
          
          {/* State Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Canonical States</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-calterio-dark-blue"></div>
                  <span className="text-text-secondary">IDLE - Asset stopped and ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-calterio-dark-blue"></div>
                  <span className="text-text-secondary">READY - Asset prepared, waiting for command</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-calterio-orange"></div>
                  <span className="text-text-secondary">RUNNING - Asset executing operation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-calterio-dark-blue"></div>
                  <span className="text-text-secondary">PAUSED - Operation temporarily halted</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-calterio-red"></div>
                  <span className="text-text-secondary">FAULTED - Error condition requiring intervention</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-calterio-dark-blue"></div>
                  <span className="text-text-secondary">MAINTENANCE - Asset in maintenance mode</span>
                </div>
              </div>
            </div>
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Guard Conditions</h3>
              <div className="font-mono text-sm text-text-secondary space-y-2">
                <div>• all_systems_ok</div>
                <div>• safety_clear</div>
                <div>• operator_request</div>
                <div>• conditions_met</div>
                <div>• fault_detected</div>
                <div>• maintenance_mode</div>
                <div>• maintenance_done</div>
                <div>• operation_complete</div>
              </div>
              <div className="mt-6 p-4 bg-calterio-red/10 border border-calterio-red rounded-md">
                <p className="text-calterio-red text-sm font-semibold">
                  Safety interlock enforcement ensures safe state transitions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intent-Based Control */}
      <section id="intent-control" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ArchitectureBlock
            title="Intent-Based Control"
            description="High-level semantic commands enable business-level operations. System decides 'how' to execute safely with built-in safety gates and state machine compilation."
            diagram={<IntentBasedControl activeStage="execution" />}
            highlight={['Intent', 'Validation', 'Execution', 'Confirmation']}
            zoomable={true}
          />
          
          <Spacing lg="60" md="40" />
          
          {/* Intent Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-surface border border-border-default rounded-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Core Intent Types</h3>
              <div className="space-y-3">
                <div className="font-mono text-sm text-text-secondary">
                  <div className="text-calterio-orange">ExecuteOperation</div>
                  <div className="text-text-muted text-xs ml-4">Start a manufacturing operation</div>
                </div>
                <div className="font-mono text-sm text-text-secondary">
                  <div className="text-calterio-orange">DispatchWorkOrder</div>
                  <div className="text-text-muted text-xs ml-4">Assign work to a machine/cell</div>
                </div>
                <div className="font-mono text-sm text-text-secondary">
                  <div className="text-calterio-orange">SetParameters</div>
                  <div className="text-text-muted text-xs ml-4">Update machine parameters</div>
                </div>
                <div className="font-mono text-sm text-text-secondary">
                  <div className="text-calterio-orange">Pause / Resume</div>
                  <div className="text-text-muted text-xs ml-4">Control machine state</div>
                </div>
              </div>
            </div>
            <div className="bg-surface border border-border-default rounded-md p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Intent Lifecycle</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-calterio-orange"></div>
                  <span className="text-text-secondary text-sm">RECEIVED - Accepted by API</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-calterio-orange"></div>
                  <span className="text-text-secondary text-sm">VALIDATED - Safety & policy passed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-calterio-orange"></div>
                  <span className="text-text-secondary text-sm">EXECUTING - State transition started</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-calterio-orange"></div>
                  <span className="text-text-secondary text-sm">COMPLETED - Finished successfully</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-calterio-red"></div>
                  <span className="text-text-secondary text-sm">REJECTED - Denied with reason</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-calterio-orange/10 border border-calterio-orange rounded-md">
                <p className="text-calterio-orange text-sm font-semibold">
                  Performance: &lt;100ms from intent to execution start
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Governance */}
      <section id="security" className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Security & Governance"
            subtitle="Compliance & Standards"
            variant="cs-style1"
          />
          <Spacing lg="60" md="40" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Zero-Trust Security</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Mutual TLS (mTLS)</li>
                <li>• Device identity certificates</li>
                <li>• Role-based access control</li>
                <li>• Command authorization</li>
                <li>• Audit logging</li>
              </ul>
            </div>
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Safety Standards</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• IEC 61508 (SIL 2 target)</li>
                <li>• ISO 13849 (PL d target)</li>
                <li>• IEC 62443 (cybersecurity)</li>
                <li>• Built-in safety enforcement</li>
                <li>• Safety interlock support</li>
              </ul>
            </div>
            <div className="bg-background border border-border-default rounded-md p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Data Governance</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Schema versioning</li>
                <li>• Backward compatibility</li>
                <li>• Change management</li>
                <li>• Complete audit trail</li>
                <li>• Data isolation (multi-tenant)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-surface border border-border-default rounded-md p-12 text-center">
            <h2 className="text-4xl font-semibold text-text-primary mb-4">
              Ready to Transform Your Factory Operations?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Request an architecture walkthrough to see how Calterio Platform can transform your manufacturing operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Request Architecture Walkthrough
              </a>
              <a
                href="/use-cases"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Explore Use Cases
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

