<template>
  <el-button class="emqx-button">
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'EmqxButton',
  components: {
    ElButton,
  },
})
</script>
