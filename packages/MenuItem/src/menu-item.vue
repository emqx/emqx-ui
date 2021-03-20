<template>
  <el-menu-item class="emqx-menu-item">
    <template v-if="$slots.title" #title>
      <slot name="title"></slot>
    </template>
    <slot></slot>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMenuItem } from 'element-plus'

export default defineComponent({
  name: 'EmqxMenuItem',
  components: {
    ElMenuItem,
  },
})
</script>

<style lang="scss">
.emqx-menu-item.el-menu-item.is-active {
  color: #fff;
  background: #4c63ee;
}
</style>
