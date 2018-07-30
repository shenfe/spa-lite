import Store from '@/helper/pubsub'

const store = new Store()

export { store }

export default {
  install: function (Vue) {
    Vue.prototype.$store = store
  }
}
