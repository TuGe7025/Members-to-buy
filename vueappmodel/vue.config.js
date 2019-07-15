<<<<<<< HEAD
// vue.config.js
=======
>>>>>>> 72a58b6dc2c435d56d9f2864e6c6fc76182a6d03
module.exports = {
  devServer: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'http://10.11.56.83:3000', //对应自己的接口
        changeOrigin: true,
        ws: true,
=======
        target: 'http://10.11.56.83:3000',
        changeOrigin: true,
>>>>>>> 72a58b6dc2c435d56d9f2864e6c6fc76182a6d03
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 72a58b6dc2c435d56d9f2864e6c6fc76182a6d03
