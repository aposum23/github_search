<template>
  <div class="search-bar">
    <div class="search-bar__form">
      <input type="text" class="search-bar__input" v-model="searchText" @focusin="clearSearchField" @focusout="saveOrResetSearchValue"/>
      <button class="search-bar__button buttons" @click="doSearch">
        <img src="@/assets/search.svg"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchText: 'Начните вводить текст для поиска (не менее трех символов)',
    }
  },
  methods: {
    clearSearchField(){
      this.searchText = '';
    },

    saveOrResetSearchValue(){
      // Проверяем, если количество символов < 3 то очищаем поле и возвращаем надпись, иначе оставляем
      if (this.searchText.length < 3){
        this.searchText = 'Начните вводить текст для поиска (не менее трех символов)';
      }
      else {
        localStorage.setItem('searchText', this.searchText)
        this.$store.commit('updateSearchValue', this.searchText);
      }
    },

    doSearch(){
      this.$store.dispatch('doSearch', true);
    }
  },
  mounted:
    function(){
      if (localStorage.searchText){
        this.searchText = localStorage.searchText;
        this.saveOrResetSearchValue();
      }
      this.$store.dispatch('recoverDataAfterReload');
    }
}
</script>

<style scoped>
.search-bar {
  text-align: center;
  width: 100%;
  height: 11.6em;
  background-color: #DDDDDD;
  line-height: 10em;
  font-size: 14px;
}

.search-bar__input {
  height: 5em;
  width: 90%;
  padding: 1.5em;
  display: inline-block;
  vertical-align: middle;
  font-weight: 600;
  outline: none;
}

.search-bar__button {
  height: 5em;
  width: 6em;
  display: inline-block;
  vertical-align: middle;
  line-height: 4em;
}

@media (max-width: 965px){
  .search-bar__input {
    width: 80%;
  }
}

@media (max-width: 570px){
  .search-bar__input {
    width: 70%;
  }
}

@media (max-width: 290px){
  .search-bar__input {
    width: 65%;
  }
}
</style>
