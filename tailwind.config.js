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
        indigo: {
          950: "#17192D",
          900: "#1F223B",
          850: "#232642",
          800: "#282B4A",
          700: "#32365B",
          600: "#404571",
          500: "#5A608F",
          400: "#9399BC",
          300: "#B8BDD8",
          200: "#D8DBEB",
        },
        vanilla: {
          50: "#F7F5EC",
          100: "#EEEBDA",
          200: "#E4E0CC",
          300: "#D5D0B8",
          400: "#B5AF96",
        },
        ink: {
          primary: "#282B4A",
          secondary: "#42466B",
          muted: "#5A5F85",
        },
        status: {
          live: "#4CC38A",
          "live-dark": "#15803D",
          alert: "#E5484D",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
