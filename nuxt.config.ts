// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
  site: {
    url: "https://hulmee.net",
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    description: 'Welcome to Ellery Hulme\'s links page. Connect with me on LinkedIn, explore my blog and GitHub projects, and check out my featured posts.',
    name: 'Ellery Hulme\'s Links'
  },
  // modules: ['@nuxtjs/tailwindcss']
  tailwindcss:
  {
    config: {
      plugins: [require("daisyui")],
      daisyui: {
        themes: ["halloween"],
      },
    }
  },
})
