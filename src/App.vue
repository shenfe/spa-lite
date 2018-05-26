<template>
  <el-container id="main-outer">
    <el-aside style="width: auto; overflow-x: hidden;">
      <Nav :nav="navigation" />
    </el-aside>
    <el-main id="main">
      <el-container id="main-inner">
        <el-header id="header">Header</el-header>
        <el-main>
          <el-container>
            <el-main id="main">
              <router-view/>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import Nav from '@/components/Nav'
import routes from '@/router/routes'
export default {
  name: 'App',
  data () {
    return {
      navigation: routes
    }
  },
  components: {
    Nav
  }
}
</script>

<style>
html, body {
  margin: 0;
  border: 0;
  padding: 0;
}
#main-outer {
  height: 100vh;
}
#main {
  padding: 0;
}
</style>
