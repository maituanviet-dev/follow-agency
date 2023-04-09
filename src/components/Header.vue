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

		<ul class="lg:flex mx-auto gap-12 hidden">
			<li v-for="nav in navs" class="flex">
				<router-link :to="nav.to">
					<span
						class="hover:text-fa-6886C5 transition-colors ease-in-out duration-300 font-medium text-base text-fa-051942"
						>{{ nav.name }}</span
					>
				</router-link>
			</li>
		</ul>

		<div class="hidden lg:block">
			<button type="button" class="mr-14">English</button>
			<button
				type="button"
				class="rounded-md py-3.5 px-9 bg-fa-FFE0AC hover:bg-fa-FFCC76 transition-colors duration-300 ease-in-out text-fa-051942"
			>
				Login
			</button>
		</div>

		<!-- Toggler -->
		<button
			type="button"
			class="ml-auto lg:ml-0 lg:hidden"
			@click="mobileMenuOpen = true"
		>
			<Bars3Icon class="h-6 w-6" aria-hidden="true" />
		</button>

		<!-- Mobile menu -->
		<Dialog
			as="div"
			class="lg:hidden"
			@close="mobileMenuOpen = false"
			:open="mobileMenuOpen"
		>
			<!-- BACKDROP -->
			<div class="fixed inset-0 z-50" />
			<!-- CONTENT -->
			<DialogPanel
				class="fixed inset-y-0 right-0 flex px-4 pb-4 pt-6 bg-white z-50 flex-col gap-6 w-full sm:max-w-sm sm:ring-1 sm:ring-fa-051942/10"
			>
				<div class="flex justify-between">
					<router-link to="/">
						<img src="../assets/logo.svg" alt="Logo" />
					</router-link>
					<button type="button" @click="mobileMenuOpen = false">
						<XMarkIcon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>

				<div class="my-3 flex flex-col gap-3 items-start">
					<button type="button" class="mr-14">English</button>
					<button
						type="button"
						class="rounded-md py-2 px-4 bg-fa-FFE0AC hover:bg-fa-FFCC76 transition-colors duration-300 ease-in-out text-fa-051942"
					>
						Login
					</button>
				</div>

				<hr />

				<ul class="flex flex-col gap-6 mt-3">
					<li v-for="nav in navs" class="flex">
						<router-link :to="nav.to">
							<span
								class="hover:text-fa-6886C5 transition-colors ease-in-out duration-300 font-medium text-base text-fa-051942"
								>{{ nav.name }}</span
							>
						</router-link>
					</li>
				</ul>
			</DialogPanel>
		</Dialog>
	</header>
</template>
