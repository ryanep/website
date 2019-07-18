const path = require('path');
const webpack = require('webpack');

const config = {
  module: {
    rules: [
      {
        test: /.js$/,
        include: path.resolve(__dirname, '../../src'),
        loader: ['ts-loader']
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
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()]
};

module.exports = config;
