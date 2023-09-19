/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#89f08d",
        secondary: "#a8a29e",
        danger: "#dc2626",
      },
    },
  },
  plugins: [],
};
