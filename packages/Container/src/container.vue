<template>
  <el-container class="emqx-container" :class="normal ? 'is-normal' : ''">
    <template v-if="normal">
      <emqx-aside :width="`${navWidth}px`">
        <div class="nav-container" v-if="fixedNav" ref="navContainer" :width="`${navWidth}px`">
          <slot name="nav"></slot>
        </div>
        <slot name="nav" v-else></slot>
      </emqx-aside>
      <emqx-main>
        <slot name="page-content"></slot>
      </emqx-main>
    </template>
    <slot v-else></slot>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
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
    fixedNav: {
      type: Boolean,
      default: false,
    },
    navWidth: {
      type: Number,
      default: 220,
    },
  },
  setup(props) {
    const navContainer = ref<HTMLElement>()

    onMounted(() => {
      try {
        if (!props.normal || !props.normal) {
          return
        }
        const ele: HTMLElement | undefined = navContainer?.value
        const pos = ele?.getBoundingClientRect()
        ele?.style?.setProperty('position', 'fixed')
        ele?.style?.setProperty('top', pos?.top ? `${pos?.top}px` : '0px')
      } catch (error) {
        console.error(error)
      }
    })
    return {
      navContainer,
    }
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
