<!-- 
  Since Bootstrap has the option of adding "show" to the collapsable menu, I can bind a class to that with a ternary operator where show is true or false.
  However, true or false in show need to only change when the menu button is clicked. 
  Meaning, the button needs to get a @click refering to a function (in this case onClick). This functions changes the value of show to true or false, depending on the initial value of show.
-->
<template>
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
      class="navbar-collapse collapse"
      :class="
        show ? 'navbar-collapse collapse show' : 'navbar-collapse collapse'
      "
    >
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/categories">Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/random">Random</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default class Header extends Vue {
  show: boolean = false

  onClick(): Boolean {
    return (this.show = !this.show) // show beocmes true, meaning, the bound class gets "show" as part of the class name
  }
}
</script>

<style scoped></style>
