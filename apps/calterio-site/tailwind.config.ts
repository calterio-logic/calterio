import type { Config } from "tailwindcss";
import { colors, typography, spacing, layout } from "@calterio/uwds-core/tokens";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/uwds-core/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Calterio brand colors
        calterio: {
          orange: colors.calterio.orange,
          red: colors.calterio.red,
          darkBlue: colors.calterio.darkBlue,
        },
        // Semantic colors
        accent: {
          primary: colors.accent.primary,
          secondary: colors.accent.secondary,
          tertiary: colors.accent.tertiary,
        },
        // Status colors
        status: {
          success: colors.status.success,
          warning: colors.status.warning,
          error: colors.status.error,
          info: colors.status.info,
        },
        // Base colors
        background: colors.background,
        surface: colors.surface,
        text: {
          primary: colors.text.primary,
          secondary: colors.text.secondary,
          muted: colors.text.muted,
        },
        border: {
          default: colors.border.default,
          muted: colors.border.muted,
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
      spacing: spacing,
      maxWidth: layout.maxWidth,
      borderRadius: layout.borderRadius,
      boxShadow: layout.shadows,
      // Custom spacing for sections
      sectionPadding: {
        desktop: spacing.section.desktop,
        mobile: spacing.section.mobile,
      },
    },
  },
  plugins: [],
};

export default config;
