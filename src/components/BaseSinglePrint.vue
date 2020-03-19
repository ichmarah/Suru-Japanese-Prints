<template>
  <router-link
    :to="{ name: 'DetailPage', params: { objectid: (number = item.objectid) } }"
  >
    <div class="card">
      <img
        v-if="item.primaryimageurl"
        :src="item.primaryimageurl"
        class="card-img-top"
        alt="Image of print"
      />
      <!-- If 'item.primaryimageurl: null', altnerative text provided -->
      <p v-else><i>No image available at the moment</i></p>

      <div>
        <p class="card-text card-grey">{{ item.objectnumber }}</p>
        <h6 v-if="!item.people" class="card-text card-black">
          [Artist name unknown]
        </h6>
        <p v-else class="card-text card-black">
          {{ item.people[0].name }}
        </p>
      </div>

      <div>
        <p class="card-title card-dark-grey">{{ item.title }}</p>
        <p v-if="item.dated" class="card-title card-dark-grey">
          {{ item.dated }}
        </p>
        <p
          v-show="!item.dated || item.date === null"
          class="card-title card-dark-grey"
        >
          [Date unknown]
        </p>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseSinglePrint extends Vue {
  @Prop({ type: Object, required: true }) item!: Object
}
</script>

<style lang="css" scoped>
.card-deck {
  padding-left: 15px;
}

.card {
  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 10px;
}

.card-grey {
  color: #999;
}

.card:hover {
  box-shadow: 0 0px 2.7px rgba(0, 0, 0, 0.02), 0 0px 6.4px rgba(0, 0, 0, 0.028),
    0 0px 12px rgba(0, 0, 0, 0.035), 0 0px 21.4px rgba(0, 0, 0, 0.042),
    0 0px 40.1px rgba(0, 0, 0, 0.05), 0 0px 96px rgba(0, 0, 0, 0.07);
}

.card-black {
  color: #000;
}

.card-dark-grey {
  color: #666;
}
</style>
