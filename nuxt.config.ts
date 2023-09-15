// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// Modules
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@nuxt/image',
		'nuxt-icon',
		'@vueuse/nuxt',
		// '@nuxtjs/supabase'
		'@nuxtjs/ionic'
	],

	// Since this is a mobile app, we need to disable server-side rendering
	ssr: false,

	// DevTools
	devtools: { enabled: true }
})
