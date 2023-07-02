<template>
  <div class="bottom-panel__count-on-page">
    <select class="count-on-page" v-model="countOfCards" @change="changeCountOnPage">
      <option>9</option>
      <option>12</option>
      <option>15</option>
      <option>18</option>
      <option>21</option>
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
  computed: {
    currentCount(){
      return this.$store.state.countOnPage;
    }
  },
  methods: {
    changeCountOnPage(){
      this.$store.commit('changeCountOnPage', this.countOfCards);
      this.$store.dispatch('doSearch');
    }
  }
}
</script>

<style scoped>
.count-on-page {
  display: inline-block;
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
