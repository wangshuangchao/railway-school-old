<template>
	<div id="app">
		<MainTitle></MainTitle>
		<MainContent></MainContent>
	</div>
</template>

<script>
	import MainTitle from "components/MainTitle.vue"
	import MainContent from "views/containt/MainContent.vue"
	import Aaa from "components/Aaa.vue"

	export default {
		components: {
			MainTitle,
			MainContent,
			Aaa
		}
	}
</script>

<style>
</style>
