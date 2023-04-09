<template>
	<footer class="bg-fa-E6EEFF font-manrope text-fa-051942 py-16 font-medium">
		<div
			class="grid grid-cols-1 gap-6 lg:gap-0 sm:grid-cols-2 lg:grid-cols-4 container"
		>
			<ul class="flex gap-4 flex-col">
				<li>
					<router-link to="/">
						<img src="../assets/logo.svg" alt="Logo" />
					</router-link>
				</li>
				<li>
					<span>Terms and conditions</span>
				</li>

				<li>
					<span>Privacy policy</span>
				</li>

				<li>
					<span>Ethnical Liabilities</span>
				</li>
			</ul>

			<ul class="flex flex-col gap-4">
				<li>
					<span class="font-semibold text-3xl">Contact Us</span>
				</li>
				<li>
					<img
						src="../assets/icon-envelop.svg"
						alt="icon envelop"
						class="inline-block mr-2"
					/>
					<a href="mailto:petr@followagency.cz"> petr@followagency.cz</a>
				</li>
				<li>
					<img
						src="../assets/icon-phone.svg"
						alt="icon envelop"
						class="inline-block mr-2"
					/>
					<a href="tel:+420 777 122 392">+420 777 122 392</a>
				</li>
				<li>
					<img
						src="../assets/icon-house.svg"
						alt="icon envelop"
						class="inline-block mr-2"
					/>
					<span>petrpytlik.fa</span>
				</li>
			</ul>

			<ul class="flex flex-col gap-4">
				<li>
					<span class="font-semibold text-3xl">Working hour</span>
				</li>
				<li>
					<span>Monday - Saturday</span>
				</li>

				<li>
					<span>10 am - 2 pm</span>
				</li>
			</ul>

			<ul class="flex flex-col gap-4">
				<li>
					<span class="font-semibold text-3xl">Follow us</span>
				</li>
				<li class="flex gap-2">
					<a href="#">
						<img src="../assets/logo-insta.svg" alt="logo instagram" />
					</a>
					<a href="#">
						<img
							src="../assets/logo-youtube.png"
							width="38"
							height="38"
							alt="logo youtube"
						/>
					</a>
					<a href="#">
						<img src="../assets/logo-tiktok.svg" alt="logo tiktok" />
					</a>
				</li>
			</ul>
		</div>
	</footer>
</template>
