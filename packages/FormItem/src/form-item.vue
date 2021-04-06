<template>
  <el-form-item class="emqx-form-item" :class="$slots.label && $slots.operation ? 'with-operation' : ''">
    <template v-if="$slots.label && $slots.operation" #label>
      <slot name="label"></slot>
      <div class="float-right">
        <slot name="operation"></slot>
      </div>
    </template>
    <template v-else-if="$slots.label" #label>
      <slot name="label"></slot>
    </template>
    <slot></slot>
  </el-form-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElFormItem } from 'element-plus'

export default defineComponent({
  name: 'EmqxFormItem',
  components: {
    ElFormItem,
  },
})
</script>

<style lang="scss"></style>
