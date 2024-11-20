<script>
	import { fade } from 'svelte/transition';
	import { socialsData, ptLinks } from './socialsData';
	import ButtonSubscribe from './ButtonSubscribe.svelte';
	import Promocode from './Promocode.svelte';

	const done = [false, false, false, false, false];
	export let isBlockDone;
	let isBlockHidden = false;
	const promocodeValue = 'TI-MOLODEC';
	const promocodeText =
		'You can get a bonus +200% on your balance, promo code can be used 1 time, it is unique, you can not pass it to someone else';

	$: isBlockDone = done.filter((el) => !el).length === 0;
</script>

{#if !isBlockHidden}
	<h2>lvl 1 - beginner</h2>
	<div class="wrapper-bgr" transition:fade>
		<div class="wrapper-bgr-1"></div>

		<div class="wrapper" class:hidden={isBlockDone}>
			{#each socialsData as { img, label }, index}
				<div class="row">
					<div class="social-logo">
						<svelte:component this={img} />
						{label}
					</div>
					<div class="social-button">
						<ButtonSubscribe
							isIcon={false}
							clicksToSuccess={2}
							bind:done={done[index]}
							link={ptLinks[index]}
						/>
					</div>
				</div>
			{/each}
		</div>
		<Promocode {promocodeValue} {promocodeText} {isBlockDone} />
	</div>
{/if}

<style>
	h2 {
		margin-bottom: -20px;
	}
	.wrapper-bgr-1 {
		position: absolute;
		right: 0;
		background-image: url(/images/voucher.png);
		background-repeat: no-repeat;
		background-position: right 0 top 0;
		width: 100%;
		height: 100%;
		background-size: 500px auto;
		top: -17px;
	}
</style>
