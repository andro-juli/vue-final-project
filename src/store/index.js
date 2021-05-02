import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    AllNews: [],
    loading: false
  },
  
   getters:{
    getAllNews: state => state.AllNews,
    getLoading: state => state.loading
 },

  mutations: {
    setAllNews: (state, payload) => { state.AllNews = payload},
    setLoading: (state, payload) => { state.loading = payload}
  },
  actions: {
    fetchAllNews: ({commit}, payload) => {
      const {
        category =''
      } = payload;
      try {
        commit ('setLoading', true)
        axios.get(`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=f0cb41e5d7a4440e843f8a439f968f69`)
        .then((res) => {
          console.log(res.data.articles);
          commit('setAllNews', res.data.articles);
        })
      } catch (error) {
        console.log(error);
      }

    }
  },





  modules: {
  },
  plugins: [vuexLocal.plugin]
})
