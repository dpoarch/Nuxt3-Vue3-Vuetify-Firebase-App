import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
      "vuetify/lib/styles/main.sass"
  ],
  build: {
      transpile: ["vuetify"]
  },
  vite: {
      define: {
          "process.env.DEBUG": false
      }
  },
  publicRuntimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
  privateRuntimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  }
});
