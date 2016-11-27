'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
};