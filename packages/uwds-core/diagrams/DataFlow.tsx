'use client';

import React, { useState } from 'react';

interface DataFlowProps {
  highlight?: string[];
  className?: string;
}

export function DataFlow({ highlight = [], className = '' }: DataFlowProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: 'device', label: 'DEVICE', x: 100, y: 300, type: 'circle' },
    { id: 'adapter', label: 'ADAPTER', x: 300, y: 300, type: 'rect' },
    { id: 'fos', label: 'FOS', x: 500, y: 300, type: 'rect' },
    { id: 'uns', label: 'UNS', x: 700, y: 200, type: 'rect' },
    { id: 'mos', label: 'MOS', x: 700, y: 400, type: 'rect' },
  ];

  const unsHierarchy = [
    { level: 0, label: 'FACTORY', x: 50, y: 100 },
    { level: 1, label: 'PLANT', x: 50, y: 130 },
    { level: 2, label: 'LINE', x: 50, y: 160 },
    { level: 3, label: 'CELL', x: 50, y: 190 },
    { level: 4, label: 'MACHINE', x: 50, y: 220 },
    { level: 5, label: 'STATE', x: 50, y: 250 },
  ];

  const getNodeColor = (id: string) => {
    if (highlight.includes(id) || hoveredNode === id) {
      return '#F28B24'; // Calterio orange
    }
    if (id === 'uns') {
      return '#131A47'; // Calterio dark blue
    }
    return '#1F2937'; // Default gray
  };

  const getNodeFill = (id: string) => {
    if (highlight.includes(id) || hoveredNode === id) {
      return '#F28B24';
    }
    if (id === 'uns') {
      return '#131A47';
    }
    return '#121826'; // Surface color
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 900 550"
        className="w-full h-auto"
        onMouseLeave={() => setHoveredNode(null)}
      >
        {/* Background */}
        <rect width="900" height="550" fill="#0B0F14" />

        {/* Title */}
        <text
          x="450"
          y="40"
          fill="#E5E7EB"
          fontSize="24"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
        >
          UNS DATA FLOW
        </text>

        {/* UNS Hierarchy */}
        <rect x="20" y="80" width="200" height="200" fill="#121826" stroke="#1F2937" strokeWidth="2" rx="8" />
        <text
          x="30"
          y="70"
          fill="#9CA3AF"
          fontSize="14"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
        >
          HIERARCHICAL NAMESPACE
        </text>
        {unsHierarchy.map((item) => (
          <g key={item.level}>
            <text
              x={item.x + 10}
              y={item.y}
              fill="#E5E7EB"
              fontSize="12"
              fontFamily="JetBrains Mono, monospace"
              fontWeight="400"
            >
              {item.label}
            </text>
            {item.level < 5 && (
              <line
                x1={item.x + 5}
                y1={item.y + 5}
                x2={item.x + 5}
                y2={item.y + 30}
                stroke="#374151"
                strokeWidth="1"
              />
            )}
          </g>
        ))}

        {/* Flow nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {node.type === 'circle' ? (
              <>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="40"
                  fill={getNodeFill(node.id)}
                  stroke={getNodeColor(node.id)}
                  strokeWidth={highlight.includes(node.id) || hoveredNode === node.id ? 3 : 2}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  className="cursor-pointer transition-all duration-200"
                />
                <text
                  x={node.x}
                  y={node.y + 5}
                  fill={getNodeColor(node.id)}
                  fontSize="12"
                  fontFamily="Inter, sans-serif"
                  fontWeight="700"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  letterSpacing="0.5px"
                >
                  {node.label}
                </text>
              </>
            ) : (
              <>
                <rect
                  x={node.x - 60}
                  y={node.y - 40}
                  width="120"
                  height="80"
                  rx="8"
                  fill={getNodeFill(node.id)}
                  stroke={getNodeColor(node.id)}
                  strokeWidth={highlight.includes(node.id) || hoveredNode === node.id ? 3 : 2}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  className="cursor-pointer transition-all duration-200"
                />
                <text
                  x={node.x}
                  y={node.y + 5}
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
              </>
            )}
          </g>
        ))}

        {/* Flow arrows */}
        <path
          d="M 140 300 L 240 300"
          stroke="#F28B24"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />
        <text
          x="190"
          y="290"
          fill="#F28B24"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          textAnchor="middle"
        >
          Real-time
        </text>

        <path
          d="M 360 300 L 440 300"
          stroke="#F28B24"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />

        <path
          d="M 560 300 L 640 200"
          stroke="#131A47"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-blue)"
        />
        <text
          x="600"
          y="240"
          fill="#131A47"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          textAnchor="middle"
        >
          Time-series
        </text>

        <path
          d="M 560 300 L 640 400"
          stroke="#131A47"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead-blue)"
        />
        <text
          x="600"
          y="360"
          fill="#131A47"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          textAnchor="middle"
        >
          Events
        </text>

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

        {/* Flow labels */}
        <text
          x="450"
          y="280"
          fill="#9CA3AF"
          fontSize="11"
          fontFamily="Inter, sans-serif"
          textAnchor="middle"
        >
          Event-driven updates
        </text>
      </svg>
    </div>
  );
}

