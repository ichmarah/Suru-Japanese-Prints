<template>
  <Menu />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from './Menu.vue'

@Component({
  components: {
    Menu
  }
})
export default class Header extends Vue {}
</script>
