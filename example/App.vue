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
  <div class="show-item">
    <emqx-input v-model="testInput" placeholder="test" style="margin-bottom: 20px"></emqx-input>
    <emqx-input v-model="testInput" placeholder="test" type="textarea"></emqx-input>
  </div>
  <h2>Layout</h2>
  <div class="show-item">
    <emqx-row :gutter="20">
      <emqx-col :span="6"><div class="grid-content bg-purple"></div></emqx-col>
      <emqx-col :span="6"><div class="grid-content bg-purple"></div></emqx-col>
      <emqx-col :span="6"><div class="grid-content bg-purple"></div></emqx-col>
      <emqx-col :span="6"><div class="grid-content bg-purple"></div></emqx-col>
    </emqx-row>
  </div>
  <h2>Container</h2>
  <div class="show-item">
    <emqx-header>Header</emqx-header>
    <emqx-container>
      <emqx-aside width="200px">Aside</emqx-aside>
      <emqx-container>
        <emqx-main>Main</emqx-main>
      </emqx-container>
    </emqx-container>
  </div>
  <h2>Select</h2>
  <div class="show-item">
    <emqx-select v-model="testSelect" clearable>
      <emqx-option v-for="item in testOptions" :key="item.value" :label="item.label" :value="item.value"> </emqx-option>
    </emqx-select>
  </div>
  <h2>Switch</h2>
  <div class="show-item">
    <emqx-switch v-model="testSwitch" active-color="#13ce66" inactive-color="#ff4949"></emqx-switch>
  </div>
  <h2>Form</h2>
  <div class="show-item">
    <emqx-form ref="form" :model="testForm" label-width="80px">
      <emqx-form-item label="活动名称">
        <emqx-input v-model="testForm.name"></emqx-input>
      </emqx-form-item>
      <emqx-form-item label="活动区域">
        <emqx-select v-model="testForm.region" placeholder="请选择活动区域">
          <emqx-option label="区域一" value="shanghai"></emqx-option>
          <emqx-option label="区域二" value="beijing"></emqx-option>
        </emqx-select>
      </emqx-form-item>
      <emqx-form-item>
        <emqx-button type="primary" @click="onSubmit">立即创建</emqx-button>
        <emqx-button>取消</emqx-button>
      </emqx-form-item>
    </emqx-form>
  </div>
  <h2>Table</h2>
  <div class="show-item">
    <emqx-table :data="testTable" style="width: 100%">
      <emqx-table-column prop="date" label="日期" width="180"> </emqx-table-column>
      <emqx-table-column prop="name" label="姓名" width="180"> </emqx-table-column>
      <emqx-table-column prop="address" label="地址"> </emqx-table-column>
    </emqx-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const testInput = ref('')
    const testSelect = ref('')
    const testSwitch = ref(true)
    const dialogVisible = ref(false)
    const testOptions = [{ value: 'value', label: 'label' }]
    const testForm = ref({
      name: '',
      region: '',
    })
    const testTable = ref([
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      },
    ])
    const test = () => {
      console.log(testInput.value)
      console.log(testSelect.value)
      console.log(testSwitch.value)
    }
    const onSubmit = () => {
      console.log(testForm.value)
    }
    return {
      testInput,
      testSelect,
      testOptions,
      testSwitch,
      testForm,
      testTable,
      test,
      dialogVisible,
      onSubmit,
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
