<template>
  <el-header class="emqx-header">
    <slot></slot>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElHeader } from 'element-plus'

export default defineComponent({
  name: 'EmqxHeader',
  components: {
    ElHeader,
  },
})
</script>

<style lang="scss"></style>
