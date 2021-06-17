const tailwindcss = require("tailwindcss"); // TODO: add eslint exception for config files...
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), autoprefixer],
};
