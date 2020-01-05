<template>
	<div>
		<button @click="boxshow = !boxshow" id="ddd">点击展开/关闭</button>
		<transition name="draw">
			<!--这里的name 和 css 类名第一个字段要一样-->
			<div class="box" v-show="boxshow"></div>
		</transition>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				boxshow:false
			}
		}
	}
</script>

<style scoped>
	.box{
	    height:200px;width: 200px;
	    background-color:black;
		position: absolute;
		top: 500px;
	}
	.draw-enter-active, .draw-leave-active {
	    transition: all 1s ease;
	}
	.draw-enter, .draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
	    height: 0;
	}
	#ddd {
		position: absolute;
		top: 400px;
	}
</style>
