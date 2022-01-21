<template>
  <el-upload ref="upload" class="emqx-upload">
    <slot></slot>
    <template v-if="$slots.tip" #tip>
      <slot name="tip"></slot>
    </template>
  </el-upload>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElUpload } from 'element-plus'

export default defineComponent({
  name: 'EmqxUpload',
  components: {
    ElUpload,
  },
  setup() {
    const upload = ref()
    return {
      upload,
    }
  },
})
</script>
