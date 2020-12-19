const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    node: {
        fs: "empty"
    },
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        open: 'google-chrome',
        contentBase: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
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
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ]
};
