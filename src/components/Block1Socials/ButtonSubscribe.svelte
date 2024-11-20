<script>
	import { writable } from 'svelte/store';

	const clicksAmount = writable(0);

	export let link = null,
		done,
		clicksToSuccess = 1,
		isIcon = true;

	$: done = $clicksAmount >= clicksToSuccess;

	const handleClick = (e) => {
		e.preventDefault();
		if ($clicksAmount < clicksToSuccess) {
			if (link) {
				window.open(link, '_blank').focus();
			}

			$clicksAmount++;
		}
	};
</script>

<button
	target="_blank"
	class="button button-tertiary button-medium"
	class:button-icon={isIcon}
	on:click={handleClick}
	disabled={$clicksAmount >= clicksToSuccess}
>
	{#if isIcon}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			width="24"
			height="24"
			viewBox="0 0 256 256"
			xml:space="preserve"
		>
			<defs> </defs>
			<g
				style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
				transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
			>
				<path
					d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
					style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
					transform=" matrix(1 0 0 1 0 0) "
					stroke-linecap="round"
				/>
			</g>
		</svg>
	{:else}
		Subscribe
	{/if}
</button>
