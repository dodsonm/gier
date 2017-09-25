const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
const path = require("path");

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: '/dist',
});
const cssConfig = isProd? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/app.js',
    // about: './src/about.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
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
      hot: true,
      open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GIER App 2.0',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      // excludeChunks: ['about'],
      template: './src/index.pug',
    }),
    // new HtmlWebpackPlugin({
    //   title: 'GIER App 2.0 | About Us',
    //   minify: {
    //     collapseWhitespace: true,
    //   },
    //   hash: true,
    //   chunks: ['about'],
    //   filename: 'about.html',
    //   template: './src/index.pug',
    // }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProd,
      allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin(), //global
    new webpack.NamedModulesPlugin(), //prints more readable module names in browser
  ]
}
