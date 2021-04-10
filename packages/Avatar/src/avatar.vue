<template>
  <el-avatar class="emqx-avatar" v-if="!$slots.menu">
    <slot></slot>
  </el-avatar>
  <el-popover v-else popper-class="emqx-avatar-popover" placement="bottom-end" trigger="click">
    <template #reference>
      <el-avatar class="emqx-avatar" v-bind="$attrs">
        <slot></slot>
      </el-avatar>
    </template>
    <slot name="menu"></slot>
  </el-popover>
</template>

<script>
import { ElAvatar, ElPopover } from 'element-plus'

export default {
  name: 'EmqxAvatar',
  components: { ElAvatar, ElPopover },
}
</script>
