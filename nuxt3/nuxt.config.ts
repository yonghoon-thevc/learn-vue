// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/landing"],
    },
  },
  modules: ["@vueuse/nuxt", "@nuxtjs/supabase", "@pinia/nuxt"],
});
