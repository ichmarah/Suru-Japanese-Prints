import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Random from '../views/Random.vue'
import About from '../views/About.vue'
import DetailPage from '../components/DetailPage.vue'
import NotFound from '../views/NotFound.vue'

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
    props: true // Passes $route.params as prop in component. Component needs to accept this as props!
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
    name: 'About',
    component: About
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: { name: '404' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  // Source: https://www.vuemastery.com/courses/real-world-vue-js/dynamic-routing-history-mode
  // When deploying. Because Vue loads only index.html, even if a component is not loaded or does not exist. By implementing a catch-all route, you can show a 404 Page. You need to create that page.
  // routes: [
  //   { path: '*', component: NotFoundComponent}
  // ]
})

export default router
