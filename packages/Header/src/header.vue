<template>
  <el-header class="emqx-header">
    <div class="emqx-header-container">
      <div class="left">
        <slot name="title"></slot>
      </div>
      <div class="right-handlers">
        <slot name="right"></slot>
      </div>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElHeader } from 'element-plus'

export default defineComponent({
  name: 'EmqxHeader',
  components: {
    ElHeader,
  },
})
</script>
