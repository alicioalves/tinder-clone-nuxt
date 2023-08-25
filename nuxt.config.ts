// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// Modules
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@nuxt/image',
		'nuxt-icon',
		'@vueuse/nuxt'
	],

	// DevTools
	devtools: { enabled: true }
})
