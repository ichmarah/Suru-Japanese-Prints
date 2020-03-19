<template>
  <div>
    <BaseLoader :isLoading="isLoading" />
    <div class="prints">
      <div class="form-group col-md-4 home-sort">
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
      <div class="card-columns">
        <BaseSinglePrint
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        />
      </div>
    </div>
    <paginate
      aria-label="Page navigation example"
      :v-model="currentPage"
      :page-count="totalPages"
      :page-range="2"
      :margin-pages="1"
      :click-handler="clickHandler"
      :prev-text="'Previous'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { apikey } from '../keys'
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios'

@Component
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
          (this.previous = response.data.info.prev)
      })
      .catch(error => console.log(error))
  }

  getNext(): any {
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

<style lang="css">
.home-sort {
  margin-left: 8px;
}

.btn-secondary {
  font-size: 12px !important;
  margin: 0 3px;
  padding: 5px !important;
}

.pagination {
  margin: 0 auto !important;
  padding-bottom: 2em;
  padding-left: 45px !important;
}

.page-item {
  margin: 0 5px;
  border: 1px solid;
  border-radius: 5px;
  width: 30px;
  font-size: 12px;
  padding: 2px 1px;
}

.page-item.active {
  background-color: #2c3e50;
  color: #fff;
}

/* Media query breakpoints */
@media (min-width: 320px) {
  .pagination {
    padding-left: 12.5px !important;
  }
  .card-columns {
    column-count: 1;
  }
}

@media (min-width: 414px) {
  .pagination {
    padding-left: 40px !important;
  }
}

@media (min-width: 576px) {
  .card-columns {
    column-count: 2 !important;
  }
}

@media (min-width: 768px) {
  .form-group {
    max-width: 100% !important;
  }

  .btn-secondary {
    font-size: 14px !important;
  }
}

@media (min-width: 992px) {
  .card-columns {
    column-count: 3 !important;
  }
}
</style>
