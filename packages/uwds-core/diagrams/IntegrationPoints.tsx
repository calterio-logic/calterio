import React, { useState } from 'react';

interface IntegrationPointsProps {
  highlight?: string[];
  className?: string;
}

export function IntegrationPoints({ highlight = [], className = '' }: IntegrationPointsProps) {
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null);

  const gateway = { x: 400, y: 250, width: 200, height: 100 };

  const integrations = [
    { id: 'erp', label: 'ERP', x: 100, y: 100, category: 'Enterprise' },
    { id: 'plm', label: 'PLM', x: 300, y: 100, category: 'Enterprise' },
    { id: 'cmms', label: 'CMMS', x: 500, y: 100, category: 'Enterprise' },
    { id: 'qms', label: 'QMS', x: 700, y: 100, category: 'Enterprise' },
    { id: 'opcua', label: 'OPC UA', x: 100, y: 450, category: 'Protocol' },
    { id: 'modbus', label: 'MODBUS', x: 300, y: 450, category: 'Protocol' },
    { id: 'profinet', label: 'PROFINET', x: 500, y: 450, category: 'Protocol' },
    { id: 'mqtt', label: 'MQTT', x: 700, y: 450, category: 'Protocol' },
  ];

  const getIntegrationColor = (id: string) => {
    if (highlight.includes(id) || hoveredIntegration === id) {
      return '#F28B24'; // Calterio orange
    }
    return '#1F2937'; // Default gray
  };

  const getIntegrationFill = (id: string) => {
    if (highlight.includes(id) || hoveredIntegration === id) {
      return '#F28B24';
    }
    return '#121826'; // Surface color
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 900 600"
        className="w-full h-auto"
        onMouseLeave={() => setHoveredIntegration(null)}
      >
        {/* Background */}
        <rect width="900" height="600" fill="#0B0F14" />

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
          INTEGRATION GATEWAY
        </text>

        {/* Enterprise section */}
        <text
          x="50"
          y="80"
          fill="#9CA3AF"
          fontSize="16"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
        >
          ENTERPRISE SYSTEMS
        </text>

        {/* Protocol section */}
        <text
          x="50"
          y="430"
          fill="#9CA3AF"
          fontSize="16"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
        >
          PROTOCOLS
        </text>

        {/* Integration Gateway */}
        <rect
          x={gateway.x}
          y={gateway.y}
          width={gateway.width}
          height={gateway.height}
          rx="8"
          fill="#121826"
          stroke="#F28B24"
          strokeWidth="3"
        />
        <text
          x={gateway.x + gateway.width / 2}
          y={gateway.y + 35}
          fill="#F28B24"
          fontSize="18"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="1px"
        >
          INTEGRATION
        </text>
        <text
          x={gateway.x + gateway.width / 2}
          y={gateway.y + 60}
          fill="#F28B24"
          fontSize="18"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="1px"
        >
          GATEWAY
        </text>
        <text
          x={gateway.x + gateway.width / 2}
          y={gateway.y + 85}
          fill="#9CA3AF"
          fontSize="12"
          fontFamily="Inter, sans-serif"
          textAnchor="middle"
        >
          Apache Camel
        </text>

        {/* Integrations */}
        {integrations.map((integration) => (
          <g key={integration.id}>
            <rect
              x={integration.x - 50}
              y={integration.y - 30}
              width="100"
              height="60"
              rx="8"
              fill={getIntegrationFill(integration.id)}
              stroke={getIntegrationColor(integration.id)}
              strokeWidth={highlight.includes(integration.id) || hoveredIntegration === integration.id ? 3 : 2}
              onMouseEnter={() => setHoveredIntegration(integration.id)}
              className="cursor-pointer transition-all duration-200"
            />
            <text
              x={integration.x}
              y={integration.y + 5}
              fill={getIntegrationColor(integration.id)}
              fontSize="14"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="middle"
              letterSpacing="0.5px"
            >
              {integration.label}
            </text>
            <text
              x={integration.x}
              y={integration.y + 20}
              fill="#6B7280"
              fontSize="10"
              fontFamily="Inter, sans-serif"
              textAnchor="middle"
            >
              {integration.category}
            </text>
          </g>
        ))}

        {/* Connections: Enterprise to Gateway */}
        {integrations
          .filter((i) => i.category === 'Enterprise')
          .map((integration) => (
            <path
              key={`enterprise-${integration.id}`}
              d={`M ${integration.x} ${integration.y + 30} L ${gateway.x + gateway.width / 2} ${gateway.y}`}
              stroke="#131A47"
              strokeWidth="2"
              fill="none"
              strokeDasharray="3,3"
              markerEnd="url(#arrowhead-blue)"
            />
          ))}

        {/* Connections: Gateway to Protocols */}
        {integrations
          .filter((i) => i.category === 'Protocol')
          .map((integration) => (
            <path
              key={`protocol-${integration.id}`}
              d={`M ${gateway.x + gateway.width / 2} ${gateway.y + gateway.height} L ${integration.x} ${integration.y - 30}`}
              stroke="#F28B24"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead-orange)"
            />
          ))}

        {/* Bidirectional indicators */}
        <path
          d="M 200 130 L 450 280"
          stroke="#131A47"
          strokeWidth="1"
          fill="none"
          strokeDasharray="2,2"
          opacity="0.5"
        />
        <text
          x="325"
          y="200"
          fill="#6B7280"
          fontSize="9"
          fontFamily="Inter, sans-serif"
          textAnchor="middle"
        >
          Bidirectional
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
      </svg>
    </div>
  );
}

