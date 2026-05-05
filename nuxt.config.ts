// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 5000,
  },
  app: {
    head: {
      title: "Mohit Thakur | Frontend Developer",
      meta: [
        { name: "description", content: "Frontend Developer with 6.5 years of experience in Vue.js and React." },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      ],
      htmlAttrs: {
        class: "dark"
      }
    }
  }
})
