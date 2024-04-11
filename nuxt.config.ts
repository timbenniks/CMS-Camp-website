// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "nuxt-graphql-client"],

  runtimeConfig: {
    hygraphToken: process.env.HYGRAPH_TOKEN,
    hygraphEndpoint: process.env.GQL_HOST,
  },

  fonts: {
    families: [{
      name: 'Poppins', provider: 'google', weights: [400, 700]
    }]
  }
})