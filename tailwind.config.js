/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
    },
    extend: {
      animation: {
        blink: "blink 1s steps(2, start) infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      slate: "#1E293B",
      oxford: "#0f172a",
      black: "#000000",
      white: "#FFFFFF",
      gray: "#bfbfbf",
      red: {
        light: "#FCA5A5",
        DEFAULT: "#EF4444",
        dark: "#B91C1C",
      },
      blue: {
        light: "#93C5FD",
        DEFAULT: "#3B82F6",
        dark: "#1D4ED8",
      },
      green: {
        light: "#A7F3D0",
        DEFAULT: "#10B981",
        dark: "#047857",
      },
      yellow: {
        light: "#FEF9C3",
        DEFAULT: "#FACC15",
        dark: "#CA8A04",
      },
      orange: {
        light: "#FFEDD5",
        DEFAULT: "#FB923C",
        dark: "#EA580C",
      },
      purple: {
        light: "#DDD6FE",
        DEFAULT: "#8B5CF6",
        dark: "#6D28D9",
      },
      pink: {
        light: "#FBCFE8",
        DEFAULT: "#EC4899",
        dark: "#BE185D",
      },
      gray: {
        light: "#E5E7EB",
        DEFAULT: "#6B7280",
        dark: "#374151",
      },
      indigo: {
        light: "#C7D2FE",
        DEFAULT: "#6366F1",
        dark: "#4338CA",
      },
      teal: {
        light: "#CCFBF1",
        DEFAULT: "#14B8A6",
        dark: "#115E59",
      },
      cyan: {
        light: "#CFFAFE",
        DEFAULT: "#06B6D4",
        dark: "#0E7490",
      },
      lime: {
        light: "#D9F99D",
        DEFAULT: "#84CC16",
        dark: "#4D7C0F",
      },
      emerald: {
        light: "#D1FAE5",
        DEFAULT: "#10B981",
        dark: "#064E3B",
      },
      rose: {
        light: "#FEE2E2",
        DEFAULT: "#F43F5E",
        dark: "#991B1B",
      },
      sky: {
        light: "#E0F2FE",
        DEFAULT: "#38BDF8",
        dark: "#0284C7",
      },
      violet: {
        light: "#EDE9FE",
        DEFAULT: "#8B5CF6",
        dark: "#6B21A8",
      },
      amber: {
        light: "#FEF3C7",
        DEFAULT: "#F59E0B",
        dark: "#92400E",
      },
      stone: {
        light: "#E7E5E4",
        DEFAULT: "#78716C",
        dark: "#57534E",
      },
      zinc: {
        light: "#F4F4F5",
        DEFAULT: "#71717A",
        dark: "#3F3F46",
      },
      neutral: {
        light: "#F5F5F5",
        DEFAULT: "#737373",
        dark: "#262626",
      },
      warmGray: {
        light: "#F5F5F4",
        DEFAULT: "#78716C",
        dark: "#44403C",
      },
      coolGray: {
        light: "#F3F4F6",
        DEFAULT: "#9CA3AF",
        dark: "#4B5563",
      },
      fuchsia: {
        light: "#F5D0FE",
        DEFAULT: "#D946EF",
        dark: "#86198F",
      },
      emerald: {
        light: "#DCFCE7",
        DEFAULT: "#22C55E",
        dark: "#166534",
      },
      slate: {
        light: "#E2E8F0",
        DEFAULT: "#64748B",
        dark: "#1E293B",
      },
      violet: {
        light: "#E9D5FF",
        DEFAULT: "#A855F7",
        dark: "#6B21A8",
      },
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
