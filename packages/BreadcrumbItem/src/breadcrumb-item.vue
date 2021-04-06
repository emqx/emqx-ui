<template>
  <el-breadcrumb-item class="emqx-breadcrumb-item">
    <slot></slot>
  </el-breadcrumb-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElBreadcrumbItem } from 'element-plus'

export default defineComponent({
  name: 'EmqxBreadcrumbItem',
  components: {
    ElBreadcrumbItem,
  },
})
</script>
