/**
 * Calterio Brand Colors
 * Primary Orange: #F28B24 (CTAs, highlights)
 * Accent Red: #E10209 (alerts, critical states)
 * Dark Blue: #131A47 (backgrounds, depth)
 */

export const colors = {
  // Calterio Brand Colors
  calterio: {
    orange: "#F28B24",    // Primary accent
    red: "#E10209",        // Critical/accent
    darkBlue: "#131A47",   // Depth/backgrounds
  },
  // Dark Theme Base
  background: "#0B0F14",
  surface: "#121826",
  text: {
    primary: "#E5E7EB",
    secondary: "#9CA3AF",
    muted: "#6B7280",
  },
  // Semantic colors using Calterio palette
  accent: {
    primary: "#F28B24",    // Orange for CTAs
    secondary: "#E10209",  // Red for alerts
    tertiary: "#131A47",   // Blue for depth
  },
  // Border colors
  border: {
    default: "#1F2937",
    muted: "#374151",
  },
  // Status colors
  status: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#E10209",      // Calterio red
    info: "#3B82F6",
  },
} as const;

export type Colors = typeof colors;

