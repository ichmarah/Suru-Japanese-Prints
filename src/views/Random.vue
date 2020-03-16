<template>
  <section>
    <h1>Random</h1>
    <p>Click the button to show a random print!</p>
    <button @click="getRandomPrint">Random</button>
    <BaseLoader :isLoading="isLoading" />
    <BaseSinglePrint v-for="(item, index) in items" :key="index" :item="item" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { apikey } from '../keys'
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios'

@Component({})
export default class Random extends Vue {
  items: Array<any> = []
  totalRecordsPerQuery: number = 1
  isLoading: boolean = false
  query: string = `https://api.harvardartmuseums.org/object?&apikey=${apikey}&worktype=print&culture=Japanese&hasimage=1&sort=random&size=1`

  async getPrints(query: string): Promise<void> {
    this.isLoading = true
    // created() is used for fetching data after component is created
    await this.$http
      .get(query)
      .then((response: AxiosResponse) => {
        ;(this.items = response.data.records), (this.isLoading = false)
      })
      .catch(error => console.log(error))
  }

  getRandomPrint() {
    this.getPrints(this.query)
  }
}
</script>

<style scoped></style>
