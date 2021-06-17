module.exports = {
  purge: [
    // not sure which directory should be referenced for purge...
    // "./src/**/*.html",
    // "./src/**/*.js",
    // "./src/**/*.ts",
    // "./src/**/*.tsx",
    "./public/**/*.html",
    "./public/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
