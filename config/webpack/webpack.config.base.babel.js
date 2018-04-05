import path from 'path';
import webpack from 'webpack';

const config = {
  module: {
    rules: [
      {
        test: /.js$/,
        include: path.resolve(__dirname, '../../src'),
        loader: ['babel-loader']
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../../src'),
        loader: [
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
        ]
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

export default config;
