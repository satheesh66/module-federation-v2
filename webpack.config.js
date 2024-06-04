const path = require("path");

module.exports = {
  getConfig: ({ port, relativePath }) => ({
    mode: "development",
    entry: { app: path.join(relativePath, "./src/index.js") },
    output: {
      path: path.join(relativePath, "dist"),
      publicPath: `//127.0.0.1:${port}/`,
    },
    devServer: {
      static: {
        directory: path.join(relativePath, "dist"),
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      port: port,
      hot: false,
    },
    devtool: "source-map",

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
