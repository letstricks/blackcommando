/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tactical: {
          950: "#060709",
          900: "#0b0d11",
          850: "#101318",
          800: "#161a22",
          700: "#1f242e",
          600: "#2a313e",
          500: "#3d4657",
          400: "#606d84",
          300: "#919db1",
          200: "#c7cfdb",
          100: "#e9edf3",
        },
        badge: {
          gold: "#D4AF37",
          "gold-light": "#F3E5AB",
          "gold-dark": "#997A15",
          red: "#DC2626",
          "red-light": "#EF4444",
        },
      },
      backgroundImage: {
        'tactical-grid': "radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.08) 1px, transparent 0)",
        'tactical-stripes': "repeating-linear-gradient(45deg, rgba(220, 38, 38, 0.03) 0, rgba(220, 38, 38, 0.03) 10px, transparent 10px, transparent 20px)",
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'red-glow': '0 0 25px -5px rgba(220, 38, 38, 0.3)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
