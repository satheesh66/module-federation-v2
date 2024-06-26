const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  getConfig: ({ relativePath, name = "app1", port = 3000 }) => ({
    mode: "development",
    devtool: "source-map",
    entry: { app: path.join(relativePath, "./src/index.js") },
    output: {
      path: path.resolve(__dirname, "dist", name),
      publicPath: `//127.0.0.1:3000/${name}/`,
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist"),
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      port: port,
      hot: false,
      proxy: [
        port === 3000
          ? {}
          : {
              context: ["/"],
              target: "http://127.0.0.1:3000",
            },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "../index.html",
        filename: "../index.html",
        inject: false,
        excludeChunks: ["app", "entry"],
      }),
      new MiniCssExtractPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
  }),
};
