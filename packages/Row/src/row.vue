<template>
  <el-row class="emqx-row">
    <slot></slot>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElRow } from 'element-plus'

export default defineComponent({
  name: 'EmqxRow',
  components: {
    ElRow,
  },
})
</script>
