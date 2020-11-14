import Vue from 'vue'
import Vuex from 'vuex'
import cityModule from './moudels/cityMoudel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    city: cityModule
  }
})
