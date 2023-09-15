<template>
	<div class="flex flex-col gap-10">
		<h2 class="text-4xl font-bold text-black">My number is</h2>

		<vue-tel-input
			v-model="phoneNumber"
			@validate="isPhoneNumberValid = $event.valid"
		/>
		<p>
			We will send a text with a verification code. Message and data rates may
			apply. Learn what happens when your number changes.
		</p>

		<ion-button
			color="none"
			class="button__background rounded-full font-bold uppercase"
			shape="round"
			router-link="/sign-up"
			:disabled="!isPhoneNumberValid"
		>
			Continue
		</ion-button>
	</div>
</template>

<script setup>
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'

const phoneNumber = ref(null)
const isPhoneNumberValid = ref(false)
</script>

<style scoped>
.button__background {
	background: linear-gradient(90deg, #ea4080 0%, #ee805f 100%);
	box-shadow: 0px 3.02308px 5.03846px 0px rgba(0, 0, 0, 0.15);
}
</style>
