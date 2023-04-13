<script setup>
	const methods = [
		{
			image: 'how-we-get-1.png',
			title: "We analyze profiles that's similar to yours.",
			description:
				"We help you to select related profiles to yours. This can be your competitors' profile, a hashtag, or a page of your choice.",
			bg: 'bg-fa-E6EEFF',
			hoverBg: 'hover:bg-[#6886C5]'
		},
		{
			image: 'how-we-get-2.png',
			title: 'We point out potential followers of selected profiles',
			description: 'We address active followers of these profiles with actions such as liking posts, follow/unfollow…',
			bg: 'bg-fa-FFDDE2',
			hoverBg: 'hover:bg-[#F7697C]'
		},
		{
			image: 'how-we-get-3.png',
			title: 'You will get new and active followers',
			description:
				'Since AI works with the same group of audience, many of these accounts will start following you. By publishing good quality content, you will gain more and more followers day by day. Success is guaranteed!',
			bg: 'bg-fa-FFEAC7',
			hoverBg: 'hover:bg-[#F3A735]'
		}
	];
</script>
<template>
	<section id="how-we-get" class="text-fa-051942">
		<div class="container py-24">
			<main class="mt-14 grid lg:grid-cols-[repeat(3,minmax(0,360px))] gap-10 justify-center">
				<div class="tracking-tight col-span-full">
					<h2 class="text-7xl font-bold">How We Get</h2>
					<br />
					<p class="font-semibold text-4xl">Real Instagram Followers</p>
				</div>
				<div
					v-for="item of methods"
					:class="`group flex flex-col px-8 pt-10 pb-24 gap-4 items-center flex-1 rounded-[50px] max-w-full ${item.bg} ${item.hoverBg} transition-colors ease-in-out duration-300 relative`">
					<img
						:src="item.image"
						alt="image"
						width="144"
						class="group-hover:-translate-y-1 transition-transform duration-300 ease-in-out isolate relative z-10" />
					<img src="/image-ellipse.svg" alt="shadow" class="absolute top-28 group-hover:block hidden" />
					<strong
						class="text-center font-semibold text-xl group-hover:text-white group-hover:font-extrabold transition-colors ease-in-out duration-300"
						>{{ item.title }}</strong
					>
					<p
						class="group-hover:text-fa-E6EEFF font-medium group-hover:font-bold transition-colors ease-in-out duration-300">
						{{ item.description }}
					</p>
				</div>
			</main>
		</div>
	</section>
</template>
