<template>
  <div id="app">
    <div>
      <router-link ></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navigation: [
        '/page1',
        '/page2'
      ]
    }
  }
}
</script>

<style>

</style>
