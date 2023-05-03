const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
      host: '0.0.0.0',
      port: 8080,
      proxy: {
        '/api': {//这里的api很重要，表示前缀
          target: 'http://gmall-h5-api.atguigu.cn',
          ws: true,
          changeOrigin: true,
          // pathRewrite:{
          //   '^/api':''//正则表达式，将api替换为空字符
          // }
        },
      },
      client: {
        webSocketURL: 'ws://0.0.0.0:8080/ws'
      }

    }
})
