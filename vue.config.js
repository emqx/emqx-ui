// eslint-disable-next-line @typescript-eslint/no-var-requires
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyPlugin = require('copy-webpack-plugin')

let externals = []
if (process.env.NODE_ENV === 'production') {
  externals = [/^element-plus.*/]
}

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 6800,
  },
  pages: {
    index: {
      entry: 'example/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        output: 'static/',
        languages: ['json', 'sql'],
      }),
      new CopyPlugin([{ from: 'packages/style', to: 'style' }]),
    ],
    externals: externals,
  },
}
