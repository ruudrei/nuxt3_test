import { defineNuxtPlugin } from 'nuxt/app'
import ElementPlus from 'element-plus/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus)
})
