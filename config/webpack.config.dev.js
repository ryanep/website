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
						'sass-loader'
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
			// host: '0.0.0.0',
			port: 3000,
			contentBase: './src/client',
			hot: true
		},
		plugins: [new webpack.optimize.OccurrenceOrderPlugin()]
	}
];
