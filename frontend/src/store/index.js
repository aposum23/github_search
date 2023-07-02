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
      }
      // Если Null назначаем состоянию результата запроса пустой массив
      else {
        state.searchResult = []
      }
    },

    // Сохраняем запрос пользователя в состоянии
    updateSearchValue(state, value){
      state.userSearchValue = value;
    },

    // Возвращаем пользователя к первой странице при новом зарпосе поиска
    resetPageNumber(state){
      state.pageNumber = 1;
    },

    // Мутация, уменьшающая номер страницы на 1
    decrementPage(state){
      // Уменьшаем страницу на 1 только если страница не первая
      console.log(state.pageNumber);
      if (state.pageNumber > 1){
        state.pageNumber -= 1;
      }
    },

    // Мутация, увеличивающая номер страницы на 1
    incrementPage(state){
      // Увеличиваем только если значение не равное максимальному доступному количеству страниц
      if (state.pageNumber < state.totalCountPages){
        state.pageNumber += 1;
      }
    },

    // Мутация меняющая количество карточек отображаемых на странице
    changeCountOnPage(state, newCount){
      state.countOnPage = newCount;
    }
  },
  actions: {
    // Действие поиска проектов через github api
    doSearch({commit, state}){
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
    }
  },
  modules: {
  }
})
