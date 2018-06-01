<template>
  <el-submenu v-if="data.children" :index="fullPath">
    <template slot="title">
      <font-awesome-icon class="fa_1" v-if="data.icon" :icon="data.icon" />
      <span slot="title">{{ (data.meta && data.meta.title) || data.title }}</span>
    </template>
    <template v-for="item in data.children">
      <NavMenuItem :key="fullPath + '/' + item.path" :data="item" :path="fullPath" />
    </template>
  </el-submenu>
  <el-menu-item v-else-if="!data.hidden" :index="fullPath">
    <font-awesome-icon class="fa_1" v-if="data.icon" :icon="data.icon" />
    <span slot="title">{{ (data.meta && data.meta.title) || data.title }}</span>
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
