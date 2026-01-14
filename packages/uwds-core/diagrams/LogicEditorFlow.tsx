'use client';

import React, { useState } from 'react';

interface LogicEditorFlowProps {
  activeStep?: 'ladder' | 'structured' | 'simulation' | 'deployment';
  className?: string;
}

export function LogicEditorFlow({ activeStep, className = '' }: LogicEditorFlowProps) {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const steps = [
    {
      id: 'ladder',
      label: 'LADDER LOGIC',
      x: 150,
      y: 200,
      width: 180,
      height: 120,
      description: 'Visual drag-and-drop programming',
    },
    {
      id: 'structured',
      label: 'STRUCTURED TEXT',
      x: 400,
      y: 200,
      width: 180,
      height: 120,
      description: 'Code-based programming with IntelliSense',
    },
    {
      id: 'simulation',
      label: 'REAL-TIME SIMULATION',
      x: 650,
      y: 200,
      width: 180,
      height: 120,
      description: 'Test programs before deployment',
    },
    {
      id: 'deployment',
      label: 'DEPLOYMENT',
      x: 400,
      y: 400,
      width: 180,
      height: 120,
      description: 'Export to PLCopen XML, OpenPLC',
    },
  ];

  const getStepColor = (stepId: string) => {
    if (activeStep === stepId || hoveredStep === stepId) {
      return '#F28B24'; // Calterio orange
    }
    return '#1F2937'; // Default gray
  };

  const getStepFill = (stepId: string) => {
    if (activeStep === stepId || hoveredStep === stepId) {
      return '#F28B24';
    }
    return '#121826'; // Surface color
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 980 600"
        className="w-full h-auto"
        onMouseLeave={() => setHoveredStep(null)}
        role="img"
        aria-label="Logic Editor Workflow Diagram"
      >
        <title>Logic Editor Workflow</title>
        {/* Background */}
        <rect width="980" height="600" fill="#0B0F14" />

        {/* Title */}
        <text
          x="490"
          y="50"
          fill="#E5E7EB"
          fontSize="24"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
        >
          LOGIC EDITOR WORKFLOW
        </text>

        {/* Steps */}
        {steps.map((step, index) => (
          <g key={step.id}>
            {/* Step rectangle */}
            <rect
              x={step.x}
              y={step.y}
              width={step.width}
              height={step.height}
              rx="8"
              fill={getStepFill(step.id)}
              stroke={getStepColor(step.id)}
              strokeWidth={activeStep === step.id || hoveredStep === step.id ? 3 : 2}
              onMouseEnter={() => setHoveredStep(step.id)}
              className="cursor-pointer transition-all duration-200"
            />
            {/* Step label */}
            <text
              x={step.x + step.width / 2}
              y={step.y + 35}
              fill={
                activeStep === step.id || hoveredStep === step.id
                  ? '#0B0F14' // Dark text on orange background
                  : '#E5E7EB' // Light text on dark background
              }
              fontSize="14"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              textAnchor="middle"
              letterSpacing="1px"
            >
              {step.label}
            </text>
            {/* Step description */}
            <text
              x={step.x + step.width / 2}
              y={step.y + 60}
              fill={
                activeStep === step.id || hoveredStep === step.id
                  ? '#374151' // Darker gray on orange background
                  : '#9CA3AF' // Light gray on dark background
              }
              fontSize="11"
              fontFamily="Inter, sans-serif"
              fontWeight="500"
              textAnchor="middle"
            >
              {step.description}
            </text>
            {/* Step number */}
            <circle
              cx={step.x + step.width / 2}
              cy={step.y + 90}
              r="15"
              fill={getStepColor(step.id)}
            />
            <text
              x={step.x + step.width / 2}
              y={step.y + 95}
              fill="#0B0F14"
              fontSize="14"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {index + 1}
            </text>
          </g>
        ))}

        {/* Flow arrows */}
        <path
          d="M 330 260 L 400 260"
          stroke="#F28B24"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />
        <path
          d="M 580 260 L 650 260"
          stroke="#F28B24"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />
        <path
          d="M 490 320 L 490 400"
          stroke="#F28B24"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
        />

        {/* Export paths */}
        <path
          d="M 240 260 L 200 100 L 780 100 L 740 260"
          stroke="#131A47"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead-blue)"
        />
        <text
          x="490"
          y="90"
          fill="#131A47"
          fontSize="12"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          textAnchor="middle"
        >
          EXPORT/IMPORT
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

        {/* Editor interface mockup */}
        <rect
          x="150"
          y="200"
          width="180"
          height="120"
          rx="8"
          fill="none"
          stroke="#374151"
          strokeWidth="1"
          strokeDasharray="2,2"
          opacity="0.5"
        />
        <text
          x="240"
          y="280"
          fill="#9CA3AF"
          fontSize="11"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
          textAnchor="middle"
        >
          Editor Interface
        </text>
      </svg>
    </div>
  );
}

