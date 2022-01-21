<template>
  <el-select ref="select" class="emqx-select">
    <slot></slot>
  </el-select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElSelect } from 'element-plus'

export default defineComponent({
  name: 'EmqxSelect',
  components: {
    ElSelect,
  },
  setup() {
    const select = ref()
    return {
      select,
    }
  },
})
</script>
