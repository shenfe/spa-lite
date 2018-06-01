// Vue.js Filters
// https://vuejs.org/v2/guide/filters.html

const filters = {

  // Example
  jsonify (data) {
    return JSON.stringify(data, null, 4)
  },
  formatTimestamp (timestamp) {
    let datetime = new Date(timestamp)
    return datetime.toLocaleTimeString('en-US')
  }

}

export default (Vue) => {
  // Register All Filters on import
  Object.keys(filters).forEach(function (filterName) {
    Vue.filter(filterName, filters[filterName])
  })
}
