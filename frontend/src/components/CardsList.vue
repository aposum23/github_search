<template>
  <div class="cards-list container">
    <div class="row" v-if="!showDetails">
      <div class="card-list__card col-lg-4 col-md-6 col-12" v-for="(card, index) in cardData" :key="card.id">
        <CardOfProject
          :project-index="index" 
          :project-id="card.node_id"  
          :author-name="card.owner.login"
          :author-image="card.owner.avatar_url"
          :project-name="card.name"
          :count-of-stars="card.stargazers_count"
          :count-of-views="card.watchers_count"
          :project-url="card.html_url"
          :author-url="card.owner.html_url"/>
      </div>
    </div>
    <div class="card-list__card col-12" v-if="showDetails">
        <CardOfProjectDetails :project-data="projectData"/>
      </div>
  </div>
</template>

<script>
import CardOfProject from './CardOfProject.vue';
import CardOfProjectDetails from './CardOfProjectDetails.vue';

export default {
  name: 'CardsList',
  components: {
    CardOfProject,
    CardOfProjectDetails,
  },
  data() {
    return {
    }
  },
  computed: {
    cardData(){
      return this.$store.state.searchResult;
    },
    projectData(){
      return this.$store.state.projectData;
    },
    showDetails(){
      return this.$store.state.showDetails;
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
