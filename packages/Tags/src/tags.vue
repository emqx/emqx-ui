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
        @change="handleSelect"
        @keyup.enter="handleInputConfirm"
        :class="{ 'select-hidden': !inputVisible }"
      >
        <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value"> </el-option>
      </el-select>
      <emqx-button v-if="!inputVisible" class="button-new-tag" size="small" @click="showInput">+ 新增标签</emqx-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, nextTick, ref, toRefs, PropType } from 'vue'
import { ElTag, ElSelect, ElOption } from 'element-plus'

interface TagOption {
  value: string
  [key: string]: string
}

export default defineComponent({
  name: 'EmqxTags',
  components: {
    ElTag,
    ElSelect,
    ElOption,
  },
  props: {
    options: {
      type: Array as PropType<Array<TagOption>>,
      default: [],
    },
    allowAdd: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const state = reactive({
      tagArr: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      selectedTag: '',
    })

    const tagSelect = ref(ElSelect)

    const handleClose = (tag: string) => {
      state.tagArr.splice(state.tagArr.indexOf(tag), 1)
    }

    const showInput = () => {
      state.inputVisible = true
      nextTick(() => {
        tagSelect.value.$refs.reference.focus()
      })
    }

    const initInput = () => {
      state.inputVisible = false
      state.selectedTag = ''
    }

    const handleInputConfirm = () => {
      const inputValue = tagSelect.value.$refs.reference.modelValue
      if (inputValue) {
        state.tagArr.push(inputValue)
      }
      initInput()
    }

    const handleSelect = (item: string) => {
      state.tagArr.push(item)
      initInput()
    }

    return {
      ...toRefs(state),
      tagSelect,
      handleClose,
      showInput,
      handleInputConfirm,
      handleSelect,
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
