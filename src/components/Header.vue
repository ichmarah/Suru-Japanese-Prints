<!-- 
  Since Bootstrap has the option of adding "show" to the collapsable menu, I can bind a class to that with a ternary operator where show is true or false.
  However, true or false in show need to only change when the menu button is clicked. 
  Meaning, the button needs to get a @click refering to a function (in this case onClick). This functions changes the value of show to true or false, depending on the initial value of show.
-->
<template>
  <header class="page-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="/">Suru</a>
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
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a href="/" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="/categories" class="nav-link">Categories</a>
          </li>
          <li class="nav-item">
            <a href="/random" class="nav-link">Random</a>
          </li>
          <li class="nav-item">
            <a href="/About" class="nav-link">About</a>
          </li>
        </ul>
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
