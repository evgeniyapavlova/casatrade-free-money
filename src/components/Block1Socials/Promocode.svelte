<script>
	import Copy from './svg/Copy.svelte';
	import Check from './svg/Check.svelte';

	export let isBlockDone, promocodeValue, promocodeText;
	let copied = false;

	function copyContent() {
		navigator.clipboard.writeText(promocodeValue);
		copied = true;
	}
</script>

<div class="promocode" class:visible={isBlockDone}>
	<div>
		Promo Code: <span class="promocode-btn"
			>{promocodeValue}
			<button class="promocode-copy" on:click={copyContent}
				>{#if copied}<Check />{:else}<Copy />{/if}</button
			>
		</span>
		<div class="text-m">{@html promocodeText}</div>
	</div>
</div>

<style>
	.promocode {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px;
		opacity: 0;
		transform: scale(0);
		transition:
			opacity 0.2s ease-in-out,
			transform 0.2s ease-in-out;
	}
	.promocode.visible {
		opacity: 1;
		transform: scale(1);
	}
	span {
		border: 1px solid rgba(255, 255, 255, 0.15);
		padding: 10px 20px;
		border-radius: 8px;
		margin-left: 24px;
	}

	.text-m {
		margin-top: 40px;
	}

	.promocode-copy:hover {
		transform: translateY(-2px);
	}
	.promocode-copy {
		cursor: pointer;
		border: none;
		position: absolute;
		width: 44px;
		height: 44px;
		border-radius: 6px;
		background-color: var(--violet-3);
		top: -45px;
		left: calc(50% - 22px);
		display: flex;
		align-items: center;
		justify-content: center;
		transition:
			transform 0.2s ease-out,
			opacity 0.2s ease-out;
		opacity: 0;
	}
	.promocode-copy::before {
		content: '';
		position: absolute;
		bottom: -18px;
		left: 50%;
		transform: translateX(-50%);
		border-width: 10px;
		border-style: solid;
		border-color: var(--violet-3) transparent transparent transparent;
	}

	.promocode-btn {
		position: relative;
		cursor: pointer;
	}

	.promocode-btn:hover .promocode-copy {
		opacity: 1;
	}
</style>
