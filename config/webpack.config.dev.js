const path = require('path');
const webpack = require('webpack');

module.exports = [
	{
		name: 'browser',
		entry: ['babel-polyfill', path.join(__dirname, '../src/client/index.js')],
		output: {
			path: path.join(__dirname, '../dist/client/'),
			filename: 'build.js'
		},
		module: {
			loaders: [
				{
					test: /.js$/,
					include: path.resolve(__dirname, '../src'),
					loader: ['react-hot-loader', 'babel-loader']
				},
				{
					test: /\.scss$/,
					include: path.resolve(__dirname, '../src'),
					loader: [
						'style-loader',
						'css-loader?modules&minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
						'sass-loader',
						{
							loader: 'sass-resources-loader',
							options: {
								resources: [
									path.resolve(__dirname, '../src/app/resources/scss/variables/*.scss'),
									path.resolve(__dirname, '../src/app/resources/scss/mixins/*.scss')
								]
							}
						}
					]
				},
				{
					test: /\.svg$/,
					loader: 'raw-loader',
					options: {
						publicPath: 'http://localhost:3000/'
					}
				}
			]
		},
		devServer: {
			host: '0.0.0.0',
			port: 3000,
			contentBase: './src/client',
			hot: true
		},
		resolve: {
			alias: {
				'@actions': path.resolve(__dirname, '../src/app/actions/'),
				'@components': path.resolve(__dirname, '../src/app/components/'),
				'@constants': path.resolve(__dirname, '../src/app/constants/'),
				'@containers': path.resolve(__dirname, '../src/app/containers/'),
				'@reducers': path.resolve(__dirname, '../src/app/reducers/'),
				'@sagas': path.resolve(__dirname, '../src/app/sagas/')
			}
		},
		plugins: [new webpack.optimize.OccurrenceOrderPlugin()]
	}
];
