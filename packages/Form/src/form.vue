<template>
  <el-form class="emqx-form">
    <slot></slot>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElForm } from 'element-plus'

export default defineComponent({
  name: 'EmqxForm',
  components: {
    ElForm,
  },
})
</script>

<style lang="scss"></style>
