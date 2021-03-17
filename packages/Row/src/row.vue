<template>
  <el-row class="emqx-row">
    <slot></slot>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElRow } from 'element-plus'

export default defineComponent({
  name: 'EmqxRow',
  components: {
    ElRow,
  },
})
</script>

<style lang="scss">
.emqx-button.el-button {
  border-radius: 0px;
}
</style>
