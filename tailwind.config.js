/** @type {import("tailwindcss").Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,md,liquid,erb,serb,rb}",
    "./frontend/javascript/**/*.js",
    "./plugins/**/*.rb",
  ],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      serif: ["Oswald", ...defaultTheme.fontFamily.serif],
      sans: ["Cera Pro", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: colors.teal[600],
        "primary-dark": colors.teal[700],
        secondary: colors.teal[400],
        dark: colors.slate[500],
        gray: colors.zinc[400],
        "gray-light": colors.zinc[500],
        "gray-lightest": colors.zinc[200],
      },
    },
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    safelist: ["h1"],
    typography: (theme) => ({
      DEFAULT: {
        css: {
          "--tw-prose-body": theme("colors.zinc.700"),
          "--tw-prose-headings": theme("colors.zinc.900"),
          "--tw-prose-links": theme("colors.primary.600"),
          "--tw-prose-links-hover": theme("colors.primary.700"),
          "--tw-prose-underline": theme("colors.primary.500 / 0.2"),
          "--tw-prose-underline-hover": theme("colors.primary.500"),
          "--tw-prose-bold": theme("colors.zinc.900"),
          "--tw-prose-counters": theme("colors.zinc.900"),
          "--tw-prose-bullets": theme("colors.zinc.900"),
          "--tw-prose-hr": theme("colors.zinc.100"),
          "--tw-prose-quote-borders": theme("colors.zinc.200"),
          "--tw-prose-captions": theme("colors.zinc.400"),
          "--tw-prose-code": theme("colors.zinc.700"),
          "--tw-prose-code-bg": theme("colors.zinc.300 / 0.2"),
          "--tw-prose-pre-code": theme("colors.zinc.100"),
          "--tw-prose-pre-bg": theme("colors.zinc.900"),
          "--tw-prose-pre-border": "transparent",
          "--tw-prose-th-borders": theme("colors.zinc.200"),
          "--tw-prose-td-borders": theme("colors.zinc.100"),

          // Base
          color: "var(--tw-prose-body)",
          lineHeight: theme("lineHeight.7"),
          "> *": {
            marginTop: theme("spacing.10"),
            marginBottom: theme("spacing.10"),
          },
          p: {
            marginTop: theme("spacing.7"),
            marginBottom: theme("spacing.7"),
          },
          "[class~='lead']": {
            fontSize: theme("fontSize.xl")[0],
            lineHeight: theme("lineHeight.7"),
            marginTop: theme("spacing.12"),
            marginBottom: theme("spacing.8"),
          },

          // Headings
          "h2, h3, h4": {
            color: "var(--tw-prose-headings)",
            fontWeight: theme("fontWeight.semibold"),
            marginBottom: theme("spacing.4"),
            marginTop: theme("spacing.4"),
          },
          h1: {
            fontSize: theme("fontSize.4xl")[0],
            lineHeight: theme("lineHeight.7"),
          },
          h2: {
            fontSize: theme("fontSize.2xl")[0],
            lineHeight: theme("lineHeight.7"),
          },
          h3: {
            fontSize: theme("fontSize.xl")[0],
            lineHeight: theme("lineHeight.7"),
          },
          h4: {
            fontSize: theme("fontSize.base")[0],
            lineHeight: theme("lineHeight.7"),
          },
          ":is(h2, h3, h4) + *": {
            marginTop: 0,
          },

          // Inline elements
          a: {
            color: "var(--tw-prose-links)",
            fontWeight: theme("fontWeight.semibold"),
            textDecoration: "underline",
            textDecorationColor: "var(--tw-prose-underline)",
            transitionProperty: "color, text-decoration-color",
            transitionDuration: theme("transitionDuration.150"),
            transitionTimingFunction: theme("transitionTimingFunction.in-out"),
          },
          "a:hover": {
            color: "var(--tw-prose-links-hover)",
            textDecorationColor: "var(--tw-prose-underline-hover)",
          },
          strong: {
            color: "var(--tw-prose-bold)",
            fontWeight: theme("fontWeight.semibold"),
          },

          // Lists
          ul: {
            listStyleType: "disc",
          },
          ol: {
            listStyleType: "decimal",
          },
          "ul, ol": {
            paddingLeft: theme("spacing.6"),
          },
          li: {
            marginTop: theme("spacing.4"),
            marginBottom: theme("spacing.4"),
            paddingLeft: theme("spacing[3.5]"),
          },
          "li::marker": {
            fontSize: theme("fontSize.sm")[0],
            fontWeight: theme("fontWeight.semibold"),
          },
          "ol > li::marker": {
            color: "var(--tw-prose-counters)",
          },
          "ul > li::marker": {
            color: "var(--tw-prose-bullets)",
          },
          "li :is(ol, ul)": {
            marginTop: theme("spacing.4"),
            marginBottom: theme("spacing.4"),
          },
          "li :is(li, p)": {
            marginTop: theme("spacing.3"),
            marginBottom: theme("spacing.3"),
          },

          // Horizontal rules
          hr: {
            marginTop: theme("spacing.20"),
            marginBottom: theme("spacing.20"),
            borderTopWidth: "1px",
            borderColor: "var(--tw-prose-hr)",
            "@screen lg": {
              marginLeft: `calc(${theme("spacing.12")} * -1)`,
              marginRight: `calc(${theme("spacing.12")} * -1)`,
            },
          },
        },
      },
    }),
  },
};
