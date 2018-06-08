<template>
  <el-menu id="nav" router @open="handleOpen" @close="handleClose"
    background-color="#fff"
    :collapse="isCollapse" :default-active="$route.path">
    <template v-for="item in nav">
      <NavMenuItem :v-show="!item.hidden" :key="item.path" :data="item" :path="''" />
    </template>
  </el-menu>
</template>

<script>
import NavMenuItem from './NavMenuItem'

export default {
  name: 'Nav',
  props: {
    isCollapse: Boolean,
    nav: Array
  },
  data () {
    return {
    }
  },
  components: {
    NavMenuItem
  },
  methods: {
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  border-right: none;
}
#nav:not(.el-menu--collapse) {
  width: 200px;
}
#logo img {
  height: 50%;
}
</style>
