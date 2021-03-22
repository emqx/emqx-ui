<template>
  <el-breadcrumb class="emqx-breadcrumb">
    <slot></slot>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElBreadcrumb } from 'element-plus'

export default defineComponent({
  name: 'EmqxBreadcrumb',
  components: {
    ElBreadcrumb,
  },
})
</script>

<style lang="scss"></style>
