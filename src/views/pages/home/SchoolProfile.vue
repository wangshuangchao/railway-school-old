<template>
	<div id="school-profile">
		<h2>学校概况</h2>
		<hr />
		<div class="horizontal-row">
			<div><img src="../../../assets/images/home/5.png" alt=""></div>
			<div>
				<div style="height: 250px;margin-top: 20px;text-indent:2em;color: #666666;">
					<p>
					学校前身是创建于1934年的国立西北农林专科学校。1999年9月，经国务院批准，由原西北农业大学、西北林学院、中国科学院水利部水土保持研究所、水利部西北水利科学研究所、陕西省农业科学院、陕西省林业科学院、陕西省中国科学院西北植物研究所等7所科教单位合并组建为西北农林科技大学。
					</p>
					<br />
					<p>
						 建校80余年来，学校一代代师生秉承“经国本，解民生，尚科学”的办学理念和“诚朴勇毅”的校训，心怀社稷，情系苍生，承远古农神后稷之志，行当代“教民稼穑”之为，坚持走产学研紧密结......
					</p>
				</div>
				<p style="color: #EE9900; margin-left: 500px;" @click="toSchIntroduction">更多+</p>
			</div>
		</div>
		<div class="horizontal-row">
			<div>1</div>
			<div>2</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			toSchIntroduction() {
				this.$store.commit('survey')
				this.$router.replace("/schIntroduction")
			}
		}
	}
</script>

<style>
	#school-profile {
		text-align: center;
		margin-top: 30px;
		width: 1200px;
		height: 1000px;
		background-color: #000000;
		margin: 0 auto;
		margin-top: 30px;
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
		text-align: start;
		background-color: #EE9900;
		margin-top: 30px;
	}

	.horizontal-row>div {
		margin-top: 30px;
		float: left;
		width: 590px;
		height: 300px;
		margin: 0 auto;
		color: red;

	}

	.horizontal-row>div:nth-child(1) {
		background-color: #0000FF;
		margin-right: 10px;
	}

	.horizontal-row>div:nth-child(1) img {
		width: 590px;
		height: 300px;
	}

	.horizontal-row>div:nth-child(2) {
		background-color: #00FF00;
		margin-left: 10px;
	}

	.horizontal-row::after {
		content: "";
		clear: left;
		display: block;
	}
</style>
