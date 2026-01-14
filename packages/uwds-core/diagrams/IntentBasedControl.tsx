'use client';

import React, { useState } from 'react';

interface IntentBasedControlProps {
  activeStage?: 'intent' | 'validation' | 'execution' | 'confirmation';
  className?: string;
}

export function IntentBasedControl({ activeStage, className = '' }: IntentBasedControlProps) {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);

  const stages = [
    {
      id: 'intent',
      label: 'HIGH-LEVEL INTENT',
      x: 150,
      y: 200,
      width: 180,
      height: 100,
      examples: ['start_operation()', 'pause_machine()', 'set_recipe()'],
    },
    {
      id: 'validation',
      label: 'VALIDATION',
      x: 400,
      y: 200,
      width: 180,
      height: 100,
      checks: ['Safety gates', 'State checks', 'Authorization'],
    },
    {
      id: 'execution',
      label: 'EXECUTION',
      x: 650,
      y: 200,
      width: 180,
      height: 100,
      details: ['State machine', 'Edge runtime', '<100ms'],
    },
    {
      id: 'confirmation',
      label: 'CONFIRMATION',
      x: 400,
      y: 400,
      width: 180,
      height: 100,
      details: ['Status update', 'Event emission', 'Audit log'],
    },
  ];

  const getStageColor = (stageId: string) => {
    if (activeStage === stageId || hoveredStage === stageId) {
      return '#F28B24'; // Calterio orange
    }
    return '#1F2937'; // Default gray
  };

  const getStageFill = (stageId: string) => {
    if (activeStage === stageId || hoveredStage === stageId) {
      return '#F28B24';
    }
    return '#121826'; // Surface color
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 980 550"
        className="w-full h-auto"
        onMouseLeave={() => setHoveredStage(null)}
        role="img"
        aria-label="Intent-Based Control Flow Diagram"
      >
        <title>Intent-Based Control Flow</title>
        {/* Background */}
        <rect width="980" height="550" fill="#0B0F14" />

        {/* Title */}
        <text
          x="490"
          y="40"
          fill="#E5E7EB"
          fontSize="24"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
        >
          INTENT-BASED CONTROL FLOW
        </text>

        {/* Stages */}
        {stages.map((stage) => (
          <g key={stage.id}>
            <rect
              x={stage.x}
              y={stage.y}
              width={stage.width}
              height={stage.height}
              rx="8"
              fill={getStageFill(stage.id)}
              stroke={getStageColor(stage.id)}
              strokeWidth={activeStage === stage.id || hoveredStage === stage.id ? 3 : 2}
              onMouseEnter={() => setHoveredStage(stage.id)}
              className="cursor-pointer transition-all duration-200"
            />
            <text
              x={stage.x + stage.width / 2}
              y={stage.y + 25}
              fill={
                activeStage === stage.id || hoveredStage === stage.id
                  ? '#0B0F14' // Dark text on orange background
                  : '#E5E7EB' // Light text on dark background
              }
              fontSize="13"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              textAnchor="middle"
              letterSpacing="0.5px"
            >
              {stage.label}
            </text>

            {/* Stage details */}
            {stage.examples && (
              <text
                x={stage.x + stage.width / 2}
                y={stage.y + 50}
                fill={
                  activeStage === stage.id || hoveredStage === stage.id
                    ? '#374151' // Darker gray on orange background
                    : '#9CA3AF' // Light gray on dark background
                }
                fontSize="11"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="500"
                textAnchor="middle"
              >
                {stage.examples[0]}
              </text>
            )}
            {stage.checks && (
              <text
                x={stage.x + stage.width / 2}
                y={stage.y + 50}
                fill={
                  activeStage === stage.id || hoveredStage === stage.id
                    ? '#374151' // Darker gray on orange background
                    : '#9CA3AF' // Light gray on dark background
                }
                fontSize="11"
                fontFamily="Inter, sans-serif"
                fontWeight="500"
                textAnchor="middle"
              >
                {stage.checks[0]}
              </text>
            )}
            {stage.details && (
              <text
                x={stage.x + stage.width / 2}
                y={stage.y + 50}
                fill={
                  activeStage === stage.id || hoveredStage === stage.id
                    ? '#374151' // Darker gray on orange background
                    : '#9CA3AF' // Light gray on dark background
                }
                fontSize="11"
                fontFamily="Inter, sans-serif"
                fontWeight="500"
                textAnchor="middle"
              >
                {stage.details[0]}
              </text>
            )}
          </g>
        ))}

        {/* Flow arrows */}
        <path
          d="M 330 250 L 400 250"
          stroke="#F28B24"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />
        <path
          d="M 580 250 L 650 250"
          stroke="#F28B24"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />
        <path
          d="M 490 300 L 490 400"
          stroke="#F28B24"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />

        {/* Safety gate */}
        <rect x="350" y="240" width="100" height="20" fill="#E10209" rx="4" />
        <text
          x="400"
          y="253"
          fill="#FFFFFF"
          fontSize="11"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          SAFETY GATE
        </text>

        {/* State machine compilation */}
        <rect x="620" y="240" width="100" height="20" fill="#131A47" rx="4" />
        <text
          x="670"
          y="253"
          fill="#E5E7EB"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          COMPILE
        </text>

        {/* Edge execution indicator */}
        <circle cx="740" cy="250" r="15" fill="#E10209" />
        <text
          x="740"
          y="255"
          fill="#0B0F14"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          E
        </text>
        <text
          x="760"
          y="255"
          fill="#E5E7EB"
          fontSize="11"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
        >
          Edge
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
        </defs>

        {/* Rejection path */}
        <path
          d="M 400 300 Q 300 350 200 450"
          stroke="#E10209"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead-red)"
        />
        <text
          x="250"
          y="380"
          fill="#E10209"
          fontSize="12"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
        >
          REJECTED
        </text>

        <defs>
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
      </svg>
    </div>
  );
}

