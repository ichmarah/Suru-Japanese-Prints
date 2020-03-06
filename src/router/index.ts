import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Random from '../views/Random.vue'
import About from '../views/About.vue'
import DetailPage from '../components/DetailPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/object/:objectid', // This path is according to Harvard Art's API request for a resource: GET /object/ "OBJECT_ID will get the full record of the specified object."
    name: 'DetailPage',
    component: DetailPage,
    props: true
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
