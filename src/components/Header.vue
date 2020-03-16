<!-- 
  Since Bootstrap has the option of adding "show" to the collapsable menu, I can bind a class to that with a ternary operator where show is true or false.
  However, true or false in show need to only change when the menu button is clicked. 
  Meaning, the button needs to get an @click refering to a function (in this case onClick). This functions changes the value of show to true or false, depending on the initial value of show.
-->
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
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Header extends Vue {
  show: boolean = false

  onClick(): boolean {
    return (this.show = !this.show) // show beocmes true, meaning, the bound class gets "show" as part of the class name
  }
}
</script>

<style scoped>
.page-header {
  padding: 15px 25px 0;
}

.navbar-brand {
  padding-left: 20px;
}

.navbar-nav {
  padding-right: 35px;
  margin-bottom: 0;
  margin-left: auto;
}
</style>
