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

<style lang="scss">
.emqx-header {
  width: 100%;
  height: 60px;

  .emqx-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
