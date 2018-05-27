<template>
  <el-container id="main-outer">
    <el-aside style="width: auto; overflow-x: hidden;">
      <Nav :isCollapse="menuStatus" :nav="navigation" />
    </el-aside>
    <el-main class="main">
      <el-container id="main-inner">
        <el-header id="header">
          <Header :menuStatus="menuStatus" @anyEvent="onHeaderEvent" />
        </el-header>
        <el-main id="main">
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
import Header from '@/components/Header'
import Nav from '@/components/Nav'
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
    Nav
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
  top: 0;
  border-bottom: 1px solid #e6e6e6;
  background: rgba($color: #fff, $alpha: .6);
}
#main {
  // height: calc(100vh - 60px);
}
</style>
