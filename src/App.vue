<template>
	<div id="app">
		<MainTitle></MainTitle>
		<MainContent></MainContent>

	</div>
</template>

<script>
	import MainTitle from "components/MainTitle.vue"
	import MainContent from "views/containt/MainContent.vue"

	export default {
		components: {
			MainTitle,
			MainContent
		}
	}
</script>

<style>
	#app {
		
	}
</style>
