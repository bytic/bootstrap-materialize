// 'use strict';

// webpack.config.js
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const config = require("./build/webpack/config");

const fontsRule = require("./build/webpack/rules/fonts");
const sassRule = require("./build/webpack/rules/sass");
const imagesRule = require("./build/webpack/rules/images");

module.exports = {
  entry: {
    'materialize': [
      path.join(__dirname, 'scss/materialize.scss'),
      path.join(__dirname, 'js/materialize.js')
    ],
    'materialize-vendors': [
      path.join(__dirname, 'scss/materialize-vendors.scss'),
      path.join(__dirname, 'js/materialize-vendors.js')
    ]
  },

  /**
   * Output settings for application scripts.
   * @type {Object}
   */
  output: {
    path: config.paths.public,
    publicPath: config.outputs.publicPath,
    filename: config.outputs.javascript.filename,
    chunkFilename: '[name].js'
  },

  module: {
    rules: [
      sassRule,
      fontsRule,
      imagesRule
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: devMode ? "css/[name].css" : "css/[name].[contenthash].css",
      chunkFilename: devMode ? "css/[id].css" : "css/[id].[contenthash].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  stats: "normal"
};
