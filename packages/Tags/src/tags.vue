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
      >
        <el-option v-for="item in options" :key="item" :label="item" :value="item" @mousedown="handleMousedown(item)">
        </el-option>
      </el-select>
      <emqx-button v-if="!inputVisible" class="button-new-tag" size="small" @click="showInput">+ 新增标签</emqx-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, PropType, computed, watch } from 'vue'
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
      tagArr.value.push(value)
      if (props.requestToAdd) {
        await props.requestToAdd(value)
      }
    }

    const handleMousedown = (value: string) => {
      lockedAdd.value = true
      addTag(value)
      initInput()
    }

    const handleInputConfirm = (sourceEvent: 'blur' | 'enter') => {
      if (lockedAdd.value && sourceEvent === 'blur') {
        return
      }
      const inputValue = tagSelect.value.$refs.reference.modelValue
      if (inputValue) {
        addTag(inputValue)
      }
      initInput()
      lockedAdd.value = false
    }

    return {
      inputVisible,
      selectedTag,
      tagArr,
      tagSelect,
      handleClose,
      showInput,
      handleInputConfirm,
      handleMousedown,
    }
  },
})
</script>

<style lang="scss">
.emqx-tags {
  display: block;
  width: 100%;
  .el-tag,
  .button-new-tag,
  .input-new-tag {
    vertical-align: top;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .el-tag {
    background-color: #f3f4f7;
    border-color: #f3f4f7;
    color: #4d4d4d;
    border-radius: 8px;
  }
  .button-new-tag {
    position: relative;
    z-index: 1;
    border-radius: 8px;
    font-weight: normal;
  }
  .input-new-tag {
    width: 90px;
    line-height: 1;
  }
  .new-tag-input-wrap {
    position: relative;
    display: inline-block;
    min-width: 120px;
    height: 32px;
    margin-left: 10px;
  }
  .tag-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    border-radius: 8px;
    &.select-hidden {
      width: 100px;
      opacity: 0;
    }
    .el-input__inner {
      border-radius: 8px;
    }
    .el-input__icon {
      display: none;
    }
  }
}
</style>
