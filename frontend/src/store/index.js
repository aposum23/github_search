import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    userSearchValue: '',
    searchResult: [],
    countOnPage: 9,
    pageNumber: 1,
    totalCountPages: 1,
    projectData: {},
    showDetails: false,
    showBottomPanel: false,
  },
  getters: {
  },
  mutations: {
    // Сохраняем результат запроса в состоянии
    updateResult(state, result){
      // Проверяем результат на то что он не null
      if (result) {
        state.totalCountPages = Math.ceil(result.data.total_count / state.countOnPage);
        // Необходимо сделать ограничение в 100 страниц
        // 100 страниц - это максималоьное количество поддерживаемое github api
        if (state.totalCountPages > 100){
          state.totalCountPages = 100;
        }
        state.searchResult = result.data.items;
        state.showBottomPanel = true;
        localStorage.totalCountPages = state.totalCountPages;
      }
      // Если Null назначаем состоянию результата запроса пустой массив
      else {
        state.searchResult = [],
        state.totalCountPages = 1;
      }
    },

    // Сохраняем запрос пользователя в состоянии
    updateSearchValue(state, value){
      state.userSearchValue = value;
    },

    // Меняем номер страницы на необходимый
    changePageNumber(state, pageNum){
      state.pageNumber = pageNum;
      localStorage.pageNumber = state.pageNumber;
    },

    // Мутация, уменьшающая номер страницы на 1
    decrementPage(state){
      // Уменьшаем страницу на 1 только если страница не первая
      console.log(state.pageNumber);
      if (state.pageNumber > 1){
        state.pageNumber -= 1;
      }
      localStorage.pageNumber = state.pageNumber;
    },

    // Мутация, увеличивающая номер страницы на 1
    incrementPage(state){
      // Увеличиваем только если значение не равное максимальному доступному количеству страниц
      if (state.pageNumber < state.totalCountPages){
        state.pageNumber += 1;
      }
      localStorage.pageNumber = state.pageNumber;
    },

    // Мутация меняющая количество карточек отображаемых на странице
    changeCountOnPage(state, newCount){
      state.countOnPage = newCount;
      localStorage.countOnPage = state.countOnPage;
    },

    showMore(state, index){
      state.showDetails = true;
      state.showBottomPanel = false;
      console.log(state.showDetails);
      state.projectData = state.searchResult[index];
    },

    closeDetails(state){
      state.showDetails = false;
      state.showBottomPanel = true;
      state.projectData = {};
    },

    recoverData(state){
      if (localStorage.pageNumber){
        state.pageNumber = Number(localStorage.pageNumber);
      }
      if (localStorage.totalCountPages){
        state.totalCountPages = Number(localStorage.totalCountPages);
      }
      if (localStorage.countOnPage){
        state.countOnPage = Number(localStorage.countOnPage);
      }
    }
  },
  actions: {
    // Действие поиска проектов через github api
    doSearch({commit, state}, newSearch){
      if (newSearch){
        commit('changePageNumber', 1);
      }
      axios.get('https://api.github.com/search/repositories', 
      {
        headers: {
          auth: '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',
        },
        params: {
          q: state.userSearchValue,
          per_page: state.countOnPage,
          page: state.pageNumber,
        }
      }
      ).then(result => commit('updateResult', result) // Если завершается без ошибок обрабатываем результат
      ).catch(() => commit('updateResult', null)); // Иначе передаем в тот же метод null (который в условии даст false)
    },
    
    recoverDataAfterReload({commit, dispatch}){
      commit('recoverData');
      dispatch('doSearch', false);
    }
  },
  modules: {
  }
})
