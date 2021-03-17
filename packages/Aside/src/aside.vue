<template>
  <el-aside class="emqx-aside">
    <slot></slot>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElAside } from 'element-plus'

export default defineComponent({
  name: 'EmqxAside',
  components: {
    ElAside,
  },
})
</script>

<style lang="scss"></style>
