import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT:    "rgb(129 79 255)",        // main violet — buttons, links
          foreground: "rgb(255 255 255)",        // text on primary bg
          muted:      "rgb(129 79 255 / 0.15)", // soft tint — hover, pill bg
        },
        accent: {
          DEFAULT:    "rgb(225 115 255)",        // pink-violet — badges, tags
          foreground: "rgb(255 255 255)",
        },
        muted:      "rgb(160 170 187)",          // secondary text, icons
        border:     "rgb(233 237 248)",          // dividers, inputs
        surface:    "rgb(241 245 249)",          // card / section backgrounds
        background: "rgb(255 255 255)",          // page background
        foreground: "rgb(0 0 0)",               // primary text
      },
      fontFamily: {
        sans:    ["var(--font-inter)",   "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["4.5rem",    { lineHeight: "1.2", letterSpacing: "-0.04em", fontWeight: "600" }],
        h2: ["3.125rem",  { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "500" }],
        h3: ["1.5rem",    { lineHeight: "1.4", letterSpacing: "-0.02em", fontWeight: "500" }],
        h4: ["1.25rem",   { lineHeight: "1.4", letterSpacing: "-0.02em", fontWeight: "500" }],
        body:    ["1rem",      { lineHeight: "1.6", letterSpacing: "-0.01em" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
      },
    },
  },
} satisfies Config;
