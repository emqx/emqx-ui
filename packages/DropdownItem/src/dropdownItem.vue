<template>
  <el-dropdown-item class="emqx-dropdown-item">
    <slot></slot>
  </el-dropdown-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElDropdownItem } from 'element-plus'

export default defineComponent({
  name: 'EmqxDropdownItem',
  components: {
    ElDropdownItem,
  },
})
</script>
