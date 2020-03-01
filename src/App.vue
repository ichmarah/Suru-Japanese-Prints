<template>
  <div class="container" id="app">
    <app-header />
    <router-view class="main-top-margin" />
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// Refers to the imported Component
@Component({
  components: {
    'app-header': Header, //appHeader refers to the name of the nested component called Header
    'app-footer': Footer
  }
})
// This Module needs to be have a default export, otherwise, error.
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 900px;
  padding-left: 0;
  padding-right: 0;
}

.main-top-margin {
  margin-top: 56.5px;
}
</style>
