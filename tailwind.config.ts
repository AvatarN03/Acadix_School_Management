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
        colors: {
        dodgerBlue: "#0B63C1",
        deepSky: "#62BFED",
        babyBlue: "#508FE2",
        periwinkle: "#C2BBF0",
        lavendar: "#EAD4ED",
      }
    },
  },
  plugins: [],
};
export default config;
