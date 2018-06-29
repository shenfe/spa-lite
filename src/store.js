import store from '@/helper/pubsub'

export default {
  install: function (Vue) {
    Vue.prototype.$store = store
  }
}
