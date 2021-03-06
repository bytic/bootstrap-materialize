// 'use strict';

// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require("./build/webpack/config");

const fontsRule = require("./build/webpack/rules/fonts");
const sassRule = require("./build/webpack/rules/sass");
const lessRule = require("./build/webpack/rules/less");
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
      lessRule,
      sassRule,
      fontsRule,
      imagesRule,
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {importLoaders: 1},
          }],
        })
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin(config.outputs.css),
  ],
  stats: "normal"
};
