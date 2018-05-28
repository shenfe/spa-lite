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
      <el-dropdown @command="handleCommand">
        <span id="user-display" class="el-dropdown-link">
          <img id="user-figure" class="image" src="https://avatars3.githubusercontent.com/u/22103866">
          <span>{{ username }}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="displayInfo">信息</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    menuStatus: Boolean
  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    toggleMenu () {
      this.$emit('anyEvent', {
        event: 'menu',
        data: !this.menuStatus
      })
    },
    handleCommand (command) {
      switch (command) {
        case 'displayInfo':
          this.$alert(this.username, '欢迎', {
            confirmButtonText: '确定',
            callback: action => {
              if (action === 'confirm') {
                this.$message({
                  type: 'info',
                  message: '您点了确定'
                })
              }
            }
          })
      }
    }
  },
  beforeMount () {
    axios.get('/userinfo').then(res => {
      return this.username = res.data.data.name
    }).then(name => {
      setTimeout(_ => {
        this.$notify({
          title: '欢迎',
          message: name,
          position: 'bottom-right'
        })
      }, 500)
    })
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
    background: none;
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
    display: block;
  }
  #user-figure {
    border-radius: 50%;
  }
}
</style>
