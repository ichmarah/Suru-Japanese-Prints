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
    path: '/object/:objectid',
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
  routes: [
    { path: '*', component: NotFound }
  ]
})

export default router
