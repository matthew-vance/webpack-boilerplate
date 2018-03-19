const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");
const webpack = require("webpack");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      parallel: true,
      cache: true
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new ExtractTextPlugin("[name].bundle.css")
  ]
});
