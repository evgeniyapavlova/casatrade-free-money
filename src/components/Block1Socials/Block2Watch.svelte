<script>
	import { fade } from 'svelte/transition';
	import { socialsData, ptLinks } from './socialsData';
	import ButtonSubscribe from './ButtonSubscribe.svelte';
	import Promocode from './Promocode.svelte';
	import CloseBtn from './CloseBtn.svelte';
	import Youtube from './img/Youtube.svelte';
	import Tg from './img/TG.svelte';

	const done = [false, false];
	let isBlockDone = false;
	let isBlockHidden = false;
	const promocodeValue = 'RISK-FREE DEAL';
	const promocodeText = "Make the transaction risk-free, you don't have to pay for it";
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
					<svelte:component this={Youtube} />
					Watch the full video on our channel
				</div>
				<div class="social-button">
					<ButtonSubscribe bind:done={done[0]} link={ptLinks[0]} />
				</div>
			</div>
			<div class="row">
				<div class="social-logo">
					<svelte:component this={Tg} />
					Like all the posts on Telegram
				</div>
				<div class="social-button">
					<ButtonSubscribe bind:done={done[1]} link={ptLinks[2]} />
				</div>
			</div>
		</div>
		<Promocode {promocodeValue} {promocodeText} {isBlockDone} />
	</div>
{/if}
