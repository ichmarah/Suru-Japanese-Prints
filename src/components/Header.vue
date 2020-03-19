<template>
  <header class="page-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <router-link to="/" class="navbar-brand">Suru</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="onClick"
      >
        <span class="navbar-toggler-icon"></span>
        Menu
      </button>
      <div
        id="navbarCollapse"
        :class="
          show ? 'navbar-collapse collapse show' : 'navbar-collapse collapse'
        "
      >
        <div class="navbar-nav" @click="onClick">
          <router-link class="nav-link" :to="{ name: 'Home' }"
            >Home</router-link
          >
          <router-link class="nav-link" :to="{ name: 'Categories' }"
            >Categories</router-link
          >
          <router-link class="nav-link" :to="{ name: 'Random' }"
            >Random</router-link
          >
          <router-link class="nav-link" :to="{ name: 'About' }"
            >About</router-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  show: boolean = false

  // Event to toggle menu collapse or not
  onClick(): boolean {
    return (this.show = !this.show)
  }
}
</script>

<style lang="css" scoped>
.page-header {
  padding: 15px 25px 0;
}

.navbar-brand {
  padding-left: 20px;
  font-size: 30px;
  font-weight: bold;
}

.navbar-nav {
  padding-right: 35px;
  margin-bottom: 0;
  margin-left: auto;
}

.router-link-exact-active {
  text-decoration: underline !important;
}

.navbar-brand.router-link-exact-active {
  text-decoration: none !important;
}
</style>
