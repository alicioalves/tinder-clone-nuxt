<template>
	<ion-page
		class="welcome__background flex flex-col items-center p-10 text-center text-white"
	>
		<Icon name="Logo" class="h-20 w-20" />

		<p>
			By tapping Create Account or Sign In, you agree to our Terms. Learn how we
			process your data in our Privacy Policy and Cookies Policy.
		</p>

		<div class="flex flex-col items-center gap-2">
			<ion-button
				v-for="option in signInOptions"
				:key="option"
				class="w-full uppercase"
				color="light"
				fill="outline"
				shape="round"
				@click="tryToSignIn(option.name)"
			>
				{{ option.label }}
			</ion-button>
		</div>

		<p>Trouble signing in?</p>
	</ion-page>
</template>

<script setup lang="ts">
definePageMeta({
	alias: ['/']
})

const signInOptions = ref([
	{
		name: 'google',
		label: 'Sign in with Google'
	},
	{
		name: 'facebook',
		label: 'Sign in with Facebook'
	},
	{
		name: 'apple',
		label: 'Sign in with Apple'
	},
	{
		name: 'phone-number',
		label: 'Sign in with Phone Number'
	}
])

const router = useIonRouter()

const tryToSignIn = (option: string) => {
	router.push('/account-not-found')
}
</script>

<style>
.welcome__background {
	background: linear-gradient(180deg, #fe5048 0%, #fd2c72 64.99%);
}
</style>
