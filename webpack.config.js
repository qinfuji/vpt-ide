'use strict';
//  Summary:
//    Get webpack config for different targets

const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
    hot: true,
    proxy: [
      {
        changeOrigin: true,
        context: ['/projects'],
        target: 'http://localhost:3000/mock/11'
      }
    ]
  },
  devtool:
    process.env.NODE_ENV == 'development'
      ? 'cheap-module-inline-source-map'
      : false,
  mode: process.env.NODE_ENV,
  cache: true,
  context: path.join(__dirname, './web'),
  target: 'web',
  performance: {
    hints: false,
    maxEntrypointSize: 250,
    maxAssetSize: 1000
  },
  entry: {
    main: {
      development: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=http://127.0.0.1:9000/__webpack_hmr',
        './index'
      ],
      production: ['./index']
    }[process.env.NODE_ENV]
  },

  output: {
    // Js bundle name, [name] will be replaced by which is in entry
    filename: '[name].js',
    // Where to save your build result
    path: path.join(__dirname, 'public'),
    // Exposed asset path. NOTE: the end '/' is necessary
    publicPath: '/public/'
  },

  stats: 'errors-only',

  resolve: {
    alias: {
      /*
       styled-components不能同事存在两个实例，可能会导致css错误，
       在vpt-components在使用lerna是在vpt-ide中是软连接，导致使用vpt root上的node_modules
       这里强制指定styled-components的路径
      */
      'styled-components': path.resolve(
        __dirname,
        './node_modules/styled-components/dist/styled-components.es.js'
      )
    }
  },

  plugins: _.compact([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    process.env.NODE_ENV == 'development' &&
      new webpack.DllReferencePlugin({
        context: path.join(__dirname, 'web'),
        manifest: require(path.join(__dirname, './dll/manifest.json'))
      }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './node_modules/monaco-editor/min/vs'),
        to: path.join(__dirname, 'public/libs/vs')
      },
      {
        from: path.join(__dirname, './web/asset'),
        to: path.join(__dirname, 'public/asset')
      },
      {
        from: path.join(__dirname, './web/libs'),
        to: path.join(__dirname, 'public/libs')
      },
      {
        from: path.join(__dirname, 'dll'),
        to: path.join(__dirname, 'public/dll')
      }
    ]),
    new HtmlWebpackPlugin({
      title: 'visual prototype tools',
      template: path.join(__dirname, './web/index.html'),
      excludeChunks: ['main']
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
          'style-loader!css-loader?module&sourceMap!less-loader?{"sourceMap":true,"javascriptEnabled": true}'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.scss$/,
        enforce: 'pre',
        exclude: [/node_modules/],
        use: [
          {
            loader: '@microsoft/loader-load-themed-styles' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('autoprefixer')];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
