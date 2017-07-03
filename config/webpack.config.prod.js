const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const fs = require('fs');
const nodeModules = {};
fs.readdirSync('node_modules').forEach(module => {
	if (module !== '.bin') nodeModules[module] = `commonjs ${module}`;
});

const externals = Object.assign({}, nodeModules, {});

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
					loader: 'babel-loader'
				},
				{
					test: /\.scss$/,
					include: path.resolve(__dirname, '../src'),
					loader: ExtractTextPlugin.extract([
						'css-loader?modules&minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
						'sass-loader'
					])
				},
				{
					test: /\.svg$/,
					loader: 'raw-loader'
				}
			]
		},
		plugins: [
			new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
			new webpack.optimize.UglifyJsPlugin({
				output: {
					comments: false
				}
			}),
			new webpack.optimize.OccurrenceOrderPlugin(),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production')
				}
			})
		]
	},
	{
		name: 'server-side rendering',
		entry: ['babel-polyfill', path.join(__dirname, '../src/server/index.js')],
		target: 'node',
		devtool: 'source-map',
		output: {
			path: path.join(__dirname, '../dist/server'),
			filename: 'index.js'
		},
		module: {
			loaders: [
				{
					test: /.js$/,
					include: path.resolve(__dirname, '../src'),
					loader: 'babel-loader'
				},
				{
					test: /\.scss$/,
					include: path.resolve(__dirname, '../src'),
					loader: ExtractTextPlugin.extract([
						'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
						'sass-loader'
					])
				},
				{
					test: /\.svg$/,
					loader: 'raw-loader'
				}
			]
		},
		externals,
		plugins: [
			new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
			new webpack.BannerPlugin({
				banner: 'require("source-map-support").install();',
				raw: true,
				entryOnly: false
			})
		]
	}
];
