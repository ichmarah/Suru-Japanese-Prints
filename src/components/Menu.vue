<template>
  <b-nav>
    <b-nav-item-dropdown
      id="my-nav-dropdown"
      text="Menu"
      toggle-class="nav-link-custom"
      right
    >
      <b-dropdown-item>Home</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Categories</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Random</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</template>

<style scoped>
/* Dropdown menu */
.dropdown {
  margin-left: auto;
}

.dropdown-toggle::after {
  content: none;
}
</style>
