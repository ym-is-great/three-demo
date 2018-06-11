module.exports = {
  configureWebpack: {
    module: {
      rules: [{
          test: /\.less$/,
          use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }]
      }]
    }
  }
}