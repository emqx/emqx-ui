<template>
  <el-checkbox class="emqx-checkbox">
    <slot></slot>
  </el-checkbox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElCheckbox } from 'element-plus'

export default defineComponent({
  name: 'EmqxCheckbox',
  components: {
    ElCheckbox,
  },
})
</script>
