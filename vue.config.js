module.exports = {
  chainWebpack: (config) => {
    console.log("vue-confog-js");
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 102400 }));
  },
  css: {
    extract: false,
  },
};
