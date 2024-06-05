const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const { getConfig } = require("../webpack.config");

let config = getConfig({
  relativePath: path.resolve(__dirname),
  name: "app3",
  port: 3002,
});

let moduleFed = new ModuleFederationPlugin({
  name: "app3",
  filename: "entry.js",
  remotes: {},
  exposes: {
    "./button": "./src/button.jsx",
  },
  manifest: {
    filePath: "./",
  },
  runtimePlugins: [path.resolve(__dirname, "../mf-runtime-plugin.js")],
});

config.plugins.push(moduleFed);

module.exports = config;
