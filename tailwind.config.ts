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
          blue:  "#37bce4",
          pink:  "#e63187",
          green: "#66bb93",
          cream: "#faf9f7",
        },
      },
      fontFamily: {
        porkys: ["Porkys", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
