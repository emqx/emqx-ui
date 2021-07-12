<template>
  <h2>Button</h2>
  <div class="show-item">
    <emqx-button type="primary" @click="test">test</emqx-button>
    <emqx-button type="warning">test</emqx-button>
    <emqx-button type="success">test</emqx-button>
    <emqx-button type="danger">test</emqx-button>
  </div>
  <div class="show-item">
    <emqx-button type="primary" size="small">test</emqx-button>
    <emqx-button type="primary" size="mini">test</emqx-button>
  </div>
  <div class="show-item">
    <emqx-button icon="el-icon-search" circle></emqx-button>
    <emqx-button icon="el-icon-plus" circle size="mini"></emqx-button>
  </div>
  <h2>Input</h2>
  <div class="show-item">
    <emqx-input v-model="testInput" placeholder="test" style="margin-bottom: 20px"></emqx-input>
    <emqx-input v-model="testInput" placeholder="test" type="textarea" style="margin-bottom: 20px"></emqx-input>
    <emqx-input-number v-model="testInputNumber" :max="5"></emqx-input-number>
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
  <h2>normal container</h2>
  <emqx-header>
    <template v-slot:title>logo</template>
    <template v-slot:right>handlers</template>
  </emqx-header>
  <emqx-container normal>
    <template v-slot:nav>
      <ul>
        <li>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
      </ul>
    </template>
    <template v-slot:page-content>
      <p>page content</p>
    </template>
  </emqx-container>
  <h2>Select</h2>
  <div class="show-item">
    <emqx-select v-model="testSelect" clearable>
      <emqx-option v-for="item in testOptions" :key="item.value" :label="item.label" :value="item.value"> </emqx-option>
    </emqx-select>
  </div>
  <h2>Switch</h2>
  <div class="show-item">
    <emqx-switch v-model="testSwitch"></emqx-switch>
  </div>
  <h2>Form</h2>
  <div class="show-item">
    <emqx-form ref="form" :model="testForm" label-width="80px" :rules="rules">
      <emqx-form-item label="活动名称" required prop="name">
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
      <emqx-table-column prop="date" label="日期" width="180">
        <template #default="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </emqx-table-column>
      <emqx-table-column prop="name" label="姓名" width="180"> </emqx-table-column>
      <emqx-table-column prop="address" label="地址"> </emqx-table-column>
    </emqx-table>
  </div>
  <h2>Pagination</h2>
  <div class="show-item">
    <emqx-pagination layout="prev, pager, next" :total="50"> </emqx-pagination>
  </div>
  <h2>Card</h2>
  <div class="show-item">
    <emqx-card border="none">
      <template #header>
        <div class="card-header">
          <span>卡片名称</span>
          <emqx-button class="button" type="text">操作按钮</emqx-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </emqx-card>
  </div>
  <h2>Menu</h2>
  <div class="show-item">
    <emqx-row>
      <emqx-col :span="12">
        <emqx-menu default-active="2" class="el-menu-vertical-demo">
          <emqx-menu-item index="1">
            <i class="el-icon-menu"></i>
            <template #title>导航二</template>
          </emqx-menu-item>
          <emqx-menu-item index="2">
            <i class="el-icon-document"></i>
            <template #title>导航三</template>
          </emqx-menu-item>
          <emqx-menu-item index="3">
            <i class="el-icon-setting"></i>
            <template #title>导航四</template>
          </emqx-menu-item>
        </emqx-menu>
      </emqx-col>
    </emqx-row>
  </div>
  <h2>Breadcrumb</h2>
  <div class="show-item">
    <emqx-breadcrumb separator="/">
      <emqx-breadcrumb-item :to="{ path: '/' }">首页</emqx-breadcrumb-item>
      <emqx-breadcrumb-item><a href="/">活动管理</a></emqx-breadcrumb-item>
      <emqx-breadcrumb-item>活动列表</emqx-breadcrumb-item>
      <emqx-breadcrumb-item>活动详情</emqx-breadcrumb-item>
    </emqx-breadcrumb>
  </div>
  <h2>Dropdown</h2>
  <div class="show-item">
    <emqx-dropdown trigger="click">
      <span class="el-dropdown-link"> 下拉菜单<i class="el-icon-arrow-down el-icon--right"></i> </span>
      <template #dropdown>
        <emqx-dropdown-menu>
          <emqx-dropdown-item>黄金糕</emqx-dropdown-item>
          <emqx-dropdown-item>狮子头</emqx-dropdown-item>
          <emqx-dropdown-item>螺蛳粉</emqx-dropdown-item>
          <emqx-dropdown-item disabled>双皮奶</emqx-dropdown-item>
          <emqx-dropdown-item divided>蚵仔煎</emqx-dropdown-item>
        </emqx-dropdown-menu>
      </template>
    </emqx-dropdown>
  </div>
  <h2>Upload</h2>
  <div class="show-item">
    <emqx-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
      <div>
        <img src="./upload.png" alt="upload" width="82" />
      </div>
      <div>
        <emqx-button icon="el-icon-upload2">上传文件</emqx-button>
      </div>
      <div>
        <emqx-button type="text">下载 CSV 模版</emqx-button>
      </div>
      <template #tip>
        <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
      </template>
    </emqx-upload>
  </div>
  <h2>Key Value Editor</h2>
  <div class="show-item">
    <emqx-button type="text" @click="addOneRow">添加</emqx-button>
    <emqx-key-value-editor ref="KeyValueEditorRef" v-model="kvTest"></emqx-key-value-editor>
  </div>
  <h2>Tags</h2>
  <div class="show-item">
    <emqx-tags v-model="tagResult" :options="tagOptions"></emqx-tags>
  </div>
  <h2>Tags Allow Add</h2>
  <div class="show-item">
    <emqx-tags v-model="tagResult" allow-add :options="tagOptions" :request-to-add="fakeRequestToAddTag"></emqx-tags>
  </div>
  <h2>Avatar With Menu</h2>
  <div class="show-item" style="text-align: right">
    <emqx-avatar icon="el-icon-user-solid">
      <template #menu>
        <emqx-menu mode="vertical">
          <emqx-menu-item index="1-1">选项1</emqx-menu-item>
          <emqx-menu-item index="1-2">选项2</emqx-menu-item>
          <emqx-menu-item index="1-3">选项3</emqx-menu-item>
        </emqx-menu>
      </template>
    </emqx-avatar>
  </div>
  <h2>Checkbox</h2>
  <div class="show-item">
    <emqx-checkbox v-model="checked">备选项</emqx-checkbox>
  </div>
  <h2>Radio</h2>
  <div class="show-item">
    <emqx-radio v-model="radio" label="1">备选项1</emqx-radio>
    <emqx-radio v-model="radio" label="2">备选项2</emqx-radio>
  </div>
  <h2>Descriptions</h2>
  <emqx-descriptions title="用户信息">
    <emqx-descriptions-item label="用户名">
      <template #label> 1243 </template>
      900000
    </emqx-descriptions-item>
    <emqx-descriptions-item label="手机号">18100000000</emqx-descriptions-item>
    <emqx-descriptions-item label="居住地">苏州市</emqx-descriptions-item>
    <emqx-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</emqx-descriptions-item>
  </emqx-descriptions>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'App',
  setup() {
    const testInput = ref('')
    const testInputNumber = ref(0)
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
    const testTagsVal = ref(['test1'])
    const testTagsOptions = ['test1', 'test2', 'test3']
    const kvTest = ref({})
    const jsonValue = ref(JSON.stringify({ messge: 'hello' }, null, 2))
    const rules = {
      name: [
        {
          required: true,
          type: 'string',
          message: 'error',
          trigger: 'blur',
        },
      ],
    }
    const test = () => {
      console.log(testInput.value)
      console.log(testSelect.value)
      console.log(testSwitch.value)
      console.log(testTagsVal.value)
      console.log(kvTest.value)
      console.log(jsonValue.value)
    }
    const form = ref()
    const onSubmit = async () => {
      try {
        await form.value.validate()
        ElMessage({
          type: 'success',
          message: 'success',
          duration: 0,
        })
        ElMessage({
          type: 'error',
          message: 'error',
          duration: 0,
        })
        ElMessage({
          type: 'warning',
          message: 'warning',
          duration: 0,
        })
      } catch (error) {
        // ignore
      }
    }
    const KeyValueEditorRef = ref()
    const addOneRow = () => {
      KeyValueEditorRef.value.addItem()
    }
    const tagResult = ref(['标签一', '标签二', '标签三'])
    const tagOptions = ref(['标签四', '标签五'])
    const fakeRequestToAddTag = async (value: string) => {
      console.log(value)
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(1)
        }, 2000)
      })
    }
    const checked = ref(true)
    const radio = ref('1')
    return {
      testInput,
      testInputNumber,
      testSelect,
      testOptions,
      testSwitch,
      testForm,
      testTable,
      testTagsVal,
      testTagsOptions,
      test,
      dialogVisible,
      onSubmit,
      kvTest,
      addOneRow,
      KeyValueEditorRef,
      tagResult,
      tagOptions,
      fakeRequestToAddTag,
      jsonValue,
      form,
      rules,
      checked,
      radio,
    }
  },
})
</script>

<style lang="scss">
#app {
  padding: 60px 60px 200px 60px;
}
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
