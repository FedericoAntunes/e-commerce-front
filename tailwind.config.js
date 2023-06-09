module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      xs: "456px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
