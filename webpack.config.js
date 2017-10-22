const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const CONTEXT = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');

module.exports = {
  context: CONTEXT,
  entry: './js/index.js',
  output: {
    path: DIST,
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['airbnb'],
          },
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(
      DIST,
      {
        verbose: true,
      },
    ),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'lib'),
        to: path.join(DIST, 'lib'),
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.join(CONTEXT, 'html', 'index.html'),
      inject: 'head',
    }),
  ],
  devServer: {
    contentBase: DIST,
    compress: true,
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
