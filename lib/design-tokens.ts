export const colors = {
  brand: {
    primary: "rgb(129 79 255)",
    accent:  "rgb(225 115 255)",
    soft:    "rgb(129 79 255 / 0.15)",
  },
  neutral: {
    900: "rgb(0 0 0)",
    500: "rgb(160 170 187)",
    200: "rgb(233 237 248)",
    100: "rgb(241 245 249)",
    0:   "rgb(255 255 255)",
  },
} as const;

export const typography = {
  h1:     { size: 72, lineHeight: 1.2,  tracking: "-0.04em", weight: 600 },
  h2:     { size: 50, lineHeight: 1.2,  tracking: "-0.01em", weight: 500 },
  h3:     { size: 24, lineHeight: 1.4,  tracking: "-0.02em", weight: 500 },
  h4:     { size: 20, lineHeight: 1.4,  tracking: "-0.02em", weight: 500 },
  body:   { size: 16, lineHeight: 1.6,  tracking: "-0.01em", weight: 400 },
  bodySm: { size: 14, lineHeight: 24,   tracking: "-0.01em", weight: 400 },
} as const;

export const fonts = {
  sans:    "Inter",
  display: "Poppins",
} as const;
