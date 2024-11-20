<script>
	export let isBlockDone, onClick;
</script>

{#if isBlockDone}
	<button class="close-btn" aria-label="Close modal" on:click={onClick}></button>{/if}

<style>
	.close-btn {
		cursor: pointer;
		display: block;
		box-sizing: border-box;
		position: absolute;
		z-index: 1000;
		top: 1rem;
		right: 1rem;
		margin: 0;
		padding: 0;
		width: 1.5rem;
		height: 1.5rem;
		border: 0;
		color: var(--font-color-2);
		border-radius: 1.5rem;
		transition:
			transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
			background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
		appearance: none;
		-webkit-appearance: none;
	}
	.close-btn::after,
	.close-btn::before {
		content: '';
		display: block;
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		width: 1rem;
		height: 1px;
		background: var(--font-color-2);
		transform-origin: center;
		transition:
			height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
			background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
	}
	.close-btn::before {
		-webkit-transform: translate(0, -50%) rotate(45deg);
		-moz-transform: translate(0, -50%) rotate(45deg);
		transform: translate(0, -50%) rotate(45deg);
		left: 0.25rem;
	}
	.close-btn::after {
		-webkit-transform: translate(0, -50%) rotate(-45deg);
		-moz-transform: translate(0, -50%) rotate(-45deg);
		transform: translate(0, -50%) rotate(-45deg);
		left: 0.25rem;
	}
	.close-btn:hover::before,
	.close-btn:hover::after {
		height: 2px;
		background: var(--font-color-1);
	}
	.close-btn:hover {
		outline: none;
	}
	.close-btn:focus-visible {
		outline: none;
	}
</style>
