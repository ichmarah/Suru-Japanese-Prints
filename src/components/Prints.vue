<!--
Source:https://ordina-jworks.github.io/frontend/2019/03/04/vue-with-typescript.html
A Vue component has multiple lifecycle hooks with the most interesting ones for what we want to do: created() and mounted(). Created is called by Vue when the object is created: reactive data is set up, event callbacks are ready and the object is not yet mounted on the DOM. The Vue object will thus be ready to go but it will not yet be visible to the user. The mounted hook is used for when the element is mounted into the HTML DOM, which means the rendering is performed by the browser.

Since we installed and imported VueAxios, "This wrapper bind axios to Vue or this if you're using single file component." (source: https://www.npmjs.com/package/vue-axios). We can use this.$http.get(http://...).

There are two reasons why we want to start our HTTP calls in the created method. The first reason is that we can limit the amount of time the user has to wait for data to be loaded and shown on the screen. The second one is that the mounted hook is not called when we would use serverside rendering. (To ensure that our code is compatible with all use cases, we place the HTTP calls in the created method of our App.vue)
-->

<template>
  <section :class="getPrints()" class="container">
    <div class="d-flex justify-content-center">
      <div :class="isLoading ? 'spinner-border' : ''" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="prints">
      <div class="form-group col-md-4">
        <label for="inputState">Sort by:</label>
        <select
          id="inputState"
          class="form-control"
          @change="sortPrintsBy(value)"
          v-model="value"
        >
          <option selected>Choose...</option>
          <option value="title">Title: A - Z</option>
          <option>Title: Z - A</option>
          <option>Artist: A - Z</option>
          <option>Artist: Z - A</option>
          <option>Date: Ascending</option>
          <option>Date: descending</option>
        </select>
      </div>
      <SinglePrint v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { apikey } from '../keys'
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios'
import SinglePrint from './SinglePrint.vue'

@Component({
  components: { SinglePrint }
})
export default class Prints extends Vue {
  items: Array<any> = []
  page: number = 1 // Harvard Art's data shows 1 page having 10 records
  isLoading: boolean = true

  getPrints() {
    // created() is used for fetching data after component is created
    this.$http
      .get(
        `https://api.harvardartmuseums.org/object?&apikey=${apikey}&worktype=print&culture=Japanese&hasimage=1&sort=title&sortorder=desc`
      )
      .then((response: AxiosResponse) => {
        ;(this.isLoading = true), // eslint(prettier/prettier) says to put ';' but unclear why
          (this.items = response.data.records),
          (this.page = response.data.info.pages),
          (this.isLoading = false)
        // console.log('Items: ', this.items, 'isLoading: ', this.isLoading, this.item.people.name)
        return this.items, this.isLoading
      })
      .catch(error => console.log(error))
  }
  sortPrintsBy(value: any): any {
    this.items.sort((a: any, b: any): number => {
      if (a[value] < b[value]) {
        return -1
      } 
    })
  }
}
</script>

<style scoped>
/* .prints {
  position: relative;
} */
</style>
