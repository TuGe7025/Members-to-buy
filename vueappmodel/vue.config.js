// vue.config.js
module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://106.15.36.25:3000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
