<template>
  <div>
    <SearchBar/>
    <CardsList/>
    <BottomPanel v-if="showBottomPanel"/>
  </div>
</template>

<script>
// Импорт библиотек
import 'bootstrap/dist/css/bootstrap.css'

// Импорт компонентов
import SearchBar from '@/components/SearchBar.vue';
import CardsList from './components/CardsList.vue';
import BottomPanel from './components/BottomPanel.vue';

// Импорт хранилища vuex
import store from '@/store/index.js';

export default {
  name: 'App',
  store,
  components: {
    SearchBar,
    CardsList,
    BottomPanel,
  },
  computed:{
    showBottomPanel(){
      return this.$store.state.showBottomPanel;
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Roboto';
  src: url("./assets/Roboto.ttf");
}
body {
  margin: 0px;
}
#app {
  font-family: 'Roboto';
}

.buttons {
  background-color: #00A3FF;
  border: 1px solid #A2A3A4;
}
</style>
