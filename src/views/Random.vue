<template>
  <section>
    <h3 class="top-heading">Random</h3>
    <p class="responsive-paragraph">Click the button to show a random print!</p>
    <button class="btn btn-secondary btn-circle btn-xl" @click="getRandomPrint">
      Click me!
    </button>
    <div class="loader">
      <BaseLoader class="random-card" :isLoading="isLoading" />
    </div>
    <div class="random-card">
      <BaseSinglePrint
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { apikey } from '../keys'
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios'

@Component
export default class Random extends Vue {
  items: Array<any> = []
  totalRecordsPerQuery: number = 1
  isLoading: boolean = false
  query: string = `https://api.harvardartmuseums.org/object?&apikey=${apikey}&worktype=print&culture=Japanese&hasimage=1&sort=random&size=1`

  async getPrints(query: string): Promise<void> {
    this.isLoading = true
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

<style lang="css" scoped>
.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  border-radius: 35px;
  text-align: center;
}

.btn-circle.btn-xl:hover {
  box-shadow: 0 0px 2.7px rgba(0, 0, 0, 0.02), 0 0px 6.4px rgba(0, 0, 0, 0.028),
    0 0px 12px rgba(0, 0, 0, 0.035), 0 0px 21.4px rgba(0, 0, 0, 0.042),
    0 0px 40.1px rgba(0, 0, 0, 0.05), 0 0px 96px rgba(0, 0, 0, 0.07);
}

.btn-secondary {
  font-size: 16px !important;
}

.loader {
  padding-top: 1em;
  padding-bottom: 1em;
}

/* Media query */
@media (min-width: 992px) {
  .random-card {
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
