<template>
  <el-menu-item-group class="emqx-menu-item-group">
    <slot></slot>
  </el-menu-item-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMenuItemGroup } from 'element-plus'

export default defineComponent({
  name: 'EmqxMenuItemGroup',
  components: {
    ElMenuItemGroup,
  },
})
</script>

<style lang="scss"></style>
