<script setup>
	import Layout from '../components/Layout.vue';

	const experiences = [
		'We have more than five years of experience in social media marketing.',
		'Built up many Instagram pages & helped my influencers to get more clout & fame.',
		'We started my own company after five years working for one of the most famous social media corporation in Europe.',
		'We have had experience of managing over 400 Instagram profiles.',
		'We have helped many Instagram accounts grow to thousands of followers, with content receiving thousands of likes and comments from users.',
		'Built page with more than 40 million monthly reach.',
		'Start making money off Instagram by promoting your product while I grow your following and exposure.'
	];
</script>
<template>
	<Layout>
		<section id="about us" class="py-14">
			<main class="container text-center text-fa-051942">
				<div>
					<h2 class="font-bold text-4xl md:text-5xl">Our Story</h2>
					<iframe
						src="https://www.youtube.com/embed/x_ntXNd7NR8"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
						class="mx-auto mt-8 aspect-video w-full max-w-4xl bg-fa-051942"></iframe>
				</div>

				<div class="mt-14 max-w-5xl mx-auto">
					<h2 class="font-bold text-4xl md:text-5xl">Our Experience</h2>
					<ul class="mt-6 text-left">
						<li v-for="experience of experiences" class="mt-6 grid grid-cols-[36px_auto] gap-4">
							<img src="/checkmark.svg" alt="checkmark" class="pt-3 w-7 h-7 md:w-9 md:h-9" />
							<span class="text-lg md:text-2xl font-medium">{{ experience }}</span>
						</li>
					</ul>
				</div>
			</main>
		</section>
	</Layout>
</template>
