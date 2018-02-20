'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const chunks = {
  main: 'main',
  runReport: 'run',
  webix: 'webix.pivot.worker'
};

module.exports = {
  devtool: 'eval-source-map',
  // entry: {
  //   babelpl: 'babel-polyfill',
  //   hot: 'react-hot-loader/patch',
  //   main :path.join(__dirname, 'app/index.js')
  //  },
  entry: [
     'babel-polyfill',
    'react-hot-loader/patch',
    path.join(__dirname, 'app/index.js')
   ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },

    // eslint: {
    //     configFile: '.eslintrc',
    //     failOnWarning: false,
    //     failOnError: false
    // },
    module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules(?!.*(booter-di|booter-react-redux|es6-defer)))|libs/,
        loader: 'babel-loader'
      },
      {
        test: /\.(less|css)$/,

        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'less-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader',
      },
      {
        test: /\.svg$/,
        exclude: path.join(__dirname, 'libs'),
        use: [
          {
            loader: 'svg-sprite-loader',
          }
        ]
      }
    ],
    // below options disable the webpack dynamic context
    // for additional info read about dynamic context in webpack
    // Disable handling of unknown requires
    unknownContextRegExp: /$^/,
    unknownContextCritical: false,

    // Disable handling of requires with a single expression
    exprContextRegExp: /$^/,
    exprContextCritical: false,

    // Warn for every expression in require
    wrappedContextCritical: true
  },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        //new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        // new webpack.DefinePlugin({
        //   'process.env.NODE_ENV': JSON.stringify('development')
        // }),
        new OptimizeCssAssetsPlugin(),
        new ExtractTextPlugin('[name].[hash].min.css'),
      ],
};
