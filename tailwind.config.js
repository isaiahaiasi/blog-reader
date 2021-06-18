module.exports = {
  // mode: "jit", // much faster, but kinda broken
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx}", "./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {},
  plugins: [],
};
