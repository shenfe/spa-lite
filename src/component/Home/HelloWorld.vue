<!-- Example -->

<template>
  <div class="markdown-body" v-html="content"></div>
</template>

<script>
import content from './HelloWorld.md'
export default {
  data () {
    return {
      content
    }
  }
}
</script>
