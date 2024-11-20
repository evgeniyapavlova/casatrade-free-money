<script>
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import ButtonSubscribe from './ButtonSubscribe.svelte';
	import Promocode from './Promocode.svelte';
	import Email from './img/Email.svelte';
	import Phone from './img/Phone.svelte';

	const done = [false, false];
	export let isBlockDone;
	let isBlockHidden = false;
	const promocodeValue = 'PROMOCODE 3';
	const promocodeText =
		'A unique training material that will help you improve your trading strategies and trade profitably!';
	$: isBlockDone = done.filter((el) => !el).length === 0;
</script>

{#if !isBlockHidden}
	<div class="wrapper-bgr" transition:fade>
		<span class="tag">Exclusive award</span>
		<div class="wrapper" class:hidden={isBlockDone}>
			<div class="row">
				<div class="social-logo">
					<svelte:component this={Email} />
					Confirm email address
				</div>
				<div class="social-button">
					<ButtonSubscribe bind:done={done[0]} />
				</div>
			</div>
			<div class="row">
				<div class="social-logo">
					<svelte:component this={Phone} />
					Enter your phone number in your profile
				</div>
				<div class="social-button">
					<ButtonSubscribe bind:done={done[1]} />
				</div>
			</div>
		</div>
		<Promocode {promocodeValue} {promocodeText} {isBlockDone} link="{base}/files/iq_book_34.pdf" />
	</div>
{/if}

<style>
	.tag {
		position: absolute;
		right: 40px;
		top: -12px;
		font-size: 14px;
		text-transform: uppercase;
		border-radius: 4px;
		padding: 6px 10px 5px;
		background-color: rgba(255, 255, 255, 0.1);
		line-height: 1;
		background-color: var(--primary);
	}
</style>
