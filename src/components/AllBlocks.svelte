<script>
	import Header from './common/Header/Header.svelte';
	import Block1Socials from './Block1Socials/Block1Socials.svelte';
	import Block2Watch from './Block1Socials/Block2Watch.svelte';
	import Block3Contacts from './Block1Socials/Block3Contacts.svelte';
</script>

<Header />
<section>
	<div class="heading">
		<h1 class="text-xl">
			Dear name_surname,<br /> Сasatrade gives its traders the opportunity to get additional rewards.
		</h1>
		<h2 class="text-l">
			Complete tasks and increase your level, get prizes and get more out of trading than others
			with new broker Сasatrade.
		</h2>
	</div>
	<Block1Socials />
	<Block2Watch />
	<Block3Contacts />
</section>

<style>
	section {
		position: relative;
		text-align: center;
	}
	.heading {
		margin: 0 auto;
		max-width: 960px;
		padding: 80px 0 60px;
	}
	h1 {
		margin-bottom: 16px;
	}
</style>
