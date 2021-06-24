<template>
  <el-container class="emqx-container" :class="normal ? 'is-normal' : ''">
    <template v-if="normal">
      <emqx-aside :width="`${navWidth}px`">
        <div v-if="fixedNav" class="nav-container" ref="navContainer" :style="`width: ${navWidth}px`">
          <slot name="nav"></slot>
        </div>
        <slot v-else name="nav"></slot>
      </emqx-aside>
      <emqx-main>
        <slot name="page-content"></slot>
      </emqx-main>
    </template>
    <slot v-else></slot>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue'
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
    /**
     * with this prop, when the width of window is less than this value
     * the position of nav will be changed from fixed to relative
     */
    pageMinWidth: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    const navContainer = ref<HTMLElement>()

    let timer: undefined | number = undefined

    const setNavPosition = (position: 'fixed' | 'static') => {
      navContainer?.value?.style.setProperty('position', position)
    }

    const handlePosition = () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = window.setTimeout(() => {
        if (window.innerWidth > 1000) {
          setNavPosition('fixed')
        } else {
          setNavPosition('static')
        }
      }, 200)
    }

    onMounted(() => {
      if (!props.normal || !props.fixedNav) {
        return
      }
      const ele: HTMLElement | undefined = navContainer?.value
      const posY = ele?.offsetTop
      ele?.style?.setProperty('position', 'fixed')
      ele?.style?.setProperty('top', posY ? `${posY}px` : '0px')
      if (props.pageMinWidth) {
        window.addEventListener('resize', handlePosition)
      }
    })

    onBeforeMount(() => {
      handlePosition()
      window.removeEventListener('resize', handlePosition)
    })

    return {
      navContainer,
    }
  },
})
</script>
