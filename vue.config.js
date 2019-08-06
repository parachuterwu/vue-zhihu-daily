module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://news-at.zhihu.com"
      }
    }
  }
};
