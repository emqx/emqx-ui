<template>
  <el-pagination class="emqx-pagination" background prev-text="<" next-text=">">
    <slot></slot>
  </el-pagination>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElPagination } from 'element-plus'

export default defineComponent({
  name: 'EmqxPagination',
  components: {
    ElPagination,
  },
})
</script>

<style lang="scss">
.emqx-pagination {
  &.el-pagination.is-background {
    .btn-prev,
    .btn-next {
      min-width: inherit;
      background-color: transparent;
      span {
        min-width: 8px;
      }
    }

    .el-pager li {
      color: #96999c;
      background-color: #f3f4f7;
      &:not(.disabled).active {
        color: #4c63ee;
        background-color: #f3f4f7;
      }
    }
  }
}
</style>
