import type { Config } from "tailwindcss";

const config: Config = {
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
        magnet: {
          blue:          "#37bce4",
          pink:          "#e63187",
          green:         "#66bb93",
          "blue-light":  "#88cfe7",
          "pink-light":  "#e889b6",
          "green-light": "#8fcbb1",
        },
      },
      fontFamily: {
        porkys: ["Porkys", "sans-serif"],
      },
      backgroundImage: {
        "magnet-gradient": "linear-gradient(135deg, #e63187 0%, #37bce4 50%, #66bb93 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
