module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.11.56.83:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
