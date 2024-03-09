import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        keycap:
          "-10px -10px 10px rgba(255, 255, 255, 0.25), 10px 5px 10px rgba(0,0,0,0.15)",
        keybase:
          "0 0 0 1.5px rgba(0, 0, 0, 0.75), 10px 20px 25px rgba(0,0,0,0.4)",
      },
      gridColumn: {
        "span-25": "span 25 / span 25",
      },
      fontFamily: {
        manjari: ["var(--font-manjari)"],
      },
    },
  },
  plugins: [],
};
export default config;
