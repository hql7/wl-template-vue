
module.exports = {
  // publicPath: './',
  filenameHashing: true,
  productionSourceMap: false,
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    open: true,
    disableHostCheck: false,
    overlay: {
      warnings: false,
      errors: true
    },
    /* headers: {
      'Access-Control-Allow-Origin': '*',
    } */
    /* proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    } */
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/style/variables/variables.scss";`
      }
    }
  },
  chainWebpack: config => config.resolve.symlinks(false)
};
