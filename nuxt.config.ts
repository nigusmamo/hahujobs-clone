// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "vue3-carousel-nuxt",
    "nuxt-marquee",
    "@nuxtjs/apollo",
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://graph.aggregator.hahu.jobs/v1/graphql",
      },
    },
  },
});
