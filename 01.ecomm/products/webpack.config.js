const HtmlWebpackPlugin = require("html-webpack-plugin");
const federaionModule = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new federaionModule({
      name:'productsList',
      filename:'remoteEntry.js',
      exposes:{
          './ProductsIndex':'./src/index.js'
      }
  }),
  ],
};
