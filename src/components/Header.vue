<template>
  <div class="header">
    <span id="menu-trigger" @click="toggleMenu">
      <el-button v-show="!menuStatus" icon="el-icon-arrow-left"></el-button>
      <el-button v-show="menuStatus" icon="el-icon-arrow-right"></el-button>
    </span>
    <span id="logo-block">
      <img id="logo" class="image" src="https://cn.vuejs.org/images/logo.png">
      <span>App</span>
    </span>
    <div id="user-block">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img id="user-figure" class="image" src="https://avatars3.githubusercontent.com/u/22103866">
          <span>我</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>信息</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
    border: none;
  }
}
.image {
  height: 32px;
  vertical-align: middle;
}
#user-block {
  float: right;
  cursor: pointer;
  .el-dropdown-link {
    padding: 20px 0;
  }
  #user-figure {
    border-radius: 50%;
  }
}
</style>
