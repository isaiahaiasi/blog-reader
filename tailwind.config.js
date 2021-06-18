module.exports = {
  mode: "jit", // much faster
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx}", "./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
