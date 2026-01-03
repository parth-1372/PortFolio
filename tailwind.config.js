/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // Zinc 950
        surface: "#18181b",    // Zinc 900
        surfaceHighlight: "#27272a", // Zinc 800
        border: "#3f3f46",     // Zinc 700
        textMain: "#fafafa",   // Zinc 50
        textSub: "#a1a1aa",    // Zinc 400
        textMuted: "#71717a",  // Zinc 500
        primary: "#3b82f6",    // Blue 500
        primaryDark: "#2563eb", // Blue 600
        accent: "#8b5cf6",     // Violet 500
        success: "#10b981",    // Emerald 500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
