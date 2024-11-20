<script>
	import { lang } from '$lib/stores/lang';
	import MainPageNew from '$comps/AllBlocks.svelte';
	import meta_img from '$lib/images/meta__img__en.jpg';
	const title = 'Casatrade — a trading platform that feels like home';
	const desc = 'Trade FX, stocks, crypto, and options with 90% profitability';

	$lang = 'en';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta_img} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta_img} />
</svelte:head>

<MainPageNew lang="en" />
