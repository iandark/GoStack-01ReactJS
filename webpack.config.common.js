const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  node: {
    fs: "empty"
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        },
        {
            test: /.*\.(gif|png|jpe?g)$/i,
            use: { loader: "file-loader" },
        },
    ],
  }
}
