<template>
  <el-descriptions-item class="emqx-descriptions-item">
    <slot></slot>
    <template v-if="$slots.label" #label>
      <slot name="label"></slot>
    </template>
  </el-descriptions-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElDescriptionsItem } from 'element-plus'

export default defineComponent({
  name: 'EmqxDescriptionsItem',
  components: {
    ElDescriptionsItem,
  },
})
</script>
