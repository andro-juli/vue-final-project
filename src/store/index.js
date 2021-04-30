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
    // BusinessNews:[],
    // EnterNews:[],
    // GeneralNews:[],
    // HealthNews:[],
    // ScienceNews:[],
    // SportsNews:[],
    // TechNews:[]
    
  },
  
   getters:{
    getAllNews: state => state.AllNews,
    
    
 },

  mutations: {
    setAllNews: (state, payload) => { state.AllNews = payload},
    
  },
  actions: {
    fetchAllNews: ({commit}, payload) => {
      const {
        category =''
      } = payload;
      
      
      try {
        axios.get(`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=9266f68a762347a5a81f4df9c6b808ca`)
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
