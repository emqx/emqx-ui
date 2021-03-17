<template>
  <h2>Button</h2>
  <div class="show-item">
    <emqx-button type="primary" @click="test">test</emqx-button>
    <emqx-button type="warning">test</emqx-button>
    <emqx-button type="danger">test</emqx-button>
  </div>
  <div class="show-item">
    <emqx-button type="primary" size="small">test</emqx-button>
    <emqx-button type="primary" size="mini">test</emqx-button>
  </div>
  <h2>Input</h2>
  <div>
    <emqx-input v-model="testInput" placeholder="test"></emqx-input>
  </div>
  <h2>Layout</h2>
  <div>
    <emqx-row :gutter="20">
      <emqx-col :span="6"><div class="grid-content bg-purple"></div></emqx-col>
      <emqx-col :span="6"><div class="grid-content bg-purple"></div></emqx-col>
      <emqx-col :span="6"><div class="grid-content bg-purple"></div></emqx-col>
      <emqx-col :span="6"><div class="grid-content bg-purple"></div></emqx-col>
    </emqx-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const testInput = ref('')
    const test = () => {
      console.log(testInput.value)
    }
    return {
      testInput,
      test,
    }
  },
})
</script>

<style lang="scss">
.show-item {
  margin-bottom: 20px;
}
.el-row.emqx-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col.emqx-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
