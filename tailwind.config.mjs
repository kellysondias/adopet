/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      mobile: "360px",
      tablet: "768px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
