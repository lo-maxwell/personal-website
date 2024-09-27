import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        'background-alt': 'var(--color-background-alt)',
        text: 'var(--color-text)',
        'text-alt': 'var(--color-text-alt)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
};
export default config;
