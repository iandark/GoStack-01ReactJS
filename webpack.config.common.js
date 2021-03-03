const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new Dotenv()
  ],
  resolve: {
    fallback: {
        "fs": false,
        "path": false,
        "util": false,
        "crypto": false,
        "buffer": false,
        "https": false,
        "http": false,
        "vm": false,
        "os": false,
        "stream": false,
        "constants": false,
        "assert": false,
        "child_process": false,
        "worker_threads": false,
        "inspector": false
    }
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /.*\.(gif|png|jpe?g)$/i,
            use: { loader: "file-loader" },
        },
    ],
  }
}
