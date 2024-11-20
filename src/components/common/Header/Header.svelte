<script>
	import { base } from '$app/paths';
	import Logo from '../Logo.svelte';

	import './scss/header.scss';
</script>

<div class="bgr-oval-wrap">
	<div class="bgr-oval"></div>
</div>
<div class="header-placement">
	<section class="header-wrap">
		<header>
			<a href="{base}/" class="logo-link" alt="Casatrade main page" aria-label="Casatrade main page"
				><Logo /></a
			>
		</header>
	</section>
</div>
