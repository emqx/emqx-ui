<template>
  <el-table ref="table" class="emqx-table">
    <slot></slot>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElTable } from 'element-plus'

export default defineComponent({
  name: 'EmqxTable',
  components: {
    ElTable,
  },
  setup() {
    const table = ref()
    return {
      table,
    }
  },
})
</script>
