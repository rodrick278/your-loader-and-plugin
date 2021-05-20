const path = require('path')
const OutLogPlugin = require('./plugins/OutLogPlugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'console-loader',
          {
            loader: 'company-loader',
            options: {
              sign: 'we-doctor@2021',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new OutLogPlugin({outFileName:"buildInfo"})
  ],
  resolveLoader: {
    // 去哪些目录下寻找 Loader，有先后顺序之分 node_modules 如果没有就去./loaders目录下
    modules: ['node_modules', './loaders/'],
  },
  // 打包模式，开发||生产
  mode: 'development',
  devtool: 'cheap-source-map'
}
