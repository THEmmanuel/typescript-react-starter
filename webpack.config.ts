// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = {
//     mode: 'none',
//     entry: {
//         app: path.join(__dirname, 'src', 'index.tsx')
//     },
//     target: 'web',
//     resolve: {
//         extensions: ['.ts', '.tsx', '.js']
//     },
//     module: {
//         rules: [{
//             test: /\.(tsx|ts)$/,
//             use: 'ts-loader',
//             exclude: '/node_modules/'
//         },

//         {
//             test: /\.css$/,
//             use: ["style-loader", "css-loader"],
//         },

//         {
//             test: /\.(png|jpg|svg)$/,
//             use: ["file-loader"],
//         },
//         ],
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist')
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.join(__dirname, "public", "index.html"),
//         }),
//     ],
// }

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
    }, resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test: /\.(tsx|ts)$/,
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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
}