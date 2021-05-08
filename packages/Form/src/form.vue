<template>
  <el-form class="emqx-form" ref="form">
    <slot></slot>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElForm } from 'element-plus'

export default defineComponent({
  name: 'EmqxForm',
  components: {
    ElForm,
  },
  setup() {
    const form = ref()
    const validate = () => {
      return form.value.validate()
    }
    return {
      form,
      validate,
    }
  },
})
</script>
