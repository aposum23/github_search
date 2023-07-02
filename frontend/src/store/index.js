import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    userSearchValue: '',
    searchResult: [],
    countOnPage: 9,
    pageNumber: 1,
    totalCountPages: 1,
  },
  getters: {
  },
  mutations: {
    updateResult(state, result){
      if (result) {
        state.totalCountPages = Math.ceil(result.data.total_count / state.countOnPage);
        if (state.totalCountPages > 100){
          state.totalCountPages = 100;
        }
        state.searchResult = result.data.items;
      }
      else {
        state.searchResult = []
      }
    },

    updateSearchValue(state, value){
      state.userSearchValue = value;
    },

    resetPageNumber(state){
      state.pageNumber = 1;
    }
  },
  actions: {
    doSearch({commit, state}){
      commit('resetPageNumber');
      axios.get('https://api.github.com/search/repositories', 
      {
        params: {
          q: state.userSearchValue,
          per_page: state.countOnPage,
          page: state.pageNumber,
        }
      }
      ).then(result => commit('updateResult', result)
      ).catch(() => commit('updateResult', null));
    }
  },
  modules: {
  }
})
