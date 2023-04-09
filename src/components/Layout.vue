<script setup>
	import Header from './Header.vue'
	import Footer from './Footer.vue'
</script>
<template>
	<div class="grid grid-rows-[auto_1fr_auto]">
		<Header />
		<main>
			<slot></slot>
		</main>
		<Footer />
	</div>
</template>
