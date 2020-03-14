<!-- 
Source: https://router.vuejs.org/api/#to
Since we are passing along the Prints.vue prop of one item , we need to bind the name of the prop to the router-link (which takes us to DetailsPage). Since we want to refer to the API details of this specific item when clicking on the item, we need to have a path were we can find the item in the API. This means, including the Objectid of the item.
However, since we need to inlcude 'params' in the v-bind:to for the path of this item, we need to also put params as a prop to be sent to the parent Prints.vue. Prints.vue will receive it as a prop
-->
<template>
  <router-link
    :to="{ name: 'DetailPage', params: { objectid: (number = item.objectid) } }"
  >
    <div class="card-body">
      <div class="single-card">
        <!-- If item.primaryimageurl = null in JSON file, a message informs the client about this -->
        <img
          v-if="item.primaryimageurl"
          :src="item.primaryimageurl"
          class="card-img-top"
          alt="Image of print"
        />
        <p v-else><i>No image available at the moment</i></p>
        <p class="card-text single-card-grey">{{ item.objectnumber }}</p>
        <!-- Some items do not have name included as data -->
        <h6 v-if="!item.people" class="card-text single-card-black">
          [Artist name unknown]
        </h6>
        <p v-else class="card-text single-card-black">
          {{ item.people[0].name }}
        </p>

        <p class="card-title single-card-dark-grey">{{ item.title }}</p>
        <!-- Some items have dated: null as date -->
        <p v-if="item.dated" class="card-title single-card-dark-grey">
          {{ item.dated }}
        </p>
        <p
          v-show="!item.dated || item.date === null"
          class="card-title single-card-dark-grey"
        >
          [Date unknown]
        </p>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
// import 'reflect-metadata'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'SinglePrint'
})
export default class SinglePrint extends Vue {
  @Prop({ type: Object, required: true }) item!: Object
  // constructor() {
  //   super()
  //   // console.log(this.item)
  // }
}
</script>

<style scoped>
.card-body {
  padding: 0;
  /* float: left; */
}

.single-card {
  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 10px;
}

.single-card-grey {
  color: #999;
}

.single-card:hover {
  box-shadow: 0 0px 2.7px rgba(0, 0, 0, 0.02), 0 0px 6.4px rgba(0, 0, 0, 0.028),
    0 0px 12px rgba(0, 0, 0, 0.035), 0 0px 21.4px rgba(0, 0, 0, 0.042),
    0 0px 40.1px rgba(0, 0, 0, 0.05), 0 0px 96px rgba(0, 0, 0, 0.07);
}

.single-card-black {
  color: #000;
}

.single-card-dark-grey {
  color: #666;
}
</style>
