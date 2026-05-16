/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        // Devotional palette
        maroon: {
          DEFAULT: "var(--maroon)",
          deep: "var(--maroon-deep)",
          light: "var(--maroon-light)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          bright: "var(--gold-bright)",
          deep: "var(--gold-deep)",
        },
        ivory: {
          DEFAULT: "var(--ivory)",
          warm: "var(--ivory-warm)",
        },
        saffron: {
          DEFAULT: "var(--saffron)",
          light: "var(--saffron-light)",
        },
        crimson: "var(--crimson)",
        // Aliases used in existing pages
        "deep-red": "var(--maroon)",
        parchment: "var(--ivory)",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        ornate: ["'Cormorant Garamond'", "serif"],
        body: ["'Inter'", "sans-serif"],
        devanagari: ["'Noto Serif Devanagari'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        serif: ["'Cormorant Garamond'", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        ornate: "2px",
      },
      boxShadow: {
        gold: "0 0 16px oklch(0.72 0.12 75 / 0.35)",
        "gold-sm": "0 0 8px oklch(0.72 0.12 75 / 0.25)",
        "gold-lg": "0 0 32px oklch(0.72 0.12 75 / 0.45)",
        maroon: "0 4px 20px oklch(0.32 0.12 20 / 0.4)",
        devotional: "0 2px 12px oklch(0.72 0.12 75 / 0.12), 0 1px 3px oklch(0.32 0.12 20 / 0.08)",
        "devotional-hover": "0 4px 20px oklch(0.72 0.12 75 / 0.22), 0 2px 6px oklch(0.32 0.12 20 / 0.12)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 8px oklch(0.72 0.12 75 / 0.3)" },
          "50%": { boxShadow: "0 0 24px oklch(0.72 0.12 75 / 0.6)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "fade-in": "fade-in 0.4s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};
