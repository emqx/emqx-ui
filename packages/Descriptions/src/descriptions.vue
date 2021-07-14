<template>
  <el-descriptions class="emqx-descriptions">
    <slot></slot>
    <template v-if="$slots.title" #title>
      <slot name="title"></slot>
    </template>
    <template v-if="$slots.extra" #extra>
      <slot name="extra"></slot>
    </template>
  </el-descriptions>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElDescriptions } from 'element-plus'

interface Slot {
  type: string | { name: string }
  children?: Array<Slot>
}

export default defineComponent({
  name: 'EmqxDescriptions',
  components: {
    ElDescriptions,
  },
  setup(props, { slots }) {
    const resetToNativeName = (node: Slot) => {
      if (typeof node.type === 'string' || node.type?.name !== 'EmqxDescriptionsItem') {
        return
      }
      if (!node.type) {
        node.type = {
          name: '',
        }
      }
      // Why we set the type name to 'ElDescriptionsItem'
      // https://github.com/element-plus/element-plus/blob/dev/packages/descriptions/src/index.vue#L100
      node.type.name = 'ElDescriptionsItem'
    }

    const recursiveChangeName = (nodes: Array<Slot>) => {
      nodes.forEach((node: Slot) => {
        if (Array.isArray(node.children)) {
          node.children.forEach((item: Slot) => {
            resetToNativeName(item)
          })
          recursiveChangeName(node.children)
        } else {
          resetToNativeName(node)
        }
      })
    }
    recursiveChangeName(slots.default?.() as Array<Slot>)
  },
})
</script>
