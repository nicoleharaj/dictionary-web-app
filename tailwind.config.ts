import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#050505",
        white: "#FFFFFF",
        neutral: {
          200: "#F4F4F4",
          300: "#E9E9E9",
          400: "#757575",
          500: "#3A3A3A",
          600: "#2D2D2D",
          700: "1F1F1F",
        },
        purple: "#A445ED",
        red: "#FF5252",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
        serif: ["var(--font-lora)", "serif"],
      },
      fontSize: {
        "heading-lg": ["64px", "77px"],
        "heading-md": ["24px", "29px"],
        "heading-sm": ["20px", "24px"],
        "body-md": ["18px", "24px"],
        "body-sm": ["14px", "17px"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
