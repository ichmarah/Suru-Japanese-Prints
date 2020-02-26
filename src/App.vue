<template>
  <div class="container" id="app">
    <appHeader />
    <router-view class="main-top-margin" />
    <appFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import appHeader from './components/Header.vue'
import appFooter from './components/Footer.vue'

// Refers to the imported Component
@Component({
  components: {
    appHeader,
    appFooter
  }
})
// This Module needs to be have a default export, otherwise, error.
export default class App extends Vue {}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  padding-left: 0;
  padding-right: 0;
}

.main-top-margin {
  margin-top: 56.5px;
}
</style>
