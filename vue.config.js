module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    proxy: {
      '/': {
        target: process.env.VUE_APP_BASE_API,
        ws: false,
        changeOrigin: true,
      }
    }
  }
}
