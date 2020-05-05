module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      },
      '/auth': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/auth': 'auth'
        }
      }
    }
  }
}
