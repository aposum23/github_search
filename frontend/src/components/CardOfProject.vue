<template>
  <div class="container card-of-project">
    <div class="row">
      <h3 class="col-12">{{ projectName }}</h3>
    </div>
    <div class="row">
      <div class="col-2">
        <img :src="authorImage" class="col-12"/>
      </div>
      <div class="col-10">
        <h3 class="col-11">{{ authorName }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <img src="../assets/star.svg" class="col-3 d-inline"/>
        <p class="d-inline col-2">{{ countOfStars }}</p>
      </div>
      <div class="col-3">
        <img src="../assets/view.svg" class="col-3 d-inline"/>
        <p class="d-inline col-2">{{ countOfViews }}</p>
      </div>
    </div>
    <div class="comment-form">
      <input type="text" class="comment-form__input" v-model="userComment" @focusin="clearSearchField" @focusout="saveOrResetSearchValue"/>
      <button class="comment-form__button buttons" @click="doSearch">
        <img src="@/assets/comment.svg" class="h-100 w-100"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardOfProject',
  props: {
    projectName: String,
    authorImage: String,
    authorName: String,
    countOfStars: String,
    countOfViews: String,
  },
  data() {
    return {
      userComment: 'Комментарий к проекту'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.card-of-project {
  border: 1px solid #A2A3A4;
  padding: 1em;
}

.comment-form__input {
  height: 3em;
  width: 81%;
  padding: 1em;
  display: inline-block;
  vertical-align: middle;
}

.comment-form__button {
  height: 3em;
  width: 3em;
  display: inline-block;
  vertical-align: middle;
  line-height: 3em;
}
</style>
