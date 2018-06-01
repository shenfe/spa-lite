<template>
  <el-container id="main-outer">
    <el-aside style="width: auto; overflow-x: hidden;">
      <Nav :isCollapse="menuStatus" :nav="navigation" />
    </el-aside>
    <el-main class="main">
      <el-container>
        <el-header id="header" height="56px">
          <Header :menuStatus="menuStatus" @anyEvent="onHeaderEvent">
            <logo slot="logo" />
            <span slot="dock"></span>
          </Header>
        </el-header>
        <el-main>
          <el-container>
            <el-main class="main">
              <router-view/>
            </el-main>
          </el-container>
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
#main-outer {
  height: 100vh;
}
.main {
  padding: 0;
}
#header {
  position: sticky;
  z-index: 100;
  top: 0;
  padding-left: 0;
  border-bottom: 1px solid #e6e6e6;
  background: rgba($color: #fff, $alpha: .8);
}
</style>
