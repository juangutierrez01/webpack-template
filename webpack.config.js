const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
  mode: env.WEBPACK_SERVE ? 'development' : 'production',
  devtool: env.WEBPACK_SERVE ? 'inline-source-map' : false,
  devServer: env.WEBPACK_SERVE ? {
    static: './dist/',
    client: {
      overlay: false,
    },
    compress: true,
  } : {},
  entry: './src/index.ts',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Example',
    }),
  ],
  resolve: {
    extensions: ['.ts', '...'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});