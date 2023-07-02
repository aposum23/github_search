<template>
  <div class="container card-of-project">
    <div class="row">
      <a class="project-name col-12" :href="projectUrl" target="_blank">{{ projectName }}</a>
    </div>
    <div class="row">
      <div class="col-4 col-sm-2 col-md-3 col-lg-2">
        <img :src="authorImage" class="author-image col-12"/>
      </div>
      <div class="col-10">
        <a class="col-12 author-name" :href="authorUrl" target="_blank">{{ authorName }}</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <img src="../assets/star.svg" class="col-3 d-inline"/>
        <p class="d-inline col-2 stat-numbers">{{ countOfStars }}</p>
      </div>
      <div class="col-3">
        <img src="../assets/view.svg" class="col-3 d-inline"/>
        <p class="d-inline col-2 stat-numbers">{{ countOfViews }}</p>
      </div>
    </div>
    <div class="show-more">
      <button class="show-more__button buttons" @click="showMore">
        <p>Подробнее</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardOfProject',
  props: {
    projectIndex: Number,
    projectId: String,
    projectName: String,
    authorImage: String,
    authorName: String,
    countOfStars: Number,
    countOfViews: Number,
    projectUrl: String,
    authorUrl: String,
  },
  data() {
    return {
    }
  },
  methods: {
    showMore(){
      this.$store.commit('showMore', this.projectIndex);
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
</style>
