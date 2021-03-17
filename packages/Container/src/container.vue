<template>
  <el-container class="emqx-container">
    <slot></slot>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElContainer } from 'element-plus'

export default defineComponent({
  name: 'EmqxContainer',
  components: {
    ElContainer,
  },
})
</script>

<style lang="scss"></style>
