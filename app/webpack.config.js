"use strict";
const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "8888";

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    `./src/index.jsx`
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: "./public",
    noInfo: true,
    inline: true,
    port: PORT,
    host: HOST
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      {from: './index.html'}
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        HOST: JSON.stringify('http://localhost'),
        PORT: JSON.stringify('8888'),
        API_URL: JSON.stringify('http://localhost:8000'),
        SC_CLIENT_ID: JSON.stringify('test')
      }
    })
  ]
};
