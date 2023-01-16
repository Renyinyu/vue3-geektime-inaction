const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  devtool: 'inline-cheap-module-source-map',
  entry: {
    index: path.join(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: '/p/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Hello Vue',
      filename: 'index.html',
      template: './public/index.html',
      minify: false,
      inject: false,
      templateParameters: {
        js: [
          // 'https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js',
          './vue.runtime.global.js',
          './index.js'
        ],
        css: [
          './index.css'
        ]
      }
    })
  ],

  externals: {
    'vue': 'window.Vue'
  },

  devServer: {
    compress: true,
    port: 6001,
    hot: false,
    static: {
      directory: path.join(__dirname, 'public'),
    }
  }
}
