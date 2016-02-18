var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './src/build',
    filename: 'app.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_moduless/,
        query: {
          presets: ['es2015', 'react']
        }
    }]
  },
  target: 'atom'
};
