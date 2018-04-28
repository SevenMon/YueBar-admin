import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
import constant from './modules/constant'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		api,
		constant
	},
	mutations: {
		
	}
})