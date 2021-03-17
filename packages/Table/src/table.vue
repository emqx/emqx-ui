<template>
  <el-table class="emqx-table">
    <slot></slot>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElTable } from 'element-plus'

export default defineComponent({
  name: 'EmqxTable',
  components: {
    ElTable,
  },
})
</script>

<style lang="scss"></style>
