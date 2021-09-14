<template>
  <el-badge class="emqx-badge">
    <slot></slot>
  </el-badge>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElBadge } from 'element-plus'

export default defineComponent({
  name: 'EmqxBadge',
  components: {
    ElBadge,
  },
})
</script>
