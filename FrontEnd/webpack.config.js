var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
  hash: true
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'application.js',
    publicPath: '/'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, exclude: /node_modules/, loader: 'style!css?sourceMap!sass?sourceMap' }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};
