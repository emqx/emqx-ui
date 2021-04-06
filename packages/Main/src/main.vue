<template>
  <el-main class="emqx-main">
    <slot></slot>
  </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMain } from 'element-plus'

export default defineComponent({
  name: 'EmqxMain',
  components: {
    ElMain,
  },
})
</script>
