import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        expandLeft: 'expandLeft 600ms ease-out forwards',
        expandRight: 'expandRight 600ms ease-out forwards 60ms',
      },
      keyframes: {
        expandLeft: {
          'from': { width: '0' },
          'to': { width: '45%' }
        },
        expandRight: {
          'from': { width: '0' },
          'to': { width: '45%' }
        }
      },
      fontFamily: {
        script: ['var(--font-great-vibes)', 'cursive'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;