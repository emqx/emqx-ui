<template>
  <el-card class="emqx-card">
    <template v-if="$slots.header" #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElCard } from 'element-plus'

export default defineComponent({
  name: 'EmqxCard',
  components: {
    ElCard,
  },
})
</script>

<style lang="scss">
.emqx-card {
  .el-card {
    border-radius: 8px;
    .el-card__body {
      padding: 32px;
    }
  }
}
</style>
