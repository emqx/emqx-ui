<template>
  <el-checkbox-group class="emqx-tags-checkbox" v-model="tagsValue">
    <el-checkbox v-for="(tag, index) in tags" :key="index" border :label="tag"></el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRefs, watch } from 'vue'
import { ElCheckbox, ElCheckboxGroup } from 'element-plus'

export default defineComponent({
  name: 'EmqxTagsCheckbox',
  components: {
    ElCheckbox,
    ElCheckboxGroup,
  },
  props: {
    modelValue: {
      required: true,
      type: Array as PropType<string[]>,
    },
    tags: {
      required: true,
      type: Array as PropType<string[]>,
    },
  },
  setup(props, context) {
    const { modelValue } = toRefs(props)
    const tagsValue = ref(modelValue.value)
    watch(tagsValue, (val: string[]) => {
      context.emit('update:modelValue', val)
    })
    return {
      tagsValue,
    }
  },
})
</script>

<style lang="scss">
.emqx-tags-checkbox {
  .el-checkbox__input {
    display: none;
  }
  .el-checkbox.is-bordered {
    color: #4d4d4d;
    border-radius: 8px;
    background: #f3f4f7;
    border-color: transparent;
    margin-right: 10px;
  }
}
</style>
