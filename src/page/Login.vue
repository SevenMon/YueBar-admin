<template>
	<div class="login">
		<login-com></login-com>
		<!--<el-button @click="set">设置cookie</el-button>
		<el-button @click="get">获取cookie</el-button>
		<el-button @click="del">获取cookie</el-button>
		<input type="text" v-model="input"/>
		{{ output }}-->
	</div>
</template>

<script>
	import LoginCom from '@/components/LoginCom'
	export default{
		components:{
			LoginCom
		},
		data(){
			return{

			}
		},
		methods:{
			/*set(){
				this.$cookie.set('test', this.input, 1);
			},
			get(){
				this.output = this.$cookie.get('test');
			},
			del(){
				this.$cookie.delete('test');
			}*/
		}
	}
</script>

<style lang="less">
	.login{
		padding: 0;
		margin: 0;
		border: 0;
		background-image: url(../../static/img/login/login-background.jpg);
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
	}
</style>