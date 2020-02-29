<!-- 
Source: https://router.vuejs.org/api/#to
Since we are passing along the Prints.vue prop of one item , we need to bind the name of the prop to the router-link (which takes us to DetailsPage). Since we want to refer to the API details of this specific item when clicking on the item, we need to have a path were we can find the item in the API. This means, including the Objectid of the item.
However, since we need to inlcude 'params' in the v-bind:to for the path of this item, we need to also put params as a prop to be sent to the parent Prints.vue. Prints.vue will receive it as a prop
-->
<template>
  <router-link
    :to="{ name: 'DetailPage', params: { objectId: item.objectid } }"
  >
    <div>
      <img
        :src="item.primaryimageurl"
        class="card-img-top"
        alt="Image of print"
      />
      <div class="card-body">
        <p class="card-text">{{ item.objectnumber }}</p>
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">{{ item.title }}</p>
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
  constructor() {
    super()
    // console.log(this.item)
  }
}
</script>
