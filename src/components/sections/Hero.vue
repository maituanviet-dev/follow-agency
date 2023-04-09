<template>
	<section id="hero">
		<main class="mt-20 grid lg:grid-cols-2 items-center gap-6 container pb-28">
			<!-- TEXT -->
			<div>
				<p class="rounded-[40px] bg-[#FFDDE1] text-lg sm:text-xl font-medium w-max max-w-sm py-3 px-5 sm:py-5 sm:px-9">
					#1 Option for Instagram growth
				</p>
				<h1 class="mt-10 tracking-tight text-fa-6886C5 font-extrabold text-6xl sm:text-7xl">THE BEST TOOL</h1>
				<br />
				<h2 class="tracking-tight text-4xl sm:text-5xl font-bold text-fa-051942">To Gain More</h2>
				<br />
				<h2 class="tracking-tight text-4xl sm:text-5xl font-bold text-fa-051942">Instagram Followers</h2>

				<p class="mt-14 text-fa-051942 font-medium text-lg sm:text-xl">
					Getting 100% real & targeted Instagram followers is easier than ever with Follow Agency.
				</p>

				<button
					type="button"
					class="rounded-md py-5 px-14 bg-fa-FFE0AC hover:bg-fa-FFCC76 transition-colors duration-300 ease-in-out text-fa-051942 font-semibold mt-16">
					Learn more
				</button>
			</div>
			<!-- IMAGES -->
			<div class="hidden sm:block p-14 md:p-0">
				<div
					class="aspect-square w-full max-w-[570pc] relative bg-no-repeat bg-center bg-contain"
					:style="{ backgroundImage: `url('hero-1.svg')` }">
					<!-- The hand -->
					<transition
						enter-from-class="translate-y-[150%] opacity-0"
						enter-active-class="transition duration-1000 ease-in-out"
						appear>
						<img
							src="hero-hand.png"
							alt="hero hand"
							class="max-w-[79%] w-full aspect-[0.821] absolute mx-auto left-[10%] top-[1.75%]" />
					</transition>
					<!-- Instagram icon -->
					<transition
						enter-from-class="translate-y-[150%] opacity-0"
						enter-active-class="transition duration-1000 delay-700 ease-in-out"
						appear>
						<img
							src="hero-1.png"
							alt="hero image 1"
							class="aspect-square w-full max-w-[32.8%] absolute bottom-[2%] right-[2%]" />
					</transition>

					<!-- instagram noti 1 -->
					<transition
						enter-from-class="translate-y-[150%] opacity-0"
						enter-active-class="transition duration-1000 delay-700 ease-in-out"
						appear>
						<img
							src="hero-insta-2.png"
							alt="instagram img 1"
							class="w-full max-w-[50.88%] absolute top-[37.89%] left-[-10.7%]" />
					</transition>

					<!-- instagram noti 2 -->
					<transition
						enter-from-class="translate-y-[150%] opacity-0"
						enter-active-class="transition duration-1000 delay-700 ease-in-out"
						appear>
						<img
							src="hero-insta-1.png"
							alt="instagram img 1"
							class="w-full max-w-[41%] absolute top-[19.47%] left-[4.39%]" />
					</transition>
				</div>
			</div>
		</main>
	</section>
</template>
