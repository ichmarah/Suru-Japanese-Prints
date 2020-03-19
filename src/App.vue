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

@Component({
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="css">
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

.nav-link:active {
  text-decoration: underline !important;
}
</style>
