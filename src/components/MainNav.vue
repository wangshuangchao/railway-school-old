<template>
	<div id="items">
		<div :class="{active: active == home, unActive: active!=home}" @click="selected(home)" @mouseover="mover">
			{{home}}
		</div>
		<div :class="{active: active == survey, unActive: active!=survey }" 
		@click="selected(survey)" @mouseover="mouseover" @mouseout="mouseout">
			{{survey}}
			<Icon type="ios-arrow-down" />
			<transition name="draw">
			<div class="aaa" id="div1" v-show="flag" >
				<p>aaaaaaaa</p>
				<p>aaaaaaaa</p>
				<p>aaaaaaaa</p>
				<p>aaaaaaaa</p>
				<p>aaaaaaaa</p>
				<p>aaaaaaaa</p>
			</div>
			</transition>
		</div>
		<div :class="{active: active == students, unActive: active!=students }" @click="selected(students)" @mouseover="mover">
			{{students}}
			<Icon type="ios-arrow-down" />
		</div>
		<div :class="{active: active == demeanour, unActive: active!=demeanour }" @click="selected(demeanour)" @mouseover="mover">
			{{demeanour}}
		</div>
		<div :class="{active: active == news, unActive: active!=news }" @click="selected(news)" @mouseover="mover">
			{{news}}
		</div>
		<div :class="{active: active == contact, unActive: active!=contact }" @click="selected(contact)" @mouseover="mover">
			{{contact}}
			<Icon type="ios-arrow-down" />
		</div>
		<input type="button" value="toggle" @click="flag=!flag">
		<!-- <transition>
			<h3 v-if="flag">这是一个H3</h3>
		</transition> -->
		<!-- <div v-for="item in navList"
		 :class="{active: active==item, unActive: active!=item}"
		@click="selected(item)">{{item}}</div> -->
	</div>

</template>
<script>
	export default {
		data() {
			return {
				active: '首页',
				unActive: 'unActive',
				home: '首页',
				survey: '学校概况',
				students: '招生就业',
				demeanour: '学院风采',
				news: '新闻公告',
				contact: '联系我们',
				flag: false
			}
		},
		methods: {
			selected(item) {
				this.active = item
				console.log(item)
			},
			mouseover() {
				// alert(123)
				console.log(123)
				this.flag=true
			},
			mouseout() {
				this.flag=false
			},
			mover() {
				
			}


		}
	}
</script>
<style>
	#items {
		background-color: #1A49DB;
		text-align: center;
		margin-bottom: 2px;
	}

	#items>div {
		height: 70px;
		line-height: 70px;
		width: 160px;
		display: inline-block;
		font-size: 16px;

	}

	.active {
		background-color: #FFFFFF;
		font-weight: Bold;
		color: #1A49DB;
	}

	.unActive {
		color: #FAFAFA;
	}

	.aaa {
		position: relative;
		/* width: 160px; */
		height:200px;width: 200px;
		top: 1px;
		float: left;
		color: #FAFAFA;
		background-color: #1A49DB;
		z-index: 999;
	}

	.v-enter,
	.v-leave-to {
		opacity: 0;
		transform: translateY(1px);
	}

	.v-enter-active,
	.v-leave-active {
		transition: all 3s ease;
	}
	.draw-enter-active, .draw-leave-active {
	    transition: all 0.3s ease;
	}
	.draw-enter, .draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
	    height: 0;
	}
</style>
