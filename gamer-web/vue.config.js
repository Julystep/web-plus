const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: false,
    // 代理跨域,值为String或者Object
    proxy: {
      "/": {
        // target: "http://192.168.45.113:8083", // 本地调试
        target: "http://127.0.0.1:8083", // 本地调试
        // target: "http://10.20.64.76:8083", // 线上
        ws: false,
        changeOrigin: true,
        // pathRewrite:{	// 重写路径
        //   "^/api": "/"
        // }
      },
    },
    }
})
