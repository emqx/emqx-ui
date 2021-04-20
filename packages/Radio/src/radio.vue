<template>
  <el-radio class="emqx-radio">
    <slot></slot>
  </el-radio>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElRadio } from 'element-plus'

export default defineComponent({
  name: 'EmqxRadio',
  components: {
    ElRadio,
  },
})
</script>
