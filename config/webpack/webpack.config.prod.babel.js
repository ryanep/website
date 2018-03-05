import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const nodeModules = {};
fs.readdirSync('node_modules').forEach(module => {
  if (module !== '.bin') nodeModules[module] = `commonjs ${module}`;
});

const externals = { ...nodeModules };

const config = [
  {
    name: 'browser',
    entry: [
      'babel-polyfill',
      path.join(__dirname, '../../src/client/index.js')
    ],
    output: {
      path: path.join(__dirname, '../../dist/client/'),
      filename: 'build.js'
    },
    module: {
      loaders: [
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
      new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
          API_URL: JSON.stringify('https://api.ryanep.com/v1')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        }
      })
    ]
  },
  {
    name: 'server-side rendering',
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
      loaders: [
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
    externals,
    plugins: [
      new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
          API_URL: JSON.stringify('https://api.ryanep.com/v1')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        }
      }),
      new CopyWebpackPlugin([
        {
          from: './src/server/views/index.ejs',
          to: './views/index.ejs'
        }
      ])
    ]
  }
];

export default config;
