<template>
    <div id="abcd">
		<Menu mode="horizontal" :theme="theme1" active-name="1" 
		:style="{'background-color': 'blue'}">
		    <MenuItem name="1" :style="{background: '#FFFFFF',width: '160px', 'text-align': 'center', color: 'red'}">
		        首页
		    </MenuItem>
		    <MenuItem name="2" class = "aabb">
		        用户管理
		    </MenuItem>
		    <Submenu name="3">
		        <template slot="title">
		            统计分析
		        </template>
		        <MenuGroup title="使用">
		            <MenuItem name="3-1">新增和启动</MenuItem>
		            <MenuItem name="3-2">活跃分析</MenuItem>
		            <MenuItem name="3-3">时段分析</MenuItem>
		        </MenuGroup>
		        <MenuGroup title="留存">
		            <MenuItem name="3-4">用户留存</MenuItem>
		            <MenuItem name="3-5">流失用户</MenuItem>
		        </MenuGroup>
		    </Submenu>
		    <MenuItem name="4">
		        综合设置
		    </MenuItem>
		</Menu>
		<br>
		<p>Change theme</p>
		<RadioGroup v-model="theme1">
		    <Radio label="light"></Radio>
		    <Radio label="dark"></Radio>
		    <Radio label="primary"></Radio>
		</RadioGroup>
	</div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
<style>
	#abcd {
		text-align: center;
		background-color: #00FF00;
	}
	.aabb {
		background-color: white;
		color: red !important;
		font-size: 20px;
		
	}
</style>
