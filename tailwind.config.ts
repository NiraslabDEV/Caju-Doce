import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: "#6B1028",
          dark: "#4A0A1B",
          light: "#8C1A38",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E0BE6F",
          dark: "#A8842F",
        },
        cream: {
          DEFAULT: "#FBF6E9",
          dark: "#F2E9D2",
        },
        ink: "#2A0A12",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 10px 30px -10px rgba(74,10,27,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
