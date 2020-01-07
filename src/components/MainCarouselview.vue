<template>
	<div id="main-carousel-view" @mouseover="autoplay = false" @mouseout="autoplay = true" >
		<Carousel v-model="value1" loop :autoplay="autoplay" dots="inside" radius-dot>
			<CarouselItem>
				<!-- <div class="demo-carousel">1</div> -->
				<div class="demo-carousel"><img src="../assets/images/home/carousel/1.png" alt=""></div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel"><img src="../assets/images/home/carousel/2.png" alt=""></div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel"><img src="../assets/images/home/carousel/3.png" alt=""></div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel"><img src="../assets/images/home/carousel/4.png" alt=""></div>
			</CarouselItem>
		</Carousel>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				value1: 0,
				autoplay: true
			}
		}
	}
</script>
<style>
	#main-carousel-view {
		text-align: center;
	}
	#main-carousel-view img {
		width: 100%;
	}
	
</style>
