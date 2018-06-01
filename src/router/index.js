import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes: [
    ...routes.map(r => {
      if (!r.icon) r.icon = 'bars'
      return r
    })
  ]
})

const defaultTitle = 'Vue-SPA'

router.afterEach((transition) => {
  document.title = transition.meta.title || defaultTitle
})

export default router
