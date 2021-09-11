<template>
  <addProducts/>
  <list/>
</template>

<script>

import addProducts from './components/addProducts.vue'
import list from './components/list.vue'
export default {
  name: 'App',
  components: {
    addProducts,
    list
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@import './assets/style.css';
</style>
