const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { setupPath } = require('./helpers');
const paths = require('./paths');

const progressHandler = (percentage, message, ...args) => {
  // eslint-disable-next-line no-console
  console.info(percentage, message, ...args);
};

module.exports = (mode) => {
  const prodMode = mode === 'production';
  return {

    entry: ['./src/main.tsx'],

    resolve: {
      alias: {
        api$: `${paths.src}/api/api.tsx`,
        '~': `${paths.src}`,
      },
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
      // rules for modules (configure loaders, parser options, etc.)
      rules: [
        {
          enforce: 'pre',
          test: /\.tsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: prodMode ? MiniCssExtractPlugin.loader : 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.mp3$/,
          // include: `${paths.src}/assets/`,
          loader: 'file-loader',
          options: {
            name: 'assets/mp3/[name].[ext]',
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader?name=assets/img/[name].[ext]',
            },
          ],
        },
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/', // where the fonts will go
            },
          }],
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(progressHandler),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: prodMode ? '[name].[hash].css' : '[name].css',
        chunkFilename: prodMode ? '[id].[hash].css' : '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: setupPath('../src/index.html'),
      }),
    ],
  };
};
