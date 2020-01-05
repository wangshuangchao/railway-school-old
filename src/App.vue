<template>
	<div id="app">
		<MainTitle></MainTitle>
		<MainContent></MainContent>
		<Danrudanchu></Danrudanchu>
	</div>
</template>

<script>
	import MainTitle from "components/MainTitle.vue"
	import MainContent from "views/containt/MainContent.vue"
	import Danrudanchu from "components/Danrudanchu.vue"

	export default {
		components: {
			MainTitle,
			MainContent,
			Danrudanchu
		}
	}
</script>

<style>
	#app {
		/* color: red; */
	}
</style>
