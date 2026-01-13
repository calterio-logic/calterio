/**
 * UWDS Layout Tokens
 * Max Width: 1200-1320px
 * Grid: 12-column
 */

export const layout = {
  maxWidth: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    "2xl": "1320px",
  },
  container: {
    maxWidth: "1320px",
    padding: {
      desktop: "1.5rem",  // 24px
      mobile: "1rem",    // 16px
    },
  },
  grid: {
    columns: 12,
    gap: {
      sm: "1rem",   // 16px
      md: "1.5rem", // 24px
      lg: "2rem",   // 32px
    },
  },
  borderRadius: {
    none: "0",
    sm: "6px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
} as const;

export type Layout = typeof layout;

