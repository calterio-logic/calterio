'use client';

import React, { useState } from 'react';

interface DeploymentTopologyProps {
  highlight?: string[];
  className?: string;
}

export function DeploymentTopology({ highlight = [], className = '' }: DeploymentTopologyProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Cloud FOS
  const cloudFOS = { x: 400, y: 80, width: 200, height: 100 };

  // Edge nodes
  const edgeNodes = [
    { id: 'plant1', label: 'PLANT 1', x: 100, y: 350, width: 150, height: 80 },
    { id: 'plant2', label: 'PLANT 2', x: 350, y: 350, width: 150, height: 80 },
    { id: 'plant3', label: 'PLANT 3', x: 600, y: 350, width: 150, height: 80 },
  ];

  // Line nodes per plant
  const lineNodes = [
    { plant: 'plant1', id: 'line1', label: 'LINE A', x: 50, y: 500 },
    { plant: 'plant1', id: 'line2', label: 'LINE B', x: 150, y: 500 },
    { plant: 'plant2', id: 'line3', label: 'LINE A', x: 300, y: 500 },
    { plant: 'plant2', id: 'line4', label: 'LINE B', x: 400, y: 500 },
    { plant: 'plant3', id: 'line5', label: 'LINE A', x: 550, y: 500 },
    { plant: 'plant3', id: 'line6', label: 'LINE B', x: 650, y: 500 },
  ];

  const getNodeColor = (id: string) => {
    if (highlight.includes(id) || hoveredNode === id) {
      return '#F28B24'; // Calterio orange
    }
    return '#1F2937'; // Default gray
  };

  const getNodeFill = (id: string) => {
    if (highlight.includes(id) || hoveredNode === id) {
      return '#F28B24';
    }
    return '#121826'; // Surface color
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 800 650"
        className="w-full h-auto"
        onMouseLeave={() => setHoveredNode(null)}
      >
        {/* Background */}
        <rect width="800" height="650" fill="#0B0F14" />

        {/* Cloud section */}
        <rect x="0" y="0" width="800" height="220" fill="#131A47" opacity="0.1" />
        <text
          x="50"
          y="30"
          fill="#9CA3AF"
          fontSize="16"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
        >
          CLOUD
        </text>

        {/* Cloud FOS */}
        <rect
          x={cloudFOS.x}
          y={cloudFOS.y}
          width={cloudFOS.width}
          height={cloudFOS.height}
          rx="8"
          fill="#121826"
          stroke="#F28B24"
          strokeWidth="3"
        />
        <text
          x={cloudFOS.x + cloudFOS.width / 2}
          y={cloudFOS.y + 35}
          fill="#F28B24"
          fontSize="16"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="1px"
        >
          CALTERIO FOS
        </text>
        <text
          x={cloudFOS.x + cloudFOS.width / 2}
          y={cloudFOS.y + 60}
          fill="#9CA3AF"
          fontSize="12"
          fontFamily="Inter, sans-serif"
          textAnchor="middle"
        >
          Orchestration Platform
        </text>
        <text
          x={cloudFOS.x + cloudFOS.width / 2}
          y={cloudFOS.y + 80}
          fill="#9CA3AF"
          fontSize="12"
          fontFamily="Inter, sans-serif"
          textAnchor="middle"
        >
          High Availability Cluster
        </text>

        {/* Edge section */}
        <line
          x1="0"
          y1="220"
          x2="800"
          y2="220"
          stroke="#374151"
          strokeWidth="2"
        />
        <text
          x="50"
          y="250"
          fill="#9CA3AF"
          fontSize="16"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
        >
          EDGE
        </text>

        {/* Edge nodes */}
        {edgeNodes.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x}
              y={node.y}
              width={node.width}
              height={node.height}
              rx="8"
              fill={getNodeFill(node.id)}
              stroke={getNodeColor(node.id)}
              strokeWidth={highlight.includes(node.id) || hoveredNode === node.id ? 3 : 2}
              onMouseEnter={() => setHoveredNode(node.id)}
              className="cursor-pointer transition-all duration-200"
            />
            <text
              x={node.x + node.width / 2}
              y={node.y + node.height / 2}
              fill={getNodeColor(node.id)}
              fontSize="14"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="middle"
              letterSpacing="0.5px"
            >
              {node.label}
            </text>
            <text
              x={node.x + node.width / 2}
              y={node.y + node.height - 10}
              fill="#6B7280"
              fontSize="10"
              fontFamily="Inter, sans-serif"
              textAnchor="middle"
            >
              Edge Runtime
            </text>
          </g>
        ))}

        {/* Line nodes */}
        {lineNodes.map((line) => (
          <g key={line.id}>
            <circle
              cx={line.x}
              cy={line.y}
              r="25"
              fill={getNodeFill(line.id)}
              stroke={getNodeColor(line.id)}
              strokeWidth="2"
              onMouseEnter={() => setHoveredNode(line.id)}
              className="cursor-pointer transition-all duration-200"
            />
            <text
              x={line.x}
              y={line.y + 4}
              fill={getNodeColor(line.id)}
              fontSize="10"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {line.label}
            </text>
          </g>
        ))}

        {/* Connections: Cloud to Edge */}
        {edgeNodes.map((node) => (
          <path
            key={`cloud-${node.id}`}
            d={`M ${cloudFOS.x + cloudFOS.width / 2} ${cloudFOS.y + cloudFOS.height} L ${node.x + node.width / 2} ${node.y}`}
            stroke="#131A47"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            markerEnd="url(#arrowhead-blue)"
          />
        ))}

        {/* Connections: Edge to Lines */}
        {lineNodes.map((line) => {
          const plant = edgeNodes.find((p) => p.id === line.plant);
          if (!plant) return null;
          return (
            <path
              key={`edge-${line.id}`}
              d={`M ${plant.x + plant.width / 2} ${plant.y + plant.height} L ${line.x} ${line.y - 25}`}
              stroke="#F28B24"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead-orange)"
            />
          );
        })}

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
        </defs>

        {/* Network indicators */}
        <circle cx="750" cy="80" r="8" fill="#10B981" />
        <text x="765" y="85" fill="#9CA3AF" fontSize="12" fontFamily="Inter, sans-serif">
          Active
        </text>
      </svg>
    </div>
  );
}

