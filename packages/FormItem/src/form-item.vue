<template>
  <el-form-item class="emqx-form-item">
    <slot></slot>
  </el-form-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElFormItem } from 'element-plus'

export default defineComponent({
  name: 'EmqxFormItem',
  components: {
    ElFormItem,
  },
})
</script>

<style lang="scss"></style>
