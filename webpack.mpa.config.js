const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    test: "./src/assets/scripts/test.js",
    about: "./src/assets/scripts/about.js",
    auth: "./src/assets/scripts/auth.js",
    works: "./src/assets/scripts/works.js",
    blog: "./src/assets/scripts/blog.js",
    parallax: "./src/assets/scripts/parallax-header.js",
    parallaxWelcome: "./src/assets/scripts/parallax-welcome.js",
    hamburger: "./src/assets/scripts/hamburger.js",
    skills: "./src/assets/scripts/skills.js",
    slider: "./src/assets/scripts/slider.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: false
          }
        }
      })
    ]
  },
  resolve: {
    alias: {
      vue$:
        env === "development" ? "vue/dist/vue.esm.js" : "vue/dist/vue.min.js"
    }
  },
  devtool: env === "development" ? "#eval-source-map" : ""
};
