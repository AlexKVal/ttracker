const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  publicPath: '/ttracker/',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        dts: false,
      }),
    ],
  },
})
