import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E3A5F",
          700: "#162d4a",
          800: "#0f2035",
        },
        amber: {
          DEFAULT: "#C9A84C",
          light: "#d4b86a",
          dark: "#a88a3a",
        },
        "light-gray": "#F5F7FA",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
