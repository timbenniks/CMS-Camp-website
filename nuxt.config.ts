export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-graphql-client",
    "nuxt-jsonld",
  ],

  runtimeConfig: {
    hygraphToken: process.env.HYGRAPH_TOKEN,
    hygraphEndpoint: process.env.GQL_HOST,
  },

  image: {
    providers: {
      hygraph: {
        name: 'hygraph',
        provider: '~/providers/hygraph.ts',
        options: {
          baseURL: "https://eu-central-1-shared-euc1-02.graphassets.com/cluqa1kb02bgi07tdbi3a8tbo"
        }
      }
    }
  },

  fonts: {
    families: [{
      name: 'Poppins', provider: 'google', weights: [100, 400, 700]
    }]
  }
})