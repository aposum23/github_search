<template>
  <div class="bottom-panel__count-on-page">
    <select class="count-on-page" v-model="countOfCards" :value="currentCount" @change="changeCountOnPage">
      <option value="9">9</option>
      <option value="12">12</option>
      <option value="15">15</option>
      <option value="18">18</option>
      <option value="21">21</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BottomPanelCountOnPage',
  components: {
  },
  data() {
    return {
      countOfCards: 9,
    }
  },
  methods: {
    changeCountOnPage(){
      this.$store.commit('changeCountOnPage', this.countOfCards);
      this.$store.dispatch('doSearch', false);
    }
  },
  mounted:
    function(){
      this.countOfCards = this.$store.state.countOnPage;
    }
}
</script>

<style scoped>
.count-on-page {
  display: inline-block;
  outline: none;
  border: 1px solid #A2A3A4;
  font: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  padding-right: 1.2em;
  padding-left: .7em;
  background-repeat: no-repeat;
  background-position: calc(100% - 0.25em) 0.35em;
  background-size: 0.85em auto;
  background-image: url("../assets/countOnPageArrow.svg");
}
</style>
