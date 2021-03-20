<template>
  <el-submenu class="emqx-submenu">
    <slot></slot>
  </el-submenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElSubmenu } from 'element-plus'

export default defineComponent({
  name: 'EmqxSubmenu',
  components: {
    ElSubmenu,
  },
})
</script>

<style lang="scss"></style>
