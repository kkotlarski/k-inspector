var path = require('path'),
    webpack = require('webpack'),
    AngularPlugin = require('angular-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: 'index',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    resolve: {
        root: [
            path.resolve('app'),
            path.resolve('..', 'node_modules')
        ],
        alias: {
            app: path.resolve('app'),
            ngResource: 'angular-resource',
            'ui.router': 'ui-router',
            'materialize.css': 'materialize-css/bin/materialize.css',
            'materialize.js': 'materialize-css/bin/materialize.js'
        }
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader'}
        ]
    },
    plugins: [
        new AngularPlugin(),
        new ExtractTextPlugin('bundle.css'),
    ],
    devServer: {
        contentBase: './app'
    }
};