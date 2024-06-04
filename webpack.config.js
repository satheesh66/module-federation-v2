const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  getConfig: ({ relativePath, name = "app1", port = 3000 }) => ({
    mode: "development",
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
              target: "http://localhost:3000",
            },
      ],
    },
    devtool: "source-map",
    plugins: [
      new HtmlWebpackPlugin({
        template: "../index.html",
        filename: "../index.html",
        inject: false,
        excludeChunks: ["app", "entry"],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
  }),
};
