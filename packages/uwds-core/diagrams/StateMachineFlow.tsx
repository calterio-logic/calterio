'use client';

import React, { useState } from 'react';

interface StateMachineFlowProps {
  currentState?: 'IDLE' | 'READY' | 'RUNNING' | 'PAUSED' | 'FAULTED' | 'MAINTENANCE';
  className?: string;
}

export function StateMachineFlow({ currentState, className = '' }: StateMachineFlowProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const states = [
    { id: 'IDLE', label: 'IDLE', x: 200, y: 200, color: '#1F2937' },
    { id: 'READY', label: 'READY', x: 400, y: 200, color: '#131A47' },
    { id: 'RUNNING', label: 'RUNNING', x: 600, y: 200, color: '#F28B24' },
    { id: 'PAUSED', label: 'PAUSED', x: 300, y: 350, color: '#9CA3AF' },
    { id: 'FAULTED', label: 'FAULTED', x: 500, y: 350, color: '#E10209' },
    { id: 'MAINTENANCE', label: 'MAINTENANCE', x: 200, y: 350, color: '#6B7280' },
  ];

  const transitions = [
    { from: 'IDLE', to: 'READY', label: 'prepare', guard: 'all_systems_ok' },
    { from: 'READY', to: 'RUNNING', label: 'start', guard: 'safety_clear' },
    { from: 'RUNNING', to: 'PAUSED', label: 'pause', guard: 'operator_request' },
    { from: 'PAUSED', to: 'RUNNING', label: 'resume', guard: 'conditions_met' },
    { from: 'RUNNING', to: 'FAULTED', label: 'error', guard: 'fault_detected' },
    { from: 'FAULTED', to: 'MAINTENANCE', label: 'maintain', guard: 'maintenance_mode' },
    { from: 'MAINTENANCE', to: 'IDLE', label: 'complete', guard: 'maintenance_done' },
    { from: 'RUNNING', to: 'IDLE', label: 'stop', guard: 'operation_complete' },
  ];

  const getStateColor = (stateId: string) => {
    if (currentState === stateId || hoveredState === stateId) {
      const state = states.find((s) => s.id === stateId);
      return state?.color || '#F28B24';
    }
    return '#1F2937';
  };

  const getStateFill = (stateId: string) => {
    if (currentState === stateId || hoveredState === stateId) {
      const state = states.find((s) => s.id === stateId);
      if (state?.color === '#F28B24') return '#F28B24';
      if (state?.color === '#E10209') return '#E10209';
      if (state?.color === '#131A47') return '#131A47';
      return state?.color || '#121826';
    }
    return '#121826';
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 900 500"
        className="w-full h-auto"
        onMouseLeave={() => setHoveredState(null)}
      >
        {/* Background */}
        <rect width="900" height="500" fill="#0B0F14" />

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
          MACHINE STATE TRANSITIONS
        </text>

        {/* States */}
        {states.map((state) => (
          <g key={state.id}>
            <circle
              cx={state.x}
              cy={state.y}
              r="50"
              fill={getStateFill(state.id)}
              stroke={getStateColor(state.id)}
              strokeWidth={currentState === state.id || hoveredState === state.id ? 4 : 2}
              onMouseEnter={() => setHoveredState(state.id)}
              className="cursor-pointer transition-all duration-200"
            />
            <text
              x={state.x}
              y={state.y + 5}
              fill={currentState === state.id || hoveredState === state.id ? '#0B0F14' : getStateColor(state.id)}
              fontSize="12"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="middle"
              letterSpacing="1px"
            >
              {state.label}
            </text>
          </g>
        ))}

        {/* Transitions */}
        {transitions.map((transition, index) => {
          const fromState = states.find((s) => s.id === transition.from);
          const toState = states.find((s) => s.id === transition.to);
          if (!fromState || !toState) return null;

          const dx = toState.x - fromState.x;
          const dy = toState.y - fromState.y;
          const angle = Math.atan2(dy, dx);
          const startX = fromState.x + Math.cos(angle) * 50;
          const startY = fromState.y + Math.sin(angle) * 50;
          const endX = toState.x - Math.cos(angle) * 50;
          const endY = toState.y - Math.sin(angle) * 50;

          // Calculate control points for curved arrows
          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;
          const perpAngle = angle + Math.PI / 2;
          const curveOffset = 30;
          const controlX = midX + Math.cos(perpAngle) * curveOffset;
          const controlY = midY + Math.sin(perpAngle) * curveOffset;

          return (
            <g key={index}>
              <path
                d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
                stroke={transition.to === 'FAULTED' ? '#E10209' : '#F28B24'}
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead-state)"
                opacity={hoveredState === transition.from || hoveredState === transition.to ? 1 : 0.6}
              />
              <text
                x={controlX}
                y={controlY - 10}
                fill="#9CA3AF"
                fontSize="10"
                fontFamily="Inter, sans-serif"
                textAnchor="middle"
              >
                {transition.label}
              </text>
            </g>
          );
        })}

        {/* Guard conditions */}
        <rect x="650" y="100" width="200" height="150" fill="#121826" stroke="#1F2937" strokeWidth="2" rx="8" />
        <text
          x="750"
          y="120"
          fill="#9CA3AF"
          fontSize="12"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
        >
          GUARD CONDITIONS
        </text>
        <text
          x="660"
          y="145"
          fill="#E5E7EB"
          fontSize="10"
          fontFamily="JetBrains Mono, monospace"
        >
          • all_systems_ok
        </text>
        <text
          x="660"
          y="165"
          fill="#E5E7EB"
          fontSize="10"
          fontFamily="JetBrains Mono, monospace"
        >
          • safety_clear
        </text>
        <text
          x="660"
          y="185"
          fill="#E5E7EB"
          fontSize="10"
          fontFamily="JetBrains Mono, monospace"
        >
          • fault_detected
        </text>
        <text
          x="660"
          y="205"
          fill="#E5E7EB"
          fontSize="10"
          fontFamily="JetBrains Mono, monospace"
        >
          • maintenance_done
        </text>
        <text
          x="660"
          y="225"
          fill="#E5E7EB"
          fontSize="10"
          fontFamily="JetBrains Mono, monospace"
        >
          • operation_complete
        </text>

        {/* Safety interlock indicator */}
        <circle cx="750" cy="300" r="20" fill="#E10209" />
        <text
          x="750"
          y="305"
          fill="#0B0F14"
          fontSize="12"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          !
        </text>
        <text
          x="750"
          y="330"
          fill="#E10209"
          fontSize="11"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          textAnchor="middle"
        >
          SAFETY INTERLOCK
        </text>

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowhead-state"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#F28B24" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

