<template>
  <div class="header">
    <span id="menu-trigger" @click="toggleMenu">
      <el-button v-show="!menuStatus" icon="el-icon-arrow-left"></el-button>
      <el-button v-show="menuStatus" icon="el-icon-arrow-right"></el-button>
    </span>
    <span id="logo-block">
      <img id="logo" src="https://cn.vuejs.org/images/logo.png">
      <span>App</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    menuStatus: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
    toggleMenu () {
      this.$emit('anyEvent', {
        event: 'menu',
        data: !this.menuStatus
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  line-height: 60px;
}
#menu-trigger {
  cursor: pointer;
  .el-button {
    margin: 0;
  }
}
#logo {
  height: 32px;
  vertical-align: middle;
}
</style>
