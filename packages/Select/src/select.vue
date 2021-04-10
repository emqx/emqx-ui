<template>
  <el-select class="emqx-select" ref="select">
    <slot></slot>
  </el-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElSelect } from 'element-plus'

export default defineComponent({
  name: 'EmqxSelect',
  components: {
    ElSelect,
  },
})
</script>
