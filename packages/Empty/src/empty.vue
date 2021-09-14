<template>
  <el-empty class="emqx-empty">
    <slot></slot>
    <template v-if="$slots.image" #image>
      <slot name="image"></slot>
    </template>
    <template v-if="$slots.description" #description>
      <slot name="description"></slot>
    </template>
  </el-empty>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElEmpty } from 'element-plus'

export default defineComponent({
  name: 'EmqxEmpty',
  components: { ElEmpty },
})
</script>
