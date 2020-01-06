<template>
	<div id="items">
		<div :class="{active: active == home, unActive: active!=home, mouseover: active == home?false:mouseOver == home}" 
		@click="selected(home)" @mouseover="mover(home)" @mouseout="mout">
			{{home}}
		</div>
		<div :class="{active: active == survey, unActive: active!=survey, mouseover: active == survey?false:mouseOver == survey }" 
		@click="selected(survey)" @mouseover="mouseover1(survey)" @mouseout="mouseout1">
			<!-- {{survey}}
			<Icon type="ios-arrow-down" /> -->
			<Dropdown :style="{width: '180px', height: '70px'}">
				{{survey}}
				<Icon type="ios-arrow-down" v-if="!open1" />
				<Icon type="ios-arrow-up" v-if="open1" />
				<DropdownMenu slot="list">
					<DropdownItem><p @click="selecteda(introduce)">学校介绍</p></DropdownItem>
					<DropdownItem><p @click="selecteda(setup)">课程设置</p></DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>

		<div :class="{active: active == students, unActive: active!=students, mouseover: active == students?false:mouseOver == students }" 
		@click="selected(students)" @mouseover="mouseover2(students)" @mouseout="mouseout2">
			<!-- {{students}}
			<Icon type="ios-arrow-down" /> -->
			<Dropdown :style="{width: '180px', height: '70px'}" on-click="selecteda(regulations)">
				{{students}}
				<Icon type="ios-arrow-down" v-if="!open2" />
				<Icon type="ios-arrow-up" v-if="open2" />
				<DropdownMenu slot="list" on-click="selecteda(regulations)">
					<DropdownItem><p @click="selecteda(regulations)">招生简章</p></DropdownItem>
					<DropdownItem><p @click="selecteda(guarantee)">就业保障</p></DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
		<div :class="{active: active == demeanour, unActive: active!=demeanour, mouseover: active == demeanour?false:mouseOver == demeanour }" 
		@click="selected(demeanour)" @mouseover="mover(demeanour)" @mouseout="mout">
			{{demeanour}}
		</div>
		<div :class="{active: active == news, unActive: active!=news, mouseover: active == news?false:mouseOver == news }" 
		@click="selected(news)" @mouseover="mover(news)" @mouseout="mout">
			{{news}}
		</div>
		<div :class="{active: active == contact, unActive: active!=contact, mouseover: active == contact?false:mouseOver == contact }" 
		@click="selected(contact)" @mouseover="mouseover3(contact)" @mouseout="mouseout3">
			{{contact}}
			<!-- <Icon type="ios-arrow-down" /> -->
			<!-- <Dropdown :style="{width: '180px', height: '70px'}">
				{{contact}}
				<Icon type="ios-arrow-down" v-if="!open3" />
				<Icon type="ios-arrow-up" v-if="open3" />
				<DropdownMenu slot="list">
					<DropdownItem>在线报名</DropdownItem>
					<DropdownItem>联系我们</DropdownItem>
				</DropdownMenu>
			</Dropdown> -->
		</div>
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
				unActive: '',
				mouseOver: '',
				home: '首页',
				
				survey: '学校概况',
				introduce: '介绍',
				setup: '设置',
				
				students: '招生就业',
				regulations: '简章',
				guarantee: '保障',
				
				demeanour: '学院风采',
				news: '新闻公告',
				contact: '联系我们',
				open1: false,
				open2: false,
				open3: false
			}
		},
		methods: {
			selected(item) {
				this.active = item
				if ('首页' === item) {
					console.log('首页')
					this.$router.replace("/home")
				} else if(false){
					
				}else if(false){
					
				}else if(false){
					
				}else if(false){
					
				}else if(false){
					
				}else if(false){
					
				}else if('学院风采' === item){
					console.log('学院风采')
					this.$router.replace("/academyStyle")
				}else if('新闻公告' === item){
					console.log('新闻公告')
					this.$router.replace("/newsBulletin")
				}else if('联系我们' === item){
					console.log('联系我们')
					this.$router.replace("/ContactUs")
				}
			},
			selecteda(item){
				if ('介绍' === item) {
					console.log('介绍')
					this.$router.replace("/schIntroduction")
				} else if('设置' === item){
					console.log('设置')
					this.$router.replace("/classroomSetup")
				} else if('简章' === item){
					console.log('简章')
					this.$router.replace("/studentBrochure")
				} else if('保障' === item){
					console.log('保障')
					this.$router.replace("/employmentSecurity")
				}
			},
			mover(item) {
				this.mouseOver = item
			},
			mout() {
				this.mouseOver = ''
			},
			mouseover1(item) {
				this.mouseOver = item
				this.open1 = true
			},
			mouseout1() {
				this.mouseOver = ''
				this.open1 = false
			},
			mouseover2(item) {
				this.mouseOver = item
				this.open2 = true
			},
			mouseout2() {
				this.mouseOver = ''
				this.open2 = false
			},
			mouseover3(item) {
				this.mouseOver = item
				this.open3 = true
			},
			mouseout3() {
				this.mouseOver = ''
				this.open3 = false
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
		/* height: 70px; */
		line-height: 70px;
		width: 180px;
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
	
	.mouseover {
		background-color: #0000FF;
	}
</style>
