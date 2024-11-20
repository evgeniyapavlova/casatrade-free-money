<script>
	import { base } from '$app/paths';
	import Header from './common/Header/Header.svelte';
	import Block1Socials from './Block1Socials/Block1Socials.svelte';
	import Block2Watch from './Block1Socials/Block2Watch.svelte';
	import Block3Contacts from './Block1Socials/Block3Contacts.svelte';
	import '$lib/styles/fireworks.scss';
	import CloseBtn from './Block1Socials/CloseBtn.svelte';

	let allBlocksDone = false;
	// let allBlocksDone = true;
	let isClosed = false;

	const done = [false, false, false];
	$: allBlocksDone = done.filter((el) => !el).length === 0;
</script>

<Header />

<section class:opacity50={allBlocksDone && !isClosed}>
	<div class="heading">
		<h1 class="text-xl">
			Dear name_surname,<br /> Сasatrade gives its traders the opportunity to get additional rewards.
		</h1>
		<h2 class="text-l">
			Complete tasks and increase your level, get prizes and get more out of trading than others
			with new broker Сasatrade.
		</h2>
	</div>
	<Block1Socials bind:isBlockDone={done[0]} />
	<Block2Watch bind:isBlockDone={done[1]} />
	<Block3Contacts bind:isBlockDone={done[2]} />
</section>
{#if allBlocksDone && !isClosed}
	<div class="success-wrap">
		<div class="pyro">
			<div class="before"></div>
			<div class="after"></div>
		</div>
		<div class="success animated bounceIn">
			<CloseBtn
				isBlockDone={true}
				onClick={() => {
					isClosed = true;
				}}
			/>
			<img src="{base}/images/trophy.png" alt="Congratulations" />
			Congratulations, you're moving up to level 2.

			<h1>HARDER. PROFITABLE. FUN.</h1>
		</div>
	</div>
{/if}

<style>
	img {
		margin: 0 auto 29px;
		width: 200px;
		max-width: 100%;
	}
	section {
		position: relative;
		text-align: center;
	}
	section.opacity50 {
		opacity: 0.5;
	}
	.heading {
		margin: 0 auto;
		max-width: 960px;
		padding: 80px 0;
	}
	h1 {
		margin-bottom: 16px;
	}
	.success-wrap {
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.success {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 80vh;
		width: 700px;
		/* height: 80vh; */
		padding: 80px 40px;
		/* max-height: 500px; */
		text-align: center;
		background-image: linear-gradient(
			to right,
			#37212d 0%,
			#39202e 10%,
			#3a2133 20%,
			#3b213a 30%,
			#3b213a 40%,
			#3d2243 50%,
			#3e224b 60%,
			#3e2250 70%,
			#3e2251 80%,
			#3e2251 90%
		);
		position: relative;
	}

	.animated {
		-webkit-animation-duration: 1s;
		animation-duration: 1s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}
	@keyframes bounceIn {
		0%,
		100%,
		20%,
		40%,
		60%,
		80% {
			-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}

		0% {
			opacity: 0;
			-webkit-transform: scale3d(0.3, 0.3, 0.3);
			transform: scale3d(0.3, 0.3, 0.3);
		}

		20% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1);
			transform: scale3d(1.1, 1.1, 1.1);
		}

		40% {
			-webkit-transform: scale3d(0.9, 0.9, 0.9);
			transform: scale3d(0.9, 0.9, 0.9);
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(1.03, 1.03, 1.03);
			transform: scale3d(1.03, 1.03, 1.03);
		}

		80% {
			-webkit-transform: scale3d(0.97, 0.97, 0.97);
			transform: scale3d(0.97, 0.97, 0.97);
		}

		100% {
			opacity: 1;
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}

	.bounceIn {
		-webkit-animation-name: bounceIn;
		animation-name: bounceIn;
	}
</style>
