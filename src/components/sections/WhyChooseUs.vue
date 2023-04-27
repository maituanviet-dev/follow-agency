<script setup>
	const customers = [
		{
			image: '/customer-1.png',
			name: 'zdenek_turek'
		},
		{
			image: '/customer-2.png',
			name: 'rterra.cz'
		},
		{
			image: '/customer-3.png',
			name: 'czechparties.cz'
		},
		{
			image: '/customer-4.png',
			name: 'alensbeautylife'
		},
		{
			image: '/customer-5.png',
			name: 'stucco.cz'
		},
		{
			image: '/customer-6.png',
			name: 'barleyy'
		},
		{
			image: '/customer-7.png',
			name: 'digitalhouse.cz'
		},
		{
			image: '/customer-8.png',
			name: 'bymodels_servis'
		},
		{
			image: '/customer-9.png',
			name: 'bethanyperryart'
		}
	];
</script>

<template>
	<section id="why-choose-us" class="lg:px-8">
		<div class="bg-fa-E6EEFF lg:rounded-xl">
			<main class="container grid lg:grid-cols-2 xl:gap-4 gap-9 py-20 text-fa-051942">
				<!-- Left -->
				<div>
					<h2 class="font-extrabold text-7xl">Why Choose Us</h2>
					<br />
					<h3 class="font-semibold text-4xl">As A Reliable Companion</h3>

					<p class="mt-6">We have more than five years of experience in social media marketing.</p>
					<p class="mt-4">We have built up many Instagram pages & helped my influencers to get more clout and fame.</p>
					<p class="mt-4">We are very happy to help and satisfy many customers with our service.</p>

					<button
						type="button"
						class="rounded-md py-5 px-14 bg-fa-FFE0AC hover:bg-fa-FFCC76 transition-colors duration-300 ease-in-out text-fa-051942 mt-14 font-semibold">
						Get Started
					</button>
				</div>

				<!-- RIGHT -->
				<div class="grid md:grid-cols-3 grid-cols-2 gap-y-7 gap-x-12 sm:gap-y-14 sm:gap-x-24">
					<figure v-for="(customer, index) of customers" :key="index" class="flex flex-col items-center">
						<div class="card-zoom overflow-hidden sm:w-[100px] aspect-square w-16 rounded-[12px]">
							<img :src="customer.image" :alt="customer.name" class="sm:w-[100px] aspect-square w-16 card-zoom-image" />
						</div>
						<figcaption class="font-bold mt-3 text-base sm:text-xl">{{ customer.name }}</figcaption>
					</figure>
				</div>
			</main>
		</div>
	</section>
</template>
