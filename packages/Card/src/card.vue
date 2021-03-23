<template>
  <el-card :class="['emqx-card', { 'border-none': border === 'none' }]">
    <template v-if="$slots.header" #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ElCard } from 'element-plus'

type Border = 'normal' | 'none'

export default defineComponent({
  name: 'EmqxCard',
  components: {
    ElCard,
  },
  props: {
    border: {
      type: String as PropType<Border>,
      default: 'normal',
    },
  },
})
</script>

<style lang="scss">
.emqx-card {
  &.border-none {
    .el-card {
      border: none;
    }
  }
  .el-card {
    border-radius: 8px;
    .el-card__body {
      padding: 32px;
    }
  }
}
</style>
