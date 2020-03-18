<template>
  <div>
    <p @click="goBack" class="go-back">← Go back</p>
  </div>
</template>

<script>
import Vue from 'vue'
export default class BaseBackButton extends Vue {
  goBack() {
    window.history.back()
  }
}
</script>

<style lang="css">
.go-back {
  text-align: left;
  padding-top: 10px;
}
</style>
