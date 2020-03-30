const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
    mode:'development',
    entry: {
        index: './index.js'
    },
    output: {
        publicPath: './',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Angular Component Demo',
            template: './index.html'
        })
    ],
    devServer: {
        publicPath: "/",
        contentBase: path.join(process.cwd(), "dist"),
        historyApiFallback: true,
        hot: true,
        host: "0.0.0.0",
        allowedHosts: [
            ".repl.it",
            ".repl.co",
            ".repl.run"
        ]
    }
}