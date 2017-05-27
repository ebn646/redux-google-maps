const webpack = require('webpack');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
      'babel-loader',
     ],
    }]
  },
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  plugins: [
    new DashboardPlugin({ port: 8080 })
  ],
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './',
  //   port:8081,
  // }
};
