/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      small: "300px",
      mobile: "360px",
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        "primary-color": "#36D6AD",
        "initial-page-color": "#3772FF",
        "button": "#FC7071",
        "button-hover": "#FF9D9E"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
