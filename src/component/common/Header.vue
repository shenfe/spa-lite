<template>
  <div class="header">
    <span id="menu-trigger" @click="toggleMenu">
      <el-button v-show="!menuStatus" icon="el-icon-arrow-left"></el-button>
      <el-button v-show="menuStatus" icon="el-icon-arrow-right"></el-button>
    </span>
    <span id="logo">
      <slot name="logo"></slot>
    </span>
    <div id="user-block">
      <el-dropdown @command="handleCommand" style="float: right">
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
    <div id="header-dock">
      <slot name="dock"></slot>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
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
  line-height: 56px;
}
#menu-trigger {
  float: left;
  cursor: pointer;
  .el-button {
    margin: 0;
    border: none;
    background: none;
  }
}
#logo {
  font-family: monospace;
  font-size: 22px;
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
    margin-right: 8px;
    border-radius: 50%;
  }
}
#header-dock {
  float: right;
  margin: 0 16px;
}
</style>
