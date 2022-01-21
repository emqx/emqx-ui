<template>
  <el-input ref="input" class="emqx-input">
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend"></slot>
    </template>
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-if="$slots.append" #append>
      <slot name="append"></slot>
    </template>
    <template v-if="$slots.suffix" #suffix>
      <slot name="suffix"></slot>
    </template>
  </el-input>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElInput } from 'element-plus'

export default defineComponent({
  name: 'EmqxInput',
  components: {
    ElInput,
  },
  setup() {
    const input = ref()
    return {
      input,
    }
  },
})
</script>
