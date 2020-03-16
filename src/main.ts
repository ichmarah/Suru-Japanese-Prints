/* 
Source:https://ordina-jworks.github.io/frontend/2019/03/04/vue-with-typescript.html
"As you noticed we also installed axios. This is because vue-axios only focuses on the TypeScript bindings for Vue and does not include the actual axios library. Vue-axios basically turns the axios library into a plugin compatible for Vue. After that, we have to signal to Vue that we want to use this plugin. We add a Vue.use(plugin, options)"
[...]
The main effect is that we now have $http accessible in every Vue component. This means that we can now have this.$http in our classes in which a unique instance of the axios library for the whole application will be plugged.
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Paginate from 'vuejs-paginate'
import BaseLoader from '@/components/BaseLoader.vue'
import BaseSinglePrint from '@/components/BaseSinglePrint.vue'

Vue.component('paginate', Paginate)
Vue.component('BaseLoader', BaseLoader)
Vue.component('BaseSinglePrint', BaseSinglePrint)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
