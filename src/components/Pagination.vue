<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
          >Previous</a
        >
      </li>
      <li
        class="page-item"
        v-for="(pageNumber, index) in pageNumbers"
        :key="index"
      >
        <a class="page-link" href="!#">{{ pageNumber }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
@Component({
  name: 'Pagination'
})
export default class Pagination extends Vue {
  @Prop({ type: Number, required: true }) totalRecords!: number
  @Prop({ type: Number, required: true }) totalRecordsPerQuery!: number
  

  mounted(totalRecordsPerQuery: number, totalRecords: number): any {
    const pageNumbers: Array<number> = []
    for (let i = 1; i <= Math.ceil(totalRecords / totalRecordsPerQuery); i++) {
      return pageNumbers.push(i)
    }
    console.log(pageNumbers)
  }
}
</script>
