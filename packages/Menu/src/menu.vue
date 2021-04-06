<template>
  <el-menu class="emqx-menu">
    <slot></slot>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMenu } from 'element-plus'

export default defineComponent({
  name: 'EmqxMenu',
  components: {
    ElMenu,
  },
})
</script>
