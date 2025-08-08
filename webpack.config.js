const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/index.ts'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname),
        },
        compress: true,
        port: 8081,
        open: true,
        hot: true
    },
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin({
            parallel: true,
        })],
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};
