const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

/** @type {import('@types/webpack').Configuration} */
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        port: process.env.PORT || 8000,
        hot: true
    }
});
