import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		navstate: {
			home: true,
			survey: false,
			students: false,
			demeanour: false,
			news: false,
			contact: false
		}
	},
	mutations: {
		home(state) {
			state.navstate.home=true
			state.navstate.survey=false
			state.navstate.students=false
			state.navstate.demeanour=false
			state.navstate.news=false
			state.navstate.contact=false
		},
		survey(state) {
			state.navstate.home=false
			state.navstate.survey=true
			state.navstate.students=false
			state.navstate.demeanour=false
			state.navstate.news=false
			state.navstate.contact=false
		},
		students(state) {
			state.navstate.home=false
			state.navstate.survey=false
			state.navstate.students=true
			state.navstate.demeanour=false
			state.navstate.news=false
			state.navstate.contact=false
		},
		demeanour(state) {
			state.navstate.home=false
			state.navstate.survey=false
			state.navstate.students=false
			state.navstate.demeanour=true
			state.navstate.news=false
			state.navstate.contact=false
		},
		news(state) {
			state.navstate.home=false
			state.navstate.survey=false
			state.navstate.students=false
			state.navstate.demeanour=false
			state.navstate.news=true
			state.navstate.contact=false
		},
		contact(state) {
			state.navstate.home=false
			state.navstate.survey=false
			state.navstate.students=false
			state.navstate.demeanour=false
			state.navstate.news=false
			state.navstate.contact=true
		}
		
		
	},
	actions: {
		
	},
	getters: {
		
	},
	modules: {
		
	}
})

export default store