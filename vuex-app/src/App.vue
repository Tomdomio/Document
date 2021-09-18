<template>
  <add/>
  <list/>
</template>

<script>

import add from './components/add.vue'
import list from './components/list.vue'

export default {
  name: 'App',
  components: {
    add,
    list,
  }
}
</script>

<style>
@import './assets/style.css';
</style>
