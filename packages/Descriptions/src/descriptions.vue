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
  setup(props: any, { slots }) {
    const setName = (item: Slot) => {
      if (typeof item.type === 'string' || item.type?.name !== 'EmqxDescriptionsItem') {
        return
      }
      if (!item.type || typeof item.type === 'string') {
        item.type = {
          name: '',
        }
      }
      item.type.name = 'ElDescriptionsItem'
    }

    const recursiveChange = (children: Array<Slot>) => {
      const temp: any = Array.isArray(children) ? children : [children]
      temp.forEach((child: Slot) => {
        if (Array.isArray(child.children)) {
          child.children.forEach((item: Slot) => {
            setName(item)
          })
          recursiveChange(child.children)
        } else {
          setName(child)
        }
      })
    }
    const changeName = () => {
      recursiveChange(slots.default?.() as Array<Slot>)
    }
    changeName()
  },
})
</script>
