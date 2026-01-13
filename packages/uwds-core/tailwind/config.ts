import type { Config } from "tailwindcss";
import { colors } from "../tokens/colors";
import { typography } from "../tokens/typography";
import { spacing } from "../tokens/spacing";
import { layout } from "../tokens/layout";

const config: Config = {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Calterio brand colors
        calterio: colors.calterio,
        // Semantic colors
        accent: colors.accent,
        // Status colors
        status: colors.status,
        // Base colors
        background: colors.background,
        surface: colors.surface,
        text: colors.text,
        border: colors.border,
      },
      fontFamily: {
        sans: typography.fontFamily.sans,
        mono: typography.fontFamily.mono,
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

