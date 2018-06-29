import './asset/common.scss'

import Vue from 'vue'

// Import Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VCharts from 'v-charts'

// Import FontAwesome
import fontawesome from '@fortawesome/fontawesome'
import fabrands from '@fortawesome/fontawesome-free-brands'
import faregular from '@fortawesome/fontawesome-free-regular'
import fasolid from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// Find icons here: https://fontawesome.com/icons?d=gallery

import App from './view'
import router from './router'

import { filtersHelp, validatorsHelp } from './helper'

import Store from './store'

// Use helpers
filtersHelp(Vue)
validatorsHelp()

Vue.config.productionTip = false

// Use Element-UI
Vue.use(ElementUI)

Vue.use(VCharts)

// Use FontAwesome
fontawesome.library.add(fabrands, faregular, fasolid)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Store)

// Create a single Vue instance for App
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
