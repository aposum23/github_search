<template>
  <div class="bottom-panel container">
    <BottomPanelCountOnPage class="d-inline-block"/>
    <div class="pagination d-inline-block">
      <BottomPanelPagination/>
    </div>
  </div>
</template>

<script>
import BottomPanelCountOnPage from './BottomPanelCountOnPage.vue';
import BottomPanelPagination from './BottomPanelPagination.vue';

export default {
  name: 'BottomPanel',
  components: {
    BottomPanelCountOnPage,
    BottomPanelPagination,
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
.bottom-panel {
  margin-top: 2rem;
}
.pagination {
  width: 90%;
}
</style>
