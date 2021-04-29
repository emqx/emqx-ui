<template>
  <el-dropdown-menu class="emqx-dropdown-menu">
    <slot></slot>
  </el-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElDropdownMenu } from 'element-plus'

export default defineComponent({
  name: 'EmqxDropdownMenu',
  components: {
    ElDropdownMenu,
  },
})
</script>
