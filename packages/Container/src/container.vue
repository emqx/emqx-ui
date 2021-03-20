<template>
  <el-container class="emqx-container" :class="normal ? 'is-normal' : ''">
    <template v-if="normal">
      <emqx-aside :width="`${navWidth}px`">
        <slot name="nav"></slot>
      </emqx-aside>
      <emqx-main>
        <slot name="page-content"></slot>
      </emqx-main>
    </template>
    <slot v-else></slot>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElContainer } from 'element-plus'

export default defineComponent({
  name: 'EmqxContainer',
  components: {
    ElContainer,
  },
  props: {
    /**
     * is it normal layout that left is nav and right is page content
     * and then the width will change by the window's width
     */
    normal: {
      type: Boolean,
      default: false,
    },
    navWidth: {
      type: Number,
      default: 220,
    },
  },
})
</script>

<style lang="scss">
@import '../../style/global.scss';
.emqx-container {
  &.is-normal {
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
