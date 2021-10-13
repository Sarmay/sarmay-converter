const TerserPlugin = require('terser-webpack-plugin') // 引入压缩插件
const path = require('path')
module.exports = {
  mode: 'none', // 因为默认是production 默认会进行压缩
  entry: {
    index: './src/converter.js',
    'index.min': './src/converter.js'
  },
  output: {
    filename: '[name].js',
    library: 'sarmayConverter',
    libraryExport: 'default', // 不添加的话引用的时候需要 tools.default
    libraryTarget: 'umd', // var this window ...
    globalObject: 'this',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // 使用压缩插件
        include: /\.min\.js$/
      })
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 本地服务器所加载的页面所在的目录,
    open: true,
    publicPath: './',
    historyApiFallback: true, // 不跳转
    inline: true// 实时刷新
  }
}
