<template>
  <section class="container">
    <Loader :isLoading="isLoading" />
    <div class="card mb-3">
      <img src="" class="card-img-top" alt="..." />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Loader from './Loader.vue'

@Component({
  name: 'DetailPage',
  components: { Loader }
})
export default class DetailPage extends Vue {
  isLoading: boolean = true
}
</script>
