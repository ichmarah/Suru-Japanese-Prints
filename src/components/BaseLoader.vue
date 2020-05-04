<template>
  <section>
    <div class="d-flex justify-content-center">
      <div :class="isLoading ? 'spinner-border' : ''" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseLoader extends Vue {
  @Prop({ type: Boolean, required: true }) isLoading!: boolean
}
</script>
