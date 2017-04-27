var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var Fs = require('fs')
var nodeModules = {}
Fs.readdirSync('node_modules').forEach(function (module) {
    if (module !== '.bin') nodeModules[module] = 'commonjs ' + module
});

let externals = Object.assign({}, nodeModules, {});

module.exports = [
    {
        name: "browser",
        entry: ['babel-polyfill', path.join(__dirname, "src/client/index.js")],
        output: {
            path: path.join(__dirname, "dist/public/"),
            filename: "build.js"
        },
        module: {
            loaders: [
                {
                    test: /.js$/,
                    include: path.resolve(__dirname, "src"),
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    include: path.resolve(__dirname, "src"),
                    loader: ExtractTextPlugin.extract(['css-loader?modules&minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader'])
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
            // @TODO: Enable for production
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        ]
    },
    {
        name: "server-side rendering",
        entry: ['babel-polyfill', path.join(__dirname, "src/server/index.js")],
        target: "node",
        devtool: 'source-map',
        output: {
            path: path.join(__dirname, "dist/"),
            filename: "server.js"
        },
        module: {
            loaders: [
                {
                    test: /.js$/,
                    include: path.resolve(__dirname, "src"),
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    include: path.resolve(__dirname, "src"),
                    loader: ExtractTextPlugin.extract(['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader'])
                }
            ]
        },
        externals: externals,
        plugins: [
            new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
            new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false })
        ]
    }
];