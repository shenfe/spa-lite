<template>
  <el-tabs v-model="activeName">
    <template v-for="(value, key) in tabs">
      <el-tab-pane :label="key" :key="key" :name="key">
        <div class="markdown-body" v-html="value"></div>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script>
const tab1 = '<h2>2.1</h2>'
const tab2 = '<h2>2.2</h2>'
export default {
  data () {
    return {
      activeName: 'tab1',
      tabs: {
        tab1,
        tab2
      }
    }
  }
}
</script>

<style lang="scss">
.el-tabs__content {
  max-height: calc(100vh - 150px);
  overflow-y: auto;
}
</style>
