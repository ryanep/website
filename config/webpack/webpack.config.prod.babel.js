import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import baseConfig from './webpack.config.base.babel';

const configs = [
  {
    name: 'browser',
    mode: 'production',
    target: 'web',
    entry: [
      'babel-polyfill',
      path.join(__dirname, '../../src/client/index.js')
    ],
    output: {
      path: path.join(__dirname, '../../dist/client/'),
      filename: 'build.js'
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'style.[hash:8].min.css',
        allChunks: true
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
          API_URL: JSON.stringify('https://api.ryanep.com/v1')
        }
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../../src/client/index.html'),
        title: '<%- head.title %>',
        filename: '../../dist/server/views/index.ejs',
        inject: {
          body:
            '<div id="app"><%- markup %></div><script>window.SERVER_STATE = <%- initialState %></script>'
        }
      })
    ]
  },
  {
    name: 'server-side rendering',
    mode: 'production',
    target: 'node',
    entry: [
      'babel-polyfill',
      path.join(__dirname, '../../src/server/index.js')
    ],
    output: {
      path: path.join(__dirname, '../../dist/server'),
      filename: 'index.js'
    },
    externals: nodeExternals(),
    plugins: [
      new ExtractTextPlugin({ filename: 'style.min.css', allChunks: true }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
          API_URL: JSON.stringify('https://api.ryanep.com/v1')
        }
      })
    ]
  }
];

export default configs.map(config => merge(baseConfig, config));
