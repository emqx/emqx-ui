<template>
  <el-input class="emqx-input"></el-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElInput } from 'element-plus'

export default defineComponent({
  name: 'EmqxInput',
  components: {
    ElInput,
  },
})
</script>

<style lang="scss">
.emqx-input {
  .el-input__inner {
    border-radius: 0px;
  }
}
</style>
