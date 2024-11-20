<script>
	import { fade } from 'svelte/transition';
	import ButtonSubscribe from './ButtonSubscribe.svelte';
	import Promocode from './Promocode.svelte';
	import CloseBtn from './CloseBtn.svelte';
	import Email from './img/Email.svelte';
	import Phone from './img/Phone.svelte';
	import Tg from './img/TG.svelte';

	const done = [false, false];
	let isBlockDone = false;
	let isBlockHidden = false;
	const promocodeValue = 'PROMOCODE 3';
	const promocodeText = 'Description 3';
	$: isBlockDone = done.filter((el) => !el).length === 0;

	function onCloseBtnClick() {
		isBlockHidden = true;
	}
</script>

{#if !isBlockHidden}
	<div class="wrapper-bgr" transition:fade>
		<CloseBtn {isBlockDone} onClick={onCloseBtnClick} />
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
		<Promocode {promocodeValue} {promocodeText} {isBlockDone} />
	</div>
{/if}
