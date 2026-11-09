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
        // Legacy colors kept for backward compatibility during phased rollout
        dodgerBlue: "#0B63C1",
        deepSky: "#62BFED",
        babyBlue: "#508FE2",
        periwinkle: "#C2BBF0",
        lavendar: "#EAD4ED",

        // CSS Variable-backed Bento Tokens
        bento: {
          canvas: "var(--bento-canvas)",
          card: "var(--bento-card)",
          cardMuted: "var(--bento-card-muted)",
          border: "var(--bento-border)",
          borderHover: "var(--bento-border-hover)",
          primary: "var(--bento-primary)",
          primaryHover: "var(--bento-primary-hover)",
          primarySubtle: "var(--bento-primary-subtle)",
          textPrimary: "var(--bento-text-primary)",
          textSecondary: "var(--bento-text-secondary)",
          textMuted: "var(--bento-text-muted)",
        },
        role: {
          admin: "var(--role-admin)",
          adminSubtle: "var(--role-admin-subtle)",
          teacher: "var(--role-teacher)",
          teacherSubtle: "var(--role-teacher-subtle)",
          student: "var(--role-student)",
          studentSubtle: "var(--role-student-subtle)",
          parent: "var(--role-parent)",
          parentSubtle: "var(--role-parent-subtle)",
          staff: "#0284C7",
        },
      },
      boxShadow: {
        bento: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        bentoHover: "0 10px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
