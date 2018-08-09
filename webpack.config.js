var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.jsx?$/, // both .js and .jsx
                loader: 'eslint-loader',
                include: path.resolve(__dirname, 'js'),
                enforce: 'pre',
                options: {
                    fix: true,
                },
            },
        ]
    },
    devServer: {
        publicPath: '/assets/'
    },
    stats: {
        colors: true
    }
};