<template>
	<div id="main-content">
		<MainNav></MainNav>
		<router-view></router-view>
	</div>
</template>

<script>
	import MainNav from "../../components/MainNav.vue"
	
	export default {
		components: {
			MainNav
		}
	}
</script>

<style>
	#main-content {
		/* background-color: aqua; */
		width: 100%;
		position: absolute;
		top: 100px;
		left: 0px;
	}
	
</style>
