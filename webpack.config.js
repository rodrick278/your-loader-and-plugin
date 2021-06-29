const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const BundleAnalyzerPlugin =
//     require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
    // target: 'web',
    plugins: [
        // new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin(),
    ],
    // 打包模式，开发||生产
    mode: 'development',
    devtool: 'cheap-source-map'
}
