<template>
	<div id="school-profile">
		<div><h2>学校概况</h2></div>
		<hr />
		<div class="horizontal-row">
			<div><img src="../../../assets/images/home/5.png" alt=""></div>
			<div>2</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	#school-profile {
		text-align: center;
		margin-top: 30px;
	}
	#school-profile>div {
		margin: 0 auto;
	}
	#school-profile h2 {
		color: #333333;
	}
	#school-profile hr {
		border: solid 2px;
		width: 35px;
		margin: 0 auto;
		color: #EE9900;
	}
	
	.horizontal-row {
		background-color: #EE9900;
	}
	
	.horizontal-row>div {
		padding-top: 20px;
		padding-bottom: 20px;
		/* display: inline-block; */
		float: left;
		width: 400px;
		height: 300px;
		/* line-height: 300px; */
		color: red;
		
	}
	
	.horizontal-row>div:nth-child(1) {
		margin-right: 10px;
		margin-top: 5px;
		background-color: blue;
		margin-left: 500px;
	}
	
	.horizontal-row>div:nth-child(2) {
		margin-left: 10px;
		/* margin-top: 300px; */
		background-color: greenyellow;
	}
	
	
</style>
