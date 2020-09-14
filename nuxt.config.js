require("dotenv").config();

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
        href:
          "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Open+Sans:wght@300;400;700&display=swap",
        crossorigin: "anonymous",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "./favicon.ico",
      },
    ],
  },
  buildModules: ["@nuxtjs/vuetify"],
  modules: ["@nuxtjs/dotenv","@nuxtjs/axios"],
  plugins: ["@/plugins/contentful"],
  components: true,
  css: ["~/assets/css/global.css"],
};
