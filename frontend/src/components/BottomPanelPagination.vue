<template>
  <div class="bottom-panel__pagination">
    <button class="pagination-button" @click="decrementPage">
      <img src="../assets/arrowLeft.png"/>
    </button>
    <button class="pagination-button" v-for="pageNumber in 3" :key="pageNumber" :class="{active: buttonActive(pageNumber)}">
      <span class="page-number">{{ pageNumber + startNumber - 1 }}</span>
    </button>
    <button class="pagination-button" @click="incrementPage">
      <img src="../assets/arrowRight.png"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BottomPanelPagination',
  components: {
  },
  data() {
    return {
      startNumOfPagination: 1
    }
  },
  computed: {
    startNumber(){
      const pageNum = this.$store.state.pageNumber;
      if (pageNum === this.startNumOfPagination + 3){
        this.changeStartNumOfPagination(pageNum);
      }
      else if (pageNum === this.startNumOfPagination - 1){
        this.changeStartNumOfPagination(pageNum - 2);
      }
      return this.startNumOfPagination;
    }
  },
  methods: {
    changeStartNumOfPagination(pageNumber){
      this.startNumOfPagination = pageNumber
    },
    // Метод уменьшения страницы на 1
    decrementPage(){
      // Уменьшаем номер страницы и делаем запрос к апи
      this.$store.commit('decrementPage');
      this.reloadSearchResult();
    },

    // Метод увеличения страницы на 1
    incrementPage(){
      // Увеличиваем номер страницы и делаем запрос к апи
      this.$store.commit('incrementPage');
      this.reloadSearchResult();
    },

    reloadSearchResult(){
      this.$store.dispatch('doSearch');
    },

    buttonActive(pageNumber){
      const currentPageNumber = this.$store.state.pageNumber; 
      if (pageNumber + this.startNumber - 1 === currentPageNumber){
        return true;
      }
      else{
        return false;
      }
    }
  }
}
</script>

<style scoped>
.bottom-panel__pagination {
  text-align: center;
}
.pagination-button {
  width: 3.3em;
  height: 3.4em;
  display: inline-block;
  padding: 1px;
  border: 1px solid #A2A3A4;
  background-color: #fff;
}

.active {
  background-color: #00A3FF;
  color: #fff;
}
</style>
