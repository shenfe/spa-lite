<template>
  <el-container style="height: 100vh">
    <el-aside id="nav-aside" width="auto">
      <el-scrollbar style="height: 100vh">
        <Nav :isCollapse="menuStatus" :nav="navigation" />
      </el-scrollbar>
    </el-aside>
    <el-main style="padding: 0">
      <el-container style="height: 100%">
        <el-header id="header" height="56px">
          <Header :menuStatus="menuStatus" @anyEvent="onHeaderEvent">
            <logo slot="logo" />
            <span slot="dock"></span>
          </Header>
        </el-header>
        <el-main style="max-height: calc(100vh - 56px)">
          <router-view/>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
// '@' is an alias to '/src'
import Header from '@/component/common/Header'
import Nav from '@/component/common/Nav'

import Logo from '@/component/Logo'

import routes from '@/router/routes'

export default {
  name: 'App',
  data () {
    return {
      navigation: routes,
      menuStatus: false
    }
  },
  components: {
    Header,
    Nav,
    Logo
  },
  methods: {
    onHeaderEvent ({ event, data }) {
      console.log(arguments)
      switch (event) {
        case 'menu':
          this.menuStatus = !!data
      }
    }
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  border: 0;
  padding: 0;
}
#nav-aside {
  overflow-x: hidden;
  border-right: solid 1px #e6e6e6;
}
#header {
  padding-left: 0;
  border-bottom: 1px solid #e6e6e6;
  background: rgba($color: #fff, $alpha: .8);
}
</style>
