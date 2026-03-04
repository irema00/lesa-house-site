import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        lesa: {
          cream: "#F4F1EC",
          black: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
