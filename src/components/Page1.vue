<template>
  <div>
    <h1>Page1</h1>
    <pre>{{ JSON.stringify(greet) }}</pre>
  </div>
</template>

<script>
export default {
  name: 'Page1',
  data () {
    return {
      greet: null
    }
  },
  beforeMount () {
    fetch('/api/1').then(res => {
      return res.json()
    }).then(json => {
      this.greet = json.data
    })
  }
}
</script>

<style scoped>

</style>
