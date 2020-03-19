<template>
  <div>
    <p @click="goBack" class="go-back">← Go back</p>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BaseBackButton extends Vue {
  goBack() {
    window.history.back()
  }
}
</script>

<style lang="css">
.go-back {
  cursor: pointer;
  padding-top: 10px;
  text-align: left;
}
</style>
