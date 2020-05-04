import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Paginate from 'vuejs-paginate'

// Global components
import BaseLoader from '@/components/BaseLoader.vue'
import BaseSinglePrint from '@/components/BaseSinglePrint.vue'
import BaseBackButton from '@/components/BaseBackButton.vue'

Vue.component('paginate', Paginate)
Vue.component('BaseLoader', BaseLoader)
Vue.component('BaseSinglePrint', BaseSinglePrint)
Vue.component('BaseBackButton', BaseBackButton)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
