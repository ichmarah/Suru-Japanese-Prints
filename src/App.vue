<template>
  <div class="container" id="app">
    <app-header />
    <router-view class="main-top-margin router-view" />
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

<style lang="css">
/* Reset CSS */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 900px;
  position: relative;
  min-height: 100vh;
}

.main-top-margin {
  margin-top: 56.5px;
}

.router-view {
  position: relative;
  padding-bottom: 3rem;
}

.top-heading {
  padding: 20px 20px;
}

.nav-link:hover {
  box-shadow: 0 0px 2.7px rgba(0, 0, 0, 0.02), 0 0px 6.4px rgba(0, 0, 0, 0.028),
    0 0px 12px rgba(0, 0, 0, 0.035), 0 0px 21.4px rgba(0, 0, 0, 0.042),
    0 0px 40.1px rgba(0, 0, 0, 0.05), 0 0px 96px rgba(0, 0, 0, 0.07);
}
</style>
