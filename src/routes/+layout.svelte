<script>
	import '$lib/styles/fonts.css';
	import '$lib/styles/buttons.scss';
	import './styles.scss';
</script>

<div class="app">
	<slot />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
