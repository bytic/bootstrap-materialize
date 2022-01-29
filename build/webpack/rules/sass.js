const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "sass-loader",
  ],
  sideEffects: true,
}
