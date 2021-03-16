<template>
  <el-button class="emqx-button" type="primary">
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'EmqxButton',
  components: {
    ElButton,
  },
})
</script>

<style scoped lang="scss">
.emqx-button {
  border-radius: 0px;
}
</style>
