/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-black": "var(--main-black)",
        "light-black": "var(--light-black)",
        "light-accent": "var(--light-accent)",
        "dark-accent": "var(--dark-accent)",
      },
    },
  },
  plugins: [],
};
