const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const config = {
  name: 'browser',
  mode: 'development',
  target: 'web',
  entry: [path.join(__dirname, '../../src/client/index.js')],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: path.join(__dirname, '../../src/client/'),
    hot: true,
    historyApiFallback: true,
    overlay: true,
    disableHostCheck: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_URL: JSON.stringify('http://localhost:3001/v1')
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/client/index.html'),
      title: '',
      inject: {
        body: '<div id="app"></div>',
        styles: ''
      }
    })
  ]
};

module.exports = merge(baseConfig, config);
