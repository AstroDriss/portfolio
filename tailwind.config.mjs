/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ["meow script"],
      },
    extend: {
      colors: {
        Background: {
          DEFAULT: "#fcfaf4"
        },
        Heading: {
          DEFAULT: "#111"
        }
      },
    },
  },
  plugins: [],
};
