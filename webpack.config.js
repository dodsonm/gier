const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist',
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      { test: /\.pug$/, loader: 'pug-loader' },
    ],
  },
  devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      stats: "errors-only",
      open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GIER App 2.0',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './src/index.pug',
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true
    })
  ]
}
