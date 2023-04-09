<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navs = [
	{
		to: '/growth/',
		name: 'Growth'
	},
	{
		to: '/pricing/',
		name: 'Pricing'
	},
	{
		to: '/about-us/',
		name: 'About us'
	},
	{
		to: '/faqs/',
		name: 'FAQs'
	}
];


const mobileMenuOpen = ref(false);

</script>
<template>
	<header class="font-manrope flex items-center container pt-6">
		<router-link to="/">
			<img src="../assets/logo.svg" alt="Logo" />
		</router-link>

		<ul class="flex mx-auto gap-12">
			<li v-for="nav in navs" class="flex">
				<router-link :to="nav.to">
					<span class="hover:text-fa-6886C5 transition-colors ease-in-out duration-300 font-medium text-base text-fa-051942">{{ nav.name }}</span>
				</router-link>
			</li>
		</ul>

		<button type="button" class="mr-14">English</button>
		<button type="button" class="rounded-md py-3.5 px-9 bg-fa-FFE0AC hover:bg-fa-FFCC76 transition-colors duration-300 ease-in-out text-fa-051942">Login</button>
	</header>
</template>
