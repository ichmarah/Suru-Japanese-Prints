<template>
  <div>
    <section>
      <BaseLoader :isLoading="isLoading" />
      <div class="container">
        <figure>
          <img
            class="image-detail"
            v-if="object.primaryimageurl"
            :src="object.primaryimageurl"
            :alt="`Image of the print titled ${object.title}`"
          />
          <p v-else><i>No image available at the moment</i></p>
        </figure>
        <div class="print-detail">
          <h4>Title</h4>
          <p>{{ object.title }}</p>
          <h4>Artist</h4>
          <p v-if="!object.people">Artis name is unknown</p>
          <p v-else>{{ object.people[0].name }}</p>
          <h4>Object number</h4>
          <p>{{ object.objectnumber }}</p>
          <h4>Date</h4>
          <p v-if="!object.dated">Date is unknown</p>
          <p v-else>{{ object.dated }}</p>
          <h4>Period</h4>
          <p v-if="!object.period">Period is unknown</p>
          <p v-else>{{ object.period }}</p>
        </div>
      </div>
    </section>
    <section>
      <div class="border-top related-prints">
        <p>Related print(s): {{ object.relatedcount }}</p>
      </div>
      <div v-if="!object.related"></div>
      <div v-else class="col border-top">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">{{ this.relatedPrintsLinked }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { apikey } from '../keys'
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios'

@Component({
  name: 'DetailPage'
})
export default class DetailPage extends Vue {
  @Prop({ type: Number, required: true }) objectid!: number // is passed down as prop because we set it as props: true in router.ts as well.
  isLoading: boolean = true
  object: Array<any> = []
  relatedCount: number = 0
  relatedPrints: Array<any> = []
  relatedPrintsLinked: Array<any> = []
  objectId: number = 0
  query: string = `https://api.harvardartmuseums.org/object/${this.objectid}?&apikey=${apikey}`

  async getDetailsPrint(query: string): Promise<void> {
    await this.$http
      .get(query)
      .then((response: AxiosResponse) => {
        ;(this.object = response.data),
          (this.isLoading = false),
          (this.relatedCount = response.data.relatedcount),
          (this.objectId = response.data.objectid),
          (this.relatedPrints = response.data.related)
        // If there are pages related to print, fetch these pages
        if (this.relatedCount > 0) {
          for (let index = 0; index < this.relatedCount; index++) {
            this.$http
              .get(
                `https://api.harvardartmuseums.org/object/${this.relatedPrints[index].objectid}?&apikey=${apikey}`
              )
              .then((response: AxiosResponse) => {
                this.relatedPrintsLinked.push(response.data)
              })
          }
        }
      })
      .catch(error => console.log(error))
  }

  created() {
    this.getDetailsPrint(this.query)
  }
}
</script>

<style scoped>
.image-detail {
  max-width: 100%;
}

.print-detail {
  text-align: left;
}

.related-prints {
  text-align: left;
}
</style>
