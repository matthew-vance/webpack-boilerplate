const paths = require("./paths.js");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");

const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: paths.distPath,
    hot: true,
    compress: true,
    overlay: true,
    quiet: true, // for friendly errors
    host: "0.0.0.0",
    port: "8081",
    public: "localhost:8081",
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
});
