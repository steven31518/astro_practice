/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        default: `var(--color-text)`,
        light: `var(color-light-text)`,
        dark: `var(--color-dark-text)`,
      },
      backgroundColor: {
        default: `var(--color-background)`,
        light: `var(--color-light-background)`,
        dark: `var(--color-dark-background)`,
        border: `var(--color-border)`,
      },
      borderColor: {
        default: `var(--color-border)`,
      },
      colors: {
        primary: "#89f08d",
        secondary: "#a8a29e",
        danger: "#dc2626",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
