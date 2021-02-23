const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  devtool: "cheap-source-map",
  devServer: {
    port: 9000,
  },
};

/**
 *  mode -- this is the mode of project (profile) 2 modes are available : devlopment, production
 *  entry -- this is the entry point of the project
 *  output -- webpack generates file according to entry file
 *    filename -- this is the output file's filename
 *    path -- where to store this output file
 *    publicPath -- this is the publicPath
 *
 *  devtool -- this is the devtool this helps to debugging code on the browser, by default our source files content don't show
 *  devServer -- this is the webpack-dev-server configuration default port is 8080.
 */