'use strict';
//  Summary:
//    Get webpack config for different targets

const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: false,
  cache: true,
  context: path.join(__dirname, 'app/web'),
  performance: {
    hints: false,
    maxEntrypointSize: 250,
    maxAssetSize: 1000
  },
  entry: {
    'dev-vendors': [
      'react-hot-loader',
      'babel-polyfill',
      'lodash',
      'react',
      'react-dom',
      'react-router',
      'react-redux',
      'react-router-redux',
      'redux',
      'redux-logger',
      'redux-thunk',
      'antd',
      'axios',
      'reselect'
    ]
  },

  output: {
    // Js bundle name, [name] will be replaced by which is in entry
    filename: '[name].js',
    // Where to save your build result
    path: path.join(__dirname, 'dll'),
    // Exposed asset path. NOTE: the end '/' is necessary
    publicPath: '/public/'
  },

  stats: 'errors-only',

  plugins: _.compact([
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll/manifest.json'),
      name: '[name]_[hash]',
      context: __dirname
    })
  ]),

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|build/,
        loader: 'babel-loader?cacheDirectory=true'
      },
      {
        test: /\.(ttf|eot|svg|woff)$/,
        loader: 'url-loader?limit=1000000' // TODO: it seems only inline base64 font works.
      },
      {
        test: /\.less$/,
        loader:
          'style-loader!css-loader?sourceMap!less-loader?{"sourceMap":true,"javascriptEnabled": true}'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
