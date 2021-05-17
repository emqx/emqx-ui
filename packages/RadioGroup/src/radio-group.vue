<template>
  <el-radio-group>
    <slot></slot>
  </el-radio-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElRadioGroup } from 'element-plus'

export default defineComponent({
  name: 'EmqxRadioGroup',
  components: { ElRadioGroup },
})
</script>
