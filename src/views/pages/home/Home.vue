<template>
	<div>
		<!-- 首页 -->
		<MainCarouselview></MainCarouselview>
		<!-- <MainCarousel></MainCarousel> -->
		<SchoolProfile></SchoolProfile>
		<!-- <SchoolProfileIview></SchoolProfileIview> -->
	</div>
</template>

<script>
	import MainCarousel from "../../../components/MainCarousel.vue"
	import MainCarouselview from "../../../components/MainCarouselview.vue"
	import SchoolProfile from "./SchoolProfile.vue"
	import SchoolProfileIview from "./SchoolProfileIview.vue"
	
	export default {
		components: {
			MainCarousel,
			MainCarouselview,
			SchoolProfile,
			SchoolProfileIview
		}
	}
</script>

<style>
</style>
