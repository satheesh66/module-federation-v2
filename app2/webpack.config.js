const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const { getConfig } = require("../webpack.config");

let config = getConfig({
  name: "app2",
  relativePath: path.resolve(__dirname),
  port: 3001,
});

let modFed = new ModuleFederationPlugin({
  name: "app2",
  filename: "entry.js",
  remotes: {
    app3: "app3@http://127.0.0.1:3000/app3/mf-manifest.json",
  },
  exposes: {
    "./button": "./src/button.jsx",
    "./label": "./src/label.jsx",
  },
});

config.plugins.push(modFed);

module.exports = config;
