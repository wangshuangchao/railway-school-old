<template>
	<div id="main-title">
		<div id="logo">
			logo
		</div>
		<div id="cellphone">
			热线：1234567
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	#main-title {
		z-index:999;
		height: 100px;
		line-height: 100px;
		width: 100%;
		background-color: #FFFFFF;
		position: fixed;
		top: 0px;
		left: 0px;
	}
	#logo {
		width: 100px;
		height: 30px;
		line-height: 30px;
		background-color: #0000FF;
		color: red;
		display: inline-block;
		margin-left: 250px;
	}
	#cellphone {
		width: 100px;
		height: 30px;
		line-height: 30px;
		background-color: #0000FF;
		color: red;
		display: inline-block;
		float: right;
		margin-right: 300px;
		margin-top: 30px;
	}
</style>


