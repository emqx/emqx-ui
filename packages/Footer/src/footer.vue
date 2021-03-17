<template>
  <el-footer class="emqx-footer">
    <slot></slot>
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElFooter } from 'element-plus'

export default defineComponent({
  name: 'EmqxFooter',
  components: {
    ElFooter,
  },
})
</script>

<style lang="scss"></style>
