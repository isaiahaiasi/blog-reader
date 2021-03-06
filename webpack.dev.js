const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: {
      verbose: true,
    },
    port: process.env.PORT ?? 8080,
  },
});
