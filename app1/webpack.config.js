const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const { getConfig } = require("../webpack.config");

let config = getConfig({ port: 3000, relativePath: path.resolve(__dirname) });

config.plugins = [
  new ModuleFederationPlugin({
    name: "app1",
    filename: "entry.js",
    remotes: {
      app2: "app2@http://127.0.0.1:3001/mf-manifest.json",
    },
    exposes: {
      "./button": "./src/App.jsx",
    },
    manifest: {
      filePath: "./",
    },
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    excludeChunks: ["app1"],
  }),
];

module.exports = config;
