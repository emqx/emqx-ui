<template>
  <el-table class="emqx-table">
    <slot></slot>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElTable } from 'element-plus'

export default defineComponent({
  name: 'EmqxTable',
  components: {
    ElTable,
  },
})
</script>

<style lang="scss">
.el-table.emqx-table {
  thead {
    color: #96999c;
    font-weight: 500;
  }
  th {
    &:first-child {
      border-radius: 8px 0 0 8px;
    }
    &:last-child {
      border-radius: 0px 8px 8px 0;
    }
    background: #f3f4f7;
    &.is-leaf {
      border: none;
    }
  }
  .el-table td {
    border-bottom: 1px solid #eff1f7;
  }
}
</style>
