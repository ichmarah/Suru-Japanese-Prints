<!--
Source:https://ordina-jworks.github.io/frontend/2019/03/04/vue-with-typescript.html
A Vue component has multiple lifecycle hooks with the most interesting ones for what we want to do: created() and mounted(). Created is called by Vue when the object is created: reactive data is set up, event callbacks are ready and the object is not yet mounted on the DOM. The Vue object will thus be ready to go but it will not yet be visible to the user. The mounted hook is used for when the element is mounted into the HTML DOM, which means the rendering is performed by the browser.

Since we installed and imported VueAxios, "This wrapper bind axios to Vue or this if you're using single file component." (source: https://www.npmjs.com/package/vue-axios). We can use this.$http.get(http://...).

There are two reasons why we want to start our HTTP calls in the created method. The first reason is that we can limit the amount of time the user has to wait for data to be loaded and shown on the screen. The second one is that the mounted hook is not called when we would use serverside rendering. (To ensure that our code is compatible with all use cases, we place the HTTP calls in the created method of our App.vue)
-->

<template>
  <section class="container">
    <div class="d-flex justify-content-center">
      <div :class="isLoading ? 'spinner-border' : ''" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="prints">
      <div class="form-group col-md-4">
        <p>Sort by:</p>
        <button
          type="button"
          class="btn btn-secondary"
          @click="sortPrintsBy('titleAZ')"
        >
          Title A - Z
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          @click="sortPrintsBy('titleZA')"
        >
          Title Z - A
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          @click="sortPrintsBy('artistAZ')"
        >
          Artist A - Z
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          @click="sortPrintsBy('artistZA')"
        >
          Artist Z - A
        </button>
      </div>
      <SinglePrint v-for="(item, index) in items" :key="index" :item="item" />
    </div>
    <Pagination :pageNumbers="pageNumbers" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { apikey } from '../keys'
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios'
import SinglePrint from './SinglePrint.vue'
import Pagination from './Pagination.vue'

@Component({
  components: { SinglePrint, Pagination }
})
export default class Prints extends Vue {
  items: Array<any> = []
  page: number = 0 // Harvard Art's data shows 1 page having 10 records
  totalPages: number = 0
  isLoading: boolean = true
  pageNumbers: Array<Number> = []

  getPageNumbers(page: number, totalPages: number): void {
    for (let i = 1; i <= Math.ceil(totalPages / page); i++) {
      this.pageNumbers.push(i)
    }
    console.log(this.pageNumbers)
  }

  sortPrintsBy(sorting: any): any {
    this.items.sort((a, b): number => {
      let sortA: any
      let sortB: any
      switch (sorting) {
        case 'titleAZ':
          sortA = a.title.toUpperCase()
          sortB = b.title.toUpperCase()
          break
        case 'titleZA':
          sortA = b.title.toUpperCase()
          sortB = a.title.toUpperCase()
          break
        case 'artistAZ':
          sortA = a.people[0].name.toUpperCase()
          sortB = b.people[0].name.toUpperCase()
          break
        case 'artistZA':
          sortA = b.people[0].name.toUpperCase()
          sortB = a.people[0].name.toUpperCase()
          break
        default:
          break
      }
      if (sortA < sortB) {
        return -1
      } else if (sortA > sortB) {
        return 1
      } else {
        return 0
      }
    })
  }

  //The data sorted only when using created(). If not used but with another function name, the data will load but refresh again when sorted.
  async mounted() {
    // created() is used for fetching data after component is created
    await this.$http
      .get(
        `https://api.harvardartmuseums.org/object?&apikey=${apikey}&worktype=print&culture=Japanese&hasimage=1&sort=title&sortorder=desc`
      )
      .then((response: AxiosResponse) => {
        ;(this.items = response.data.records),
          (this.page = response.data.info.page),
          (this.totalPages = response.data.info.pages),
          (this.isLoading = false)
        // console.log('Items: ', this.items, 'isLoading: ', this.isLoading, this.item.people.name)
        return this.items, this.isLoading
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
/* .prints {
  position: relative;
} */
</style>
