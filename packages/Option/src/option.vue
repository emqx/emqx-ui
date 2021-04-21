<template>
  <el-option class="emqx-option">
    <slot></slot>
  </el-option>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElOption } from 'element-plus'

export default defineComponent({
  name: 'EmqxOption',
  components: {
    ElOption,
  },
})
</script>
