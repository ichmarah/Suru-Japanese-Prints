<template>
  <section>
    <h3 class="top-heading">Japanese Prints</h3>
    <Prints />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Prints from '../components/Prints.vue'

@Component({
  components: { Prints }
})
export default class Home extends Vue {}
</script>
