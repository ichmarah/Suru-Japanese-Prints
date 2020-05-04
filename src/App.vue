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
.container {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 900px;
  min-height: 100vh;
  position: relative;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.main-top-margin {
  margin-top: 56.5px;
}

.router-view {
  padding-bottom: 3rem;
  position: relative;
}

.top-heading {
  padding: 20px 20px;
}

.nav-link:active {
  text-decoration: underline !important;
}
</style>
