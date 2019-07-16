// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.11.56.83:3000', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
