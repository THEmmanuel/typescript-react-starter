const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(png|jpg|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}