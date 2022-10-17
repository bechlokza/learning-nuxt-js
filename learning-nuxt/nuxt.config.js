import Vue from "vue";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  buildModules: ["@nuxt/image"],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "learning-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  image: {
    domains: ["https://pixelford.com"],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/floating-vue.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/http", "@nuxt/image"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
