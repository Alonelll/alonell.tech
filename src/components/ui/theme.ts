
export const theme = {
  colors: {
    // shadcn core semantic tokens: used by standard shadcn components.
    background: "rgb(var(--background) / <alpha-value>)",
    foreground: "rgb(var(--foreground) / <alpha-value>)",
    card: {
      DEFAULT: "rgb(var(--card) / <alpha-value>)",
      foreground: "rgb(var(--card-foreground) / <alpha-value>)",
    },
    popover: {
      DEFAULT: "rgb(var(--popover) / <alpha-value>)",
      foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
    },
    primary: {
      DEFAULT: "rgb(var(--primary) / <alpha-value>)",
      foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
    },
    secondary: {
      DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
      foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
    },
    muted: {
      DEFAULT: "rgb(var(--muted) / <alpha-value>)",
      foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
    },
    accent: {
      DEFAULT: "rgb(var(--accent) / <alpha-value>)",
      foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
    },
    destructive: {
      DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
      foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
    },

    // portfolio palette tokens: used by classes like bg-surface-container-high.
    surface: "rgb(var(--surface) / <alpha-value>)",
    "surface-dim": "rgb(var(--surface-dim) / <alpha-value>)",
    "surface-bright": "rgb(var(--surface-bright) / <alpha-value>)",
    "surface-container-lowest": "rgb(var(--surface-container-lowest) / <alpha-value>)",
    "surface-container-low": "rgb(var(--surface-container-low) / <alpha-value>)",
    "surface-container": "rgb(var(--surface-container) / <alpha-value>)",
    "surface-container-high": "rgb(var(--surface-container-high) / <alpha-value>)",
    "surface-container-highest": "rgb(var(--surface-container-highest) / <alpha-value>)",
    "surface-variant": "rgb(var(--surface-variant) / <alpha-value>)",
    "surface-tint": "rgb(var(--surface-tint) / <alpha-value>)",

    // on-* tokens: used for text/icons on top of matching background tokens.
    "on-background": "rgb(var(--on-background) / <alpha-value>)",
    "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
    "on-surface-variant": "rgb(var(--on-surface-variant) / <alpha-value>)",
    "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
    "on-primary-container": "rgb(var(--on-primary-container) / <alpha-value>)",
    "on-primary-fixed": "rgb(var(--on-primary-fixed) / <alpha-value>)",
    "on-primary-fixed-variant": "rgb(var(--on-primary-fixed-variant) / <alpha-value>)",
    "on-secondary": "rgb(var(--on-secondary) / <alpha-value>)",
    "on-secondary-container": "rgb(var(--on-secondary-container) / <alpha-value>)",
    "on-secondary-fixed": "rgb(var(--on-secondary-fixed) / <alpha-value>)",
    "on-secondary-fixed-variant": "rgb(var(--on-secondary-fixed-variant) / <alpha-value>)",
    "on-tertiary": "rgb(var(--on-tertiary) / <alpha-value>)",
    "on-tertiary-container": "rgb(var(--on-tertiary-container) / <alpha-value>)",
    "on-tertiary-fixed": "rgb(var(--on-tertiary-fixed) / <alpha-value>)",
    "on-tertiary-fixed-variant": "rgb(var(--on-tertiary-fixed-variant) / <alpha-value>)",
    "on-error": "rgb(var(--on-error) / <alpha-value>)",
    "on-error-container": "rgb(var(--on-error-container) / <alpha-value>)",

    // fixed/container variants: used for rich accents in hero/nav/cards.
    "primary-container": "rgb(var(--primary-container) / <alpha-value>)",
    "primary-fixed": "rgb(var(--primary-fixed) / <alpha-value>)",
    "primary-fixed-dim": "rgb(var(--primary-fixed-dim) / <alpha-value>)",
    "secondary-container": "rgb(var(--secondary-container) / <alpha-value>)",
    "secondary-fixed": "rgb(var(--secondary-fixed) / <alpha-value>)",
    "secondary-fixed-dim": "rgb(var(--secondary-fixed-dim) / <alpha-value>)",
    "tertiary-container": "rgb(var(--tertiary-container) / <alpha-value>)",
    "tertiary-fixed": "rgb(var(--tertiary-fixed) / <alpha-value>)",
    "tertiary-fixed-dim": "rgb(var(--tertiary-fixed-dim) / <alpha-value>)",
    "error-container": "rgb(var(--error-container) / <alpha-value>)",

    // inverse and utility tokens: used for contrast inversions and outlines.
    "inverse-primary": "rgb(var(--inverse-primary) / <alpha-value>)",
    "inverse-surface": "rgb(var(--inverse-surface) / <alpha-value>)",
    "inverse-on-surface": "rgb(var(--inverse-on-surface) / <alpha-value>)",
    outline: "rgb(var(--outline) / <alpha-value>)",
    "outline-variant": "rgb(var(--outline-variant) / <alpha-value>)",
    tertiary: "rgb(var(--tertiary) / <alpha-value>)",
    error: "rgb(var(--error) / <alpha-value>)",

    border: "rgb(var(--border) / <alpha-value>)",
    input: "rgb(var(--input) / <alpha-value>)",
    ring: "rgb(var(--ring) / <alpha-value>)",
  },
  borderRadius: {
    // default profile radius: terminal look with squared corners.
    DEFAULT: "0px",
    sm: "0px",
    md: "0px",
    lg: "0px",
    xl: "0px",
    full: "0px",
  },
  spacing: {
    // custom spacing steps: used for section rhythm and terminal spacing scale.
    18: "4.5rem",
    22: "5.5rem",
    30: "7.5rem",
  },
  fontFamily: {
    // typography roles from the provided design system naming.
    headline: ["JetBrains Mono", "monospace"],
    body: ["JetBrains Mono", "monospace"],
    label: ["JetBrains Mono", "monospace"],

    // compatibility alias used by existing app classes.
    heading: ["JetBrains Mono", "monospace"],
    mono: ["JetBrains Mono", "monospace"],
  },
} as const;

export type AppTheme = typeof theme;