import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig from './webpack.config.base.babel';

const config = {
  name: 'browser',
  mode: 'development',
  target: 'web',
  entry: ['babel-polyfill', path.join(__dirname, '../../src/client/index.js')],
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
        body: '<div id="app"></div>'
      }
    })
  ]
};

baseConfig.module.rules[1].loader = [
  'style-loader',
  ...baseConfig.module.rules[1].loader
];

export default merge(baseConfig, config);
