/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        indigo: {
          950: "#17192D",
          900: "#1E213C",
          800: "#282B4A",
          700: "#32365B",
          600: "#404571",
          500: "#5A608F",
          400: "#8288B2",
          300: "#B8BDD9",
          200: "#D5D9EC",
        },
        vanilla: {
          50: "#F7F5EC",
          100: "#EEEBDA",
          200: "#E4E0CC",
          300: "#D2CEB6",
        },
        gold: {
          300: "#F0CD82",
          400: "#E2B45A",
          500: "#C9993E",
          600: "#9E7322",
        },
        status: {
          live: "#34D399",
          "live-dark": "#059669",
          alert: "#DC2626",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        18: "0.18",
        78: "0.78",
        88: "0.88",
        92: "0.92",
      },
    },
  },
  plugins: [],
};
