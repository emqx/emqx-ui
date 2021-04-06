<template>
  <div class="emqx-tags">
    <el-tag
      v-for="tag in tagArr"
      type="info"
      :key="tag"
      :closable="allowAdd"
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>
    <div class="new-tag-input-wrap" v-if="allowAdd">
      <el-select
        class="tag-select"
        v-model="selectedTag"
        ref="tagSelect"
        filterable
        allow-create
        default-first-option
        placeholder="请输入标签"
        size="small"
        @keyup.enter="handleInputConfirm('enter')"
        @blur="handleInputConfirm('blur')"
        :class="{ 'select-hidden': !inputVisible }"
        :popper-class="!inputValue ? 'popper-hidden' : ''"
      >
        <el-option v-for="item in options" :key="item" :label="item" :value="item" @mousedown="handleMousedown(item)">
        </el-option>
      </el-select>
      <emqx-button v-if="!inputVisible" class="button-new-tag" size="small" @click="showInput">+ 新增标签</emqx-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, PropType, computed } from 'vue'
import { ElTag, ElSelect, ElOption } from 'element-plus'

export default defineComponent({
  name: 'EmqxTags',
  components: {
    ElTag,
    ElSelect,
    ElOption,
  },
  props: {
    modelValue: {
      type: Array as PropType<Array<string>>,
      required: true,
    },
    options: {
      type: Array as PropType<Array<string>>,
      default: [],
    },
    allowAdd: {
      type: Boolean,
      default: false,
    },
    requestToAdd: {
      type: Function,
      required: false,
    },
  },
  setup(props, ctx) {
    const inputVisible = ref(false)

    const selectedTag = ref('')

    const tagSelect = ref(ElSelect)

    const lockedAdd = ref(false)

    const tagArr = computed({
      get: () => {
        return props.modelValue
      },
      set: (value: Array<string>) => {
        ctx.emit('update:modelValue', value)
      },
    })

    const inputValue = computed(() => {
      return tagSelect?.value?.$refs?.reference?.modelValue
    })

    const handleClose = (tag: string) => {
      tagArr.value.splice(tagArr.value.indexOf(tag), 1)
    }

    const showInput = () => {
      inputVisible.value = true
      nextTick(() => {
        tagSelect.value.$refs.reference.focus()
      })
    }

    const initInput = () => {
      inputVisible.value = false
      selectedTag.value = ''
    }

    const addTag = async (value: string) => {
      if (props.requestToAdd) {
        await props.requestToAdd(value)
      }
      tagArr.value.push(value)
    }

    const handleMousedown = (value: string) => {
      lockedAdd.value = true
      addTag(value)
      initInput()
    }

    const handleInputConfirm = (sourceEvent: 'blur' | 'enter') => {
      if (lockedAdd.value && sourceEvent === 'blur') {
        lockedAdd.value = false
        return
      }
      if (inputValue.value) {
        addTag(inputValue.value)
      }
      initInput()
    }

    return {
      inputVisible,
      selectedTag,
      tagArr,
      inputValue,
      tagSelect,
      handleClose,
      showInput,
      handleInputConfirm,
      handleMousedown,
    }
  },
})
</script>

<style lang="scss"></style>
