<template>
  <el-table-column class="emqx-table-column">
    <template v-if="$slots.header" #header="scope">
      <slot name="header" :column="scope.column" :index="scope.$index"></slot>
    </template>
    <template v-if="$slots.default" #default="scope">
      <slot :row="scope.row" :index="scope.$index"></slot>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElTableColumn } from 'element-plus'

export default defineComponent({
  name: 'EmqxTableColumn',
  components: {
    ElTableColumn,
  },
})
</script>
