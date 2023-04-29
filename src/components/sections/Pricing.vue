<template>
	<section id="pricing" class="bg-no-repeat bg-center bg-cover bg-bottom" :style="{ backgroundImage: `url('pricing-bg.svg')` }">
		<div class="container text-fa-051942 py-16">
			<header class="text-center">
				<h2 class="font-bold text-7xl leading-tight">Pricing</h2>
			</header>
			<main class="mt-14">
				<div class="grid md:grid-cols-[repeat(3,minmax(0,360px))] justify-center gap-10 items-stretch">
					<!-- First -->
					<div
						class="flex flex-col pt-12 py-14 items-center justify-around bg-white rounded-[50px] border-[rgba(104,134,197,0.3)] border transition-shadow hover:shadow-[0px_50px_80px_rgba(104,134,197,0.3)] duration-300 ease-in-out">
						<strong class="text-2xl">3 MONTHS</strong>
						<span class="font-medium">membership</span>

						<strong class="text-4xl sm:text-5xl mt-16">186 &euro;</strong>
						<strong class="mt-4">61 &euro; / month</strong>

						<button
							type="button"
							class="rounded-md py-5 px-14 bg-fa-FFE0AC hover:bg-fa-FFCC76 transition-colors duration-300 ease-in-out text-fa-051942 mt-20 font-bold">
							PURCHASE
						</button>
					</div>
					<!-- Second -->
					<div
						class="flex flex-col pt-12 py-14 items-center justify-around bg-white rounded-[50px] border-[rgba(104,134,197,0.3)] border transition-shadow hover:shadow-[0px_50px_80px_rgba(104,134,197,0.3)] duration-300 ease-in-out">
						<strong class="text-2xl">6 MONTHS</strong>
						<span class="font-medium">membership</span>

						<strong class="text-4xl sm:text-5xl mt-16">341 &euro;</strong>
						<strong class="mt-4">
							<span class="text-[#9E9E9E] relative">
								<div class="absolute w-0.5 h-full bg-[#9E9E9E] rotate-[69.85deg] left-3"></div>
								61&euro;</span
							>
							56 &euro; / month</strong
						>

						<button
							type="button"
							class="rounded-md py-5 px-14 bg-fa-FFE0AC hover:bg-fa-FFCC76 transition-colors duration-300 ease-in-out text-fa-051942 mt-20 font-bold">
							PURCHASE
						</button>
					</div>
					<!-- Last item -->
					<div
						class="flex flex-col pt-12 py-14 items-center bg-white rounded-[50px] border-[rgba(104,134,197,0.3)] border transition-shadow hover:shadow-[0px_50px_80px_rgba(104,134,197,0.3)] duration-300 ease-in-out">
						<strong class="text-2xl">CONTACT US</strong>
						<span class="font-medium"> for multiple accounts </span>

						<strong class="text-xl sm:text-2xl mt-20 px-8">FOR THE BEST PRICE</strong>
						<p class="text-center mt-9 px-8">
							Email us the number of accounts you want to use our service at <br />
							<a href="mailto:info@follow-agency.com" class="underline transition-colors hover:text-fa-6886C5"
								>info@follow-agency.com</a
							>
						</p>
					</div>
				</div>
			</main>
			<footer class="mt-16">
				<p class="font-bold text-2xl text-center">
					Registration is required to purchase services. <br />
					After registration, you will be guided by a video wizard who will help you set up the services.
				</p>
			</footer>
		</div>
	</section>
</template>
