<template>
	<div id="main-content">
		<MainNav></MainNav>
		<div id="aaa">
			内容区，不同路由，不同内容
		</div>
		<TestNav></TestNav>
	</div>
</template>

<script>
	import MainNav from "../../components/MainNav.vue"
	import TestNav from "../../components/TestNav.vue"
	
	export default {
		components: {
			MainNav,
			TestNav
		}
	}
</script>

<style>
	#main-content {
		/* background-color: aqua; */
		width: 100%;
		position: relative;
		top: 100px;
		left: 0px;
	}
	#aaa {
		background-color: #17233D;
	}
	
</style>
