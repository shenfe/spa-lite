<!-- Example -->

<template>
  <div>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/component/Home/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      name: 'World'
    }
  }
}
</script>
