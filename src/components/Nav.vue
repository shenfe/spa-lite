<template>
  <el-menu router id="nav" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <template v-for="item in nav">
      <NavMenuItem :key="item.path" :data="item" :path="''" />
    </template>
  </el-menu>
</template>

<style scoped>
  #nav {
    height: 100vh;
  }
  #nav:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
import NavMenuItem from './NavMenuItem'
export default {
  props: {
    nav: Array
  },
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    NavMenuItem
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
