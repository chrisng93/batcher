const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./src/constants/config.js');

let HOST;
config.HOST === 'http://localhost' ? HOST = '0.0.0.0' : HOST = config.HOST;
const PORT = config.PORT || '8000';

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    './src/index.jsx',
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders,
  },
  devServer: {
    contentBase: './public',
    host: HOST,
    port: PORT,
    inline: true,
    noInfo: true,
    historyApiFallback: true,
  },
  eslint: {
    configFile: './.eslintrc',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: './index.html' },
    ]),
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        HOST: JSON.stringify(config.HOST),
        PORT: JSON.stringify(config.PORT),
        API_URL: JSON.stringify(config.API_URL),
        SC_CLIENT_ID: JSON.stringify(config.SC_CLIENT_ID),
        SC_CLIENT_SECRET: JSON.stringify(config.SC_CLIENT_SECRET),
        SC_REDIRECT_URI: JSON.stringify(config.SC_REDIRECT_URI),
      },
    }),
  ],
};
