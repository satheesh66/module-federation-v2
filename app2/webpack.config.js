const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const { getConfig } = require("../webpack.config");

let config = getConfig({ port: 3001, relativePath: path.resolve(__dirname) });

config.plugins = [
  new ModuleFederationPlugin({
    name: "app2",
    filename: "entry.js",
    remotes: {},
    exposes: {
      "./button": "./src/button.jsx",
    },
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    excludeChunks: ["app2"],
  }),
];

module.exports = config;
