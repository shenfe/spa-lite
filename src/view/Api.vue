<!-- Example -->

<template>
  <div class="markdown-body">
    <h2>API List</h2>
    <ul>
      <li><a href="" @click.prevent="api0">api0</a></li>
      <li><a href="" @click.prevent="api1">api1</a></li>
      <li><a href="" @click.prevent="api2">api2</a></li>
    </ul>
    <h2>Response</h2>
    <pre>{{responses.slice(-1)[0] | jsonify}}</pre>
    <p>{{error}}</p>
  </div>
</template>

<script>
import $api from '@/api'

export default {
  data () {
    return {
      responses: [],
      error: ''
    }
  },
  methods: {
    api0 () {
      $api.api0()
        .then(data => {
          this.responses.push(data)
        }).catch(error => {
          this.error = error.message
        })
    },
    api1 () {
      $api.api1({
        id: 1
      })
        .then(data => {
          this.responses.push(data)
        }).catch(error => {
          this.error = error.message
        })
    },
    api2 () {
      $api.api2({
        id: 1,
        name: 'Tom'
      })
        .then(data => {
          this.responses.push(data)
        }).catch(error => {
          this.error = error.message
        })
    }
  }
}
</script>
