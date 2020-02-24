<template>
  <b-container id="app">
    <appHeader />
    <router-view />
    <appFooter />
  </b-container>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
