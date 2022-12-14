/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    // "./pages/**/*.{ts,tsx}",
    // "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    // require('flowbite/plugin')
  ],
};
