module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "456px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

  },
  plugins: [require("flowbite/plugin")],
};
