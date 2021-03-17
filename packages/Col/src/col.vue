<template>
  <el-col class="emqx-col">
    <slot></slot>
  </el-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElCol } from 'element-plus'

export default defineComponent({
  name: 'EmqxCol',
  components: {
    ElCol,
  },
})
</script>

<style lang="scss">
.emqx-button.el-button {
  border-radius: 0px;
}
</style>
