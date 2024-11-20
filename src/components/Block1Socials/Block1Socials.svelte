<script>
	import { fade } from 'svelte/transition';
	import { socialsData, ptLinks } from './socialsData';
	import ButtonSubscribe from './ButtonSubscribe.svelte';
	import Promocode from './Promocode.svelte';
	import CloseBtn from './CloseBtn.svelte';

	const done = [false, false, false, false, false];
	let isBlockDone = false;
	let isBlockHidden = false;
	const promocodeValue = 'TI-MOLODEC';
	const promocodeText =
		'You can get a bonus +200% on your balance, promo code can be used 1 time, it is unique, you can not pass it to someone else';

	$: isBlockDone = done.filter((el) => !el).length === 0;

	function onCloseBtnClick() {
		isBlockHidden = true;
	}
</script>

{#if !isBlockHidden}
	<div class="wrapper-bgr" transition:fade>
		<CloseBtn {isBlockDone} onClick={onCloseBtnClick} />
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
