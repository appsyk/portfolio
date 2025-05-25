import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // primary: "#06b6d4",
        primary: '#3b82f6',
        secondary: "#323232",
        'border-grey': "#cccccc",
        'light-grey': "#999999"
      },
    },
  },
  plugins: [],
} satisfies Config;
