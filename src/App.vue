<template>
  <div>
    <Box v-for="box in getBoxSpace" :key="box.id" :box="box" />
  </div>
</template>

<script>
import Box from './components/Box'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Box,
  },
  computed: {
    ...mapGetters(['getBoxSpace']),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
