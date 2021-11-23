// Setting mode through webpack does not seem to trigger purge
// Instead, have to pass NODE_ENV=production explicitly in build script

module.exports = {
  // mode: "jit", // much faster, but kinda broken
  purge: {
    content: ["./src/**/*.html", "./src/**/*.{js,jsx}", "./src/**/*.{ts,tsx}"],
  },
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
