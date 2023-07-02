<template>
  <div class="cards-list container">
    <div class="row">
      <div class="card-list__card col-4" v-for="card in cardData" :key="card.id">
        <CardOfProject :author-name="card.owner.login"
          :author-image="card.owner.avatar_url"
          :project-name="card.name"
          :count-of-stars="card.stargazers_count"
          :count-of-views="card.watchers_count"/>
      </div>
    </div>
  </div>
</template>

<script>
import CardOfProject from './CardOfProject.vue';

export default {
  name: 'CardsList',
  components: {
    CardOfProject,
  },
  data() {
    return {
    }
  },
  computed: {
    cardData(){
      return this.$store.state.searchResult;
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
