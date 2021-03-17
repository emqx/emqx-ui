<template>
  <el-select class="emqx-select">
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

<style lang="scss">
.emqx-select {
  .el-input__inner {
    border-radius: 0px;
  }
}
</style>
