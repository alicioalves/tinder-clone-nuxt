<template>
	<ion-page>
		<ion-content class="ion-padding">
			<div
				class="flex h-full flex-col items-center justify-around bg-white text-center"
			>
				<Icon name="Flame" class="h-16 w-16" />
				<section class="flex flex-col gap-10">
					<h2 class="text-3xl font-bold text-gray-600">Oops!</h2>

					<p class="text-gray-500">
						We couldn't find a Tinder account connected to that account.
					</p>
				</section>

				<ion-button
					color="none"
					class="button__background rounded-full font-bold uppercase"
					shape="round"
					router-link="/sign-up"
				>
					Create new account
				</ion-button>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
definePageMeta({
	alias: ['/account-not-found']
})
</script>

<style scoped>
.button__background {
	background: linear-gradient(90deg, #ea4080 0%, #ee805f 100%);
	box-shadow: 0px 3.02308px 5.03846px 0px rgba(0, 0, 0, 0.15);
}
</style>
