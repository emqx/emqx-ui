<template>
  <div class="emqx-editor" :style="{ height: editorHeight }">
    <div :id="`monaco-${id}`" class="emqx-editor-view"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ToRefs, toRefs, watch } from 'vue'
import useEditor from '../composables/useEditor'
import { Lang, Switch, renderLineHighlight, ScrollBarStatus, CustomMonacoOption } from '../types/editor'

export default defineComponent({
  name: 'EmqxEditor',
  props: {
    id: {
      required: true,
      type: String,
    },
    height: {
      type: Number,
      default: 300,
    },
    modelValue: {
      required: true,
      type: String,
    },
    lang: {
      required: true,
      type: String as PropType<Lang>,
    },
    fontSize: {
      type: Number,
      default: 14,
    },
    lineNumbers: {
      type: String as PropType<Switch>,
      default: 'on',
    },
    renderLineHighlight: {
      type: String as PropType<renderLineHighlight>,
      default: 'line',
    },
    scrollbarStatus: {
      type: String as PropType<ScrollBarStatus>,
      default: 'visible',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    wordWrap: {
      type: String as PropType<Switch>,
      default: 'off',
    },
    lineHeight: {
      type: Number,
      default: undefined,
    },
  },
  setup(props, ctx) {
    const { id, height, modelValue, ...others } = toRefs(props)
    const option: ToRefs<CustomMonacoOption> = { value: modelValue, ...others }
    const editorHeight = computed(() => {
      return `${height.value}px`
    })
    const { value } = useEditor(id, option)
    watch(value, val => {
      ctx.emit('update:modelValue', val)
    })
    return {
      editorHeight,
    }
  },
})
</script>

<style lang="scss">
.emqx-editor {
  padding: 10px 0px;
  border: 1px solid #d7dae1;
  border-radius: 8px;
}
.emqx-editor-view {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
