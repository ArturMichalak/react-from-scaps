const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

/** @type {import('@types/webpack').Configuration} */
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.tsx?$/, loader: 'babel-loader' }
        ]
    },
    resolve: {
        extensions: [
            ".tsx",
            ".ts",
            ".jsx",
            ".js"
        ],
        alias: {
            "@app": path.resolve(__dirname, 'src/app'),
            '@components': path.resolve(__dirname, 'src/components'),
            "@services": path.resolve(__dirname, 'src/services'),
            "@helpers": path.resolve(__dirname, 'src/helpers')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new Dotenv()
    ],
}
