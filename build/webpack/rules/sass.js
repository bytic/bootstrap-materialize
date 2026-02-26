const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "sass-loader",
      options: {
        sassOptions: {
          silenceDeprecations: ["import", "global-builtin", "color-functions", "if-function"],
        },
      },
    },
  ],
  sideEffects: true,
}
