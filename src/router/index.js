import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Home from '@/page/Home'
import VueWechatTitle from 'vue-wechat-title';  

Vue.use(VueWechatTitle)
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/login',
			name: 'Login',
			component: Login,
			meta: {
				title: '登录页'
			}
		},
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				title: '首页'
			}
		}
	]
})