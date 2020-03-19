<template>
  <div>
    <section>
      <BaseBackButton />
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
          <h4>Work type</h4>
          <p v-if="!object.worktypes[0].worktype">Work type is unknown</p>
          <p v-else>{{ object.worktypes[0].worktype }}</p>
          <h4>Dimensions</h4>
          <p v-if="!object.dimensions">Dimensions are unknown</p>
          <p v-else>{{ object.dimensions }}</p>
          <h4>Inscriptions and marks</h4>
          <p v-if="!object.signed">No inscriptions or marks available</p>
          <p v-else>{{ object.signed }}</p>
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
          <img
            v-if="relatedPrints.primaryimageurl"
            :src="relatedPrints.primaryimageurl"
            class="card-img-top"
            alt="Image of related print"
          />
          <p v-else><i>Image unavailable</i></p>
          <div class="card-body">
            <p v-if="!relatedPrints.people" class="card-text">
              [Artist name unknown]
            </p>
            <p v-else class="card-title">
              {{ relatedPrints.people[0].name }}
            </p>
            <p
              v-if="!relatedPrints.title"
              class="card-title single-card-dark-grey"
            >
              [Title unknown]
            </p>
            <h6 v-else class="card-title single-card-dark-grey">
              {{ relatedPrints.title }}
            </h6>
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

@Component
export default class DetailPage extends Vue {
  @Prop({ type: Number, required: true }) objectid!: number
  isLoading: boolean = true
  object: Array<any> = []
  relatedCount: number = 0
  relatedPrints: Array<any> = []
  fetchRelatedPrints: Array<any> = []
  objectId: number = 0
  query: string = `https://api.harvardartmuseums.org/object/${this.objectid}?&apikey=${apikey}`

  async getDetailsPrint(query: string): Promise<void> {
    this.isLoading = true
    await this.$http
      .get(query)
      .then((response: AxiosResponse) => {
        ;(this.object = response.data),
          (this.isLoading = false),
          (this.relatedCount = response.data.relatedcount),
          (this.objectId = response.data.objectid),
          (this.fetchRelatedPrints = response.data.related)
        // If there are pages related to print, fetch these pages
        if (this.relatedCount > 0) {
          for (let index = 0; index < this.relatedCount; index++) {
            this.$http
              .get(
                `https://api.harvardartmuseums.org/object/${this.fetchRelatedPrints[index].objectid}?&apikey=${apikey}`
              )
              .then((response: AxiosResponse) => {
                this.relatedPrints = response.data
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

<style lang="css" scoped>
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
