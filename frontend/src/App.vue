<template>
  <div>
    <SearchBar/>
  </div>
</template>

<script>
// Импорт библиотек
import 'bootstrap/dist/css/bootstrap.css'

// Импорт компонентов
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
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
  text-align: center;
  font-family: 'Roboto';
}

.buttons {
  background-color: #00A3FF;
  border: 1px solid #A2A3A4;
}
</style>
