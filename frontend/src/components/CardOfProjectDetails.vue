<template>
  <div class="container card-of-project">
    <div class="row">
      <a class="project-name col-12" :href="projectData.html_url" target="_blank">{{ projectData.name }}</a>
    </div>
    <div class="row">
      <div class="col-3 col-sm-1 col-md-2 col-lg-1">
        <img :src="projectData.owner.avatar_url" class="author-image col-12"/>
      </div>
      <div class="col-10">
        <a class="col-11 author-name" :href="projectData.owner.html_url" target="_blank">{{ projectData.owner.login }}</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <img src="../assets/star.svg" class="col-3 col-sm-1 col-md-2 col-lg-1 d-inline"/>
        <p class="d-inline col-2 stat-numbers">{{ projectData.stargazers_count }}</p>
      </div>
      <div class="col-3">
        <img src="../assets/view.svg" class="col-3 col-sm-1 col-md-2 col-lg-1 d-inline"/>
        <p class="d-inline col-2 stat-numbers">{{ projectData.watchers_count }}</p>
      </div>
    </div>
    <div class="row">
      <h3 class="description-header">Описание:</h3>
      <p class="description">
        {{ projectData.description }}
      </p>
    </div>
    <div class="show-more">
      <button class="show-more__button buttons" @click="goBack">
        <p>Назад</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardOfProject',
  props: {
    projectData: Object,
  },
  data() {
    return {
    }
  },
  methods: {
    goBack(){
      this.$store.commit('closeDetails');
    }
  }
}
</script>

<style scoped>
.card-of-project {
  border: 1px solid #A2A3A4;
  box-shadow: 0 4 4 #00000040;
  padding: 1em;
  margin: .5em;
}

.show-more__button {
  height: 3em;
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  line-height: 3em;
}

.row {
  padding: .3em;
}

.project-name {
  font-size: 18px;
  height: 2.5rem;
  text-decoration: none;
  color: #000;
}

.author-image {
  border-radius: 90px;
}

.author-name {
  font-size: 14px;
  text-decoration: none;
  color: #000;
}

.stat-numbers {
  font-size: 16px;
  padding-left: .5em;
}

.description-header {
  margin-top: .5rem;
  font-size: 18px;
}
.description {
  font-size: 14px;
}
</style>
