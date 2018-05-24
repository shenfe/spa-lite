<template>
  <el-container>
    <el-header id="header">Header</el-header>
    <el-main>
      <el-container id="main-inner">
        <el-aside width="200px">
          <template v-for="item in navigation">
            <router-link v-bind:key="item.path" :to="item.path">{{ item.name }}</router-link>
          </template>
        </el-aside>
        <el-main id="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-main>
    <el-footer id="footer">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navigation: [
        { path: '/page1', name: 'Page1' },
        { path: '/page2', name: 'Page2' }
      ]
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  border: 0;
  padding: 0;
}
#header, #footer {
  padding: 0 calc(50vw - 600px);
}
#main {
  min-height: calc(100vh - 160px);
}
#main-inner {
  margin: auto;
  width: 1200px;
  height: 100%;
}
</style>
