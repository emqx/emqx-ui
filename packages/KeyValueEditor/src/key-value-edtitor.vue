<template>
  <div class="emqx-key-value-editor">
    <div v-for="(item, index) in listData" :key="index" class="item-col">
      <emqx-row>
        <emqx-col :span="11" class="item-col__key">
          <emqx-input placeholder="key" v-model="item.key" @input="handleInputChange"></emqx-input>
        </emqx-col>
        <emqx-col :span="11" class="item-col__value">
          <emqx-input placeholder="value" v-model="item.value" @input="handleInputChange"></emqx-input>
        </emqx-col>
        <emqx-col :span="2" class="item-col__oper">
          <emqx-button type="text" @click="deleteItem(index)">
            <i class="el-icon-delete"></i>
          </emqx-button>
        </emqx-col>
      </emqx-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, toRefs } from 'vue'

interface ModelValue {
  [key: string]: string
}

interface KeyValueItem {
  key: string
  value: string
}

export default defineComponent({
  name: 'EmqxKeyValueEditor',
  props: {
    modelValue: {
      required: true,
      type: Object as PropType<ModelValue[]>,
    },
  },
  setup(props, context) {
    const { modelValue } = toRefs(props)
    const listData: Ref<KeyValueItem[]> = ref([])
    const entries = Object.entries(modelValue.value)
    const handleInputChange = () => {
      const data: ModelValue = {}
      listData.value.forEach(({ key, value }) => {
        data[key] = value
      })
      context.emit('update:modelValue', data)
    }
    const deleteItem = (index: number) => {
      if (listData.value.length > 1) {
        listData.value.splice(index, 1)
        handleInputChange()
      }
    }
    const addItem = () => {
      listData.value.push({ key: '', value: '' })
    }
    if (entries.length > 0) {
      Object.entries(modelValue.value).forEach(([key, value]) => {
        const _value = value.toString()
        const _data = { key, value: _value }
        listData.value.push(_data)
      })
    } else {
      addItem()
    }
    return {
      listData,
      handleInputChange,
      deleteItem,
      addItem,
    }
  },
})
</script>
