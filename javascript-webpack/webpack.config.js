const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "assets/scripts"),
    filename: "app-webpack.js",
  },
  mode: 'development'
};
