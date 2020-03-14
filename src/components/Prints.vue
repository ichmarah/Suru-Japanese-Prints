<!--
Source:https://ordina-jworks.github.io/frontend/2019/03/04/vue-with-typescript.html
A Vue component has multiple lifecycle hooks with the most interesting ones for what we want to do: created() and mounted(). Created is called by Vue when the object is created: reactive data is set up, event callbacks are ready and the object is not yet mounted on the DOM. The Vue object will thus be ready to go but it will not yet be visible to the user. The mounted hook is used for when the element is mounted into the HTML DOM, which means the rendering is performed by the browser.

Since we installed and imported VueAxios, "This wrapper bind axios to Vue or this if you're using single file component." (source: https://www.npmjs.com/package/vue-axios). We can use this.$http.get(http://...).

There are two reasons why we want to start our HTTP calls in the created method. The first reason is that we can limit the amount of time the user has to wait for data to be loaded and shown on the screen. The second one is that the mounted hook is not called when we would use serverside rendering. (To ensure that our code is compatible with all use cases, we place the HTTP calls in the created method of our App.vue)
-->

<template>
  <section>
    <Loader :isLoading="isLoading" />
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

    <!-- <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav> -->

    <!-- <Pagination
      :items="items"
      :totalPages="totalPages"
      :getNext="this.getNext"
      :getPrevious="this.getPrevious"
      :currentPage="currentPage"
      :totalRecordsPerQuery="totalRecordsPerQuery"
      @created="getPrints()"
    /> -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { apikey } from '../keys'
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios'
import SinglePrint from './SinglePrint.vue'
import Loader from './Loader.vue'

@Component({
  components: { SinglePrint, Loader }
})
export default class Prints extends Vue {
  items: Array<any> = []
  currentPage: number = 0 // Harvard Art's data shows 1 page having 10 records
  totalPages: any = 0
  totalRecordsPerQuery: number = 0
  isLoading: boolean = true
  next: string = ''
  previous: string = ''
  query: string = `https://api.harvardartmuseums.org/object?&apikey=${apikey}&worktype=print&culture=Japanese&hasimage=1&sort=title&sortorder=desc`

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
  async getPrints(query: string): Promise<void> {
    // created() is used for fetching data after component is created
    await this.$http
      .get(query)
      .then((response: AxiosResponse) => {
        ;(this.items = response.data.records),
          (this.currentPage = response.data.info.page),
          (this.totalPages = response.data.info.pages),
          (this.totalRecordsPerQuery = response.data.info.totalrecordsperquery),
          (this.isLoading = false),
          (this.next = response.data.info.next),
          (this.previous = response.data.info.prev)
      })
      .catch(error => console.log(error))
  }

  getNext(): any {
    // this.next = nextPageQuery
    this.getPrints(this.next)
  }

  getPrevious(): any {
    this.getPrints(this.previous)
  }

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

<style scoped>
/* .prints {
  position: relative;
} */
</style>
