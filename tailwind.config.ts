import { theme } from "./src/components/ui/theme";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: theme.colors,
      borderRadius: theme.borderRadius,
      spacing: theme.spacing,
      fontFamily: theme.fontFamily,
    },
  },
  plugins: [],
} as const;