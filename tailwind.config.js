/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["kanit", "ui-sans-serif", "system-ui"]
      },
      colors: {
        blue: {
          10: "#ecf3fc",
          200: "#d9e7f8",
          300: "#c6dcf5",
          400: "#b3d0f1",
          50: "#a0c4ee",
          100: "#8db8eb",
          200: "#7aace7",
          300: "#67a1e4",
          400: "#5495e0",
          500: "#4189DD",
          600: "#3b7bc7",
          700: "#346eb1",
          800: "#2e609b",
          900: "#275285",
          900: "#21456f",
          900: "#1a3758",
          900: "#132942",
          900: "#0d1b2c",
          900: "#060e16"
        }
      }
    }
  },
  plugins: []
};
