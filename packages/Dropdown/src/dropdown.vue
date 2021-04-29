<template>
  <el-dropdown class="emqx-dropdown">
    <slot></slot>
    <template v-if="$slots.dropdown" #dropdown>
      <slot name="dropdown"></slot>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElDropdown } from 'element-plus'

export default defineComponent({
  name: 'EmqxDropdown',
  components: {
    ElDropdown,
  },
})
</script>
