module.exports = {
  configureWebpack: {
    module: {
      rules: [{
          test: /\.less$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "less-loader"
          }]
      }]
    }
  }
}