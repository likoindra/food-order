const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.jsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/[name].[contenthash].js",
    publicPath: "/",
    clean: true
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       exclude: /node_modules/,
  //       use: "babel-loader"
  //     },
  //     {
  //       test: /\.css$/,
  //       use: ["style-loader", "css-loader"]
  //     },
  //     {
  //       test: /\.(png|jpg|jpeg|svg|webp)$/i,
  //       type: "asset/resource"
  //     }
  //   ]
  // },

  module: {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      type: "asset/resource"
    }
  ]
}, 

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],

  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:4000",
        changeOrigin: true
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};