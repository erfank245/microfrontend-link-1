const path = require("path");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      https: true,
      port: 8501,
      host: "localhost"
    },
    externals: [/^@vue-mf\/.+/]
  },
  filenameHashing: false
})
