'use client';

import React, { useState } from 'react';

interface FOSArchitectureProps {
  highlight?: string[];
  className?: string;
}

export function FOSArchitecture({ highlight = [], className = '' }: FOSArchitectureProps) {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  const components = [
    { id: 'uns', label: 'UNS ENGINE', x: 400, y: 100, width: 200, height: 80 },
    { id: 'event', label: 'EVENT BROKER', x: 400, y: 220, width: 200, height: 80 },
    { id: 'workflow', label: 'WORKFLOW ENGINE', x: 100, y: 220, width: 200, height: 80 },
    { id: 'digitaltwin', label: 'DIGITAL TWIN', x: 700, y: 220, width: 200, height: 80 },
    { id: 'intelligence', label: 'FACTORY INTELLIGENCE', x: 400, y: 340, width: 200, height: 80 },
    { id: 'scada', label: 'SCADA', x: 100, y: 340, width: 200, height: 80 },
    { id: 'integration', label: 'INTEGRATION GATEWAY', x: 700, y: 340, width: 200, height: 80 },
    { id: 'edgeruntime', label: 'EDGE RUNTIME', x: 400, y: 500, width: 200, height: 80 },
  ];

  const getComponentColor = (id: string) => {
    if (highlight.includes(id) || hoveredComponent === id) {
      return '#F28B24'; // Calterio orange
    }
    if (id === 'edgeruntime') {
      return '#E10209'; // Calterio red for critical
    }
    return '#1F2937'; // Default gray
  };

  const getComponentFill = (id: string) => {
    if (highlight.includes(id) || hoveredComponent === id) {
      return '#F28B24';
    }
    if (id === 'edgeruntime') {
      return '#E10209';
    }
    return '#121826'; // Surface color
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 1000 650"
        className="w-full h-auto"
        onMouseLeave={() => setHoveredComponent(null)}
      >
        {/* Background */}
        <rect width="1000" height="650" fill="#0B0F14" />

        {/* Cloud/Edge separator line */}
        <line
          x1="0"
          y1="450"
          x2="1000"
          y2="450"
          stroke="#374151"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <text
          x="50"
          y="440"
          fill="#9CA3AF"
          fontSize="14"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
        >
          CLOUD
        </text>
        <text
          x="50"
          y="470"
          fill="#9CA3AF"
          fontSize="14"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
        >
          EDGE
        </text>

        {/* Components */}
        {components.map((comp) => (
          <g key={comp.id}>
            {/* Component rectangle */}
            <rect
              x={comp.x}
              y={comp.y}
              width={comp.width}
              height={comp.height}
              rx="8"
              fill={getComponentFill(comp.id)}
              stroke={getComponentColor(comp.id)}
              strokeWidth={highlight.includes(comp.id) || hoveredComponent === comp.id ? 3 : 2}
              onMouseEnter={() => setHoveredComponent(comp.id)}
              className="cursor-pointer transition-all duration-200"
            />
            {/* Component label */}
            <text
              x={comp.x + comp.width / 2}
              y={comp.y + comp.height / 2}
              fill={getComponentColor(comp.id)}
              fontSize="12"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="middle"
              letterSpacing="0.5px"
            >
              {comp.label}
            </text>
          </g>
        ))}

        {/* Data flow arrows - UNS to Event Broker */}
        <path
          d="M 500 180 L 500 220"
          stroke="#F28B24"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />

        {/* Event Broker to Workflow */}
        <path
          d="M 400 260 L 300 260"
          stroke="#131A47"
          strokeWidth="2"
          fill="none"
          strokeDasharray="3,3"
          markerEnd="url(#arrowhead-blue)"
        />

        {/* Event Broker to Digital Twin */}
        <path
          d="M 600 260 L 700 260"
          stroke="#131A47"
          strokeWidth="2"
          fill="none"
          strokeDasharray="3,3"
          markerEnd="url(#arrowhead-blue)"
        />

        {/* Event Broker to Intelligence */}
        <path
          d="M 500 300 L 500 340"
          stroke="#F28B24"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />

        {/* Workflow to SCADA */}
        <path
          d="M 200 300 L 200 340"
          stroke="#131A47"
          strokeWidth="2"
          fill="none"
          strokeDasharray="3,3"
          markerEnd="url(#arrowhead-blue)"
        />

        {/* Intelligence to Integration Gateway */}
        <path
          d="M 600 380 L 700 380"
          stroke="#131A47"
          strokeWidth="2"
          fill="none"
          strokeDasharray="3,3"
          markerEnd="url(#arrowhead-blue)"
        />

        {/* Edge Runtime connections */}
        <path
          d="M 500 420 L 500 500"
          stroke="#E10209"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-red)"
        />
        <path
          d="M 500 500 L 500 420"
          stroke="#E10209"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead-red)"
        />

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowhead-orange"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#F28B24" />
          </marker>
          <marker
            id="arrowhead-blue"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#131A47" />
          </marker>
          <marker
            id="arrowhead-red"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#E10209" />
          </marker>
        </defs>

        {/* Device connections to Edge Runtime */}
        <circle cx="200" cy="580" r="30" fill="#121826" stroke="#1F2937" strokeWidth="2" />
        <text x="200" y="585" fill="#9CA3AF" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600">
          PLC
        </text>
        <path
          d="M 200 550 L 350 530"
          stroke="#F28B24"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />

        <circle cx="500" cy="580" r="30" fill="#121826" stroke="#1F2937" strokeWidth="2" />
        <text x="500" y="585" fill="#9CA3AF" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600">
          ROBOT
        </text>
        <path
          d="M 500 550 L 500 530"
          stroke="#F28B24"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />

        <circle cx="800" cy="580" r="30" fill="#121826" stroke="#1F2937" strokeWidth="2" />
        <text x="800" y="585" fill="#9CA3AF" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600">
          SENSOR
        </text>
        <path
          d="M 800 550 L 650 530"
          stroke="#F28B24"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />
      </svg>
    </div>
  );
}

