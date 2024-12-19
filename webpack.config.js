const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.browser.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'JSChristmas',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this'
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
