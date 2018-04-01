import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

const config = [
  {
    name: 'browser',
    mode: 'production',
    entry: [
      'babel-polyfill',
      path.join(__dirname, '../../src/client/index.js')
    ],
    output: {
      path: path.join(__dirname, '../../dist/client/'),
      filename: 'build.[hash:8].min.js',
      publicPath: '//cdn.ryanep.com/'
    },
    module: {
      rules: [
        {
          test: /.js$/,
          include: path.resolve(__dirname, '../../src'),
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          include: path.resolve(__dirname, '../../src'),
          loader: ExtractTextPlugin.extract([
            'css-loader?modules&minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(
                    __dirname,
                    '../../src/app/resources/scss/variables/*.scss'
                  ),
                  path.resolve(
                    __dirname,
                    '../../src/app/resources/scss/mixins/*.scss'
                  )
                ]
              }
            }
          ])
        },
        {
          test: /\.svg$/,
          loader: 'raw-loader'
        }
      ]
    },
    resolve: {
      alias: {
        '@actions': path.resolve(__dirname, '../../src/app/actions/'),
        '@components': path.resolve(__dirname, '../../src/app/components/'),
        '@constants': path.resolve(__dirname, '../../src/app/constants/'),
        '@containers': path.resolve(__dirname, '../../src/app/containers/'),
        '@reducers': path.resolve(__dirname, '../../src/app/reducers/'),
        '@resources': path.resolve(__dirname, '../../src/app/resources/'),
        '@sagas': path.resolve(__dirname, '../../src/app/sagas/'),
        '@services': path.resolve(__dirname, '../../src/app/services/'),
        '@store': path.resolve(__dirname, '../../src/app/store/')
      }
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'style.[hash:8].min.css',
        allChunks: true
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
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
    entry: [
      'babel-polyfill',
      path.join(__dirname, '../../src/server/index.js')
    ],
    target: 'node',
    output: {
      path: path.join(__dirname, '../../dist/server'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /.js$/,
          include: path.resolve(__dirname, '../../src'),
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          include: path.resolve(__dirname, '../../src'),
          loader: ExtractTextPlugin.extract([
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(
                    __dirname,
                    '../../src/app/resources/scss/variables/*.scss'
                  ),
                  path.resolve(
                    __dirname,
                    '../../src/app/resources/scss/mixins/*.scss'
                  )
                ]
              }
            }
          ])
        },
        {
          test: /\.svg$/,
          loader: 'raw-loader'
        }
      ]
    },
    resolve: {
      alias: {
        '@actions': path.resolve(__dirname, '../../src/app/actions/'),
        '@components': path.resolve(__dirname, '../../src/app/components/'),
        '@constants': path.resolve(__dirname, '../../src/app/constants/'),
        '@containers': path.resolve(__dirname, '../../src/app/containers/'),
        '@reducers': path.resolve(__dirname, '../../src/app/reducers/'),
        '@resources': path.resolve(__dirname, '../../src/app/resources/'),
        '@sagas': path.resolve(__dirname, '../../src/app/sagas/'),
        '@services': path.resolve(__dirname, '../../src/app/services/'),
        '@store': path.resolve(__dirname, '../../src/app/store/')
      }
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

export default config;
