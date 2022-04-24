const { defineConfig } = require("@vue/cli-service");
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  outputDir: path.resolve(__dirname,'../server/public'),
  devServer: {
    // Proxy for CORS for email 
    '/api':{
      target: 'http://localhost:3000'
  }
}
});
