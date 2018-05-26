<template>
  <el-submenu v-if="data.children" :index="fullPath">
    <template slot="title">
      <i :class="`el-icon-${data.extraType || 'setting'}`"></i>
      <span slot="title">{{ data.extraTitle }}</span>
    </template>
    <template v-for="item in data.children">
      <NavMenuItem :key="fullPath + '/' + item.path" :data="item" :path="fullPath" />
    </template>
  </el-submenu>
  <el-menu-item v-else :index="fullPath">
    <i :class="`el-icon-${data.extraType || 'setting'}`"></i>
    <span slot="title">{{ data.extraTitle }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'NavMenuItem',
  props: {
    data: Object,
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    fullPath () {
      return (this.path || '') + (this.data.path.startsWith('/') ? '' : '/') + this.data.path
    }
  }
}
</script>
