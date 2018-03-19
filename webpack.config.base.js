const path = require("path");
const paths = require("./paths.js");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: `${paths.srcPath}/index.js`
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    modules: [
      "node_modules"
      // if an alias or module is added be sure to update the jest config as well
    ],
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.srcPath,
        exclude: [path.resolve(__dirname, "node_modules"), paths.distPath],
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          },
          "eslint-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      title: "New React App"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: paths.distPath
  }
};
