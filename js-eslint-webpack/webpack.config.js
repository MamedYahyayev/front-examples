const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

// eslint-disable-next-line no-undef
module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 9000,
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
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
 *  plugins -- this is the plugins section, in this section we can insert multiple plugins to use in our project
 *  for example: CleanPlugin helps us to remove unnecessary files after we build the project, because when we build
 *  the project old js files don't remove. webpack generate new js files and the old js files don't remove thus we add
 *  CleanPlugin to remove old and unused js files.
 */
