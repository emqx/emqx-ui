<template>
  <el-pagination class="emqx-pagination">
    <slot></slot>
  </el-pagination>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElPagination } from 'element-plus'

export default defineComponent({
  name: 'EmqxPagination',
  components: {
    ElPagination,
  },
})
</script>

<style lang="scss"></style>
