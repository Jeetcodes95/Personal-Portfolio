// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        slideInRight: "slideInRight 2s ease-out"
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
    },
  },
  plugins: [],
};

export default config;
