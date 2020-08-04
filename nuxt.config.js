require('dotenv').config()

module.exports = {
  head: {
    title: "Cafe Review",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A place to find cafe reviews",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        ref:
          "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css",
        integrity:
          "ha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I",
        crossorigin: "anonymous",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "./favicon.ico",
      },
    ],
  },
  modules: ["bootstrap-vue/nuxt","@nuxtjs/dotenv"],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  css: ['@/assets/scss/custom.scss'],
  plugins: ["@/plugins/contentful"]
};
