const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    /** 多入口 */
    // entry:{
    //   index:'./src/index.js',
    //   test:'./src/test.js'
    // },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, './dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                react: {
                    name: 'react',
                    test: /[\\/]node_modules[\\/](react)/,
                    chunks: 'all',
                    priority: -5,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    target: 'web',
    plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
    // 打包模式，开发||生产
    mode: 'development',
    // devtool: 'cheap-source-map'
}
