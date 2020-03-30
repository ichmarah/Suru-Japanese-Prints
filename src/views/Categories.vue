<template>
  <section>
    <h3 class="top-heading">20th Century prints</h3>
    <p class="responsive-paragraph">
      In this category, you can go through prints that are dated in the
      twentieth century. Click on each print to get more details.
    </p>
    <BaseLoader :isLoading="isLoading" />
    <div class="card-columns">
      <BaseSinglePrint
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
    <paginate
      aria-label="Page navigation example"
      :v-model="currentPage"
      :page-count="totalPages"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickHandler"
      :prev-text="'Previous'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { apikey } from '../keys'
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios'

@Component
export default class Categories extends Vue {
  items: Array<any> = []
  currentPage: number = 0
  totalPages: any = 0
  totalRecordsPerQuery: number = 0
  isLoading: boolean = true
  next: string = ''
  previous: string = ''
  century: string = ''
  query: string = `https://api.harvardartmuseums.org/object?&apikey=${apikey}&worktype=print&culture=Japanese&hasimage=1&sort=title&sortorder=desc&q=dated:20th`

  async getPrints(query: string): Promise<void> {
    this.isLoading = true
    await this.$http
      .get(query)
      .then((response: AxiosResponse) => {
        ;(this.items = response.data.records),
          (this.currentPage = response.data.info.page),
          (this.totalPages = response.data.info.pages),
          (this.totalRecordsPerQuery = response.data.info.totalrecordsperquery),
          (this.isLoading = false),
          (this.next = response.data.info.next),
          (this.previous = response.data.info.prev),
          (this.century = response.data.info.dated)
      })
      .catch(error => console.log(error))
  }

  getNext(): any {
    this.getPrints(this.next)
  }

  getPrevious(): any {
    this.getPrints(this.previous)
  }

  // Clicking page number in paginate shows the coresponding page
  clickHandler(pageNumber: number): any {
    this.currentPage = pageNumber
    if (pageNumber) {
      this.getPrints(`${this.query}&page=${pageNumber}`)
    }
  }

  created() {
    this.getPrints(this.query)
  }
}
</script>

<style lang="css">
/* Media query breakpoint */
@media (min-width: 567px) {
  .responsive-paragraph {
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
