<template>
  <el-input-number class="emqx-input-number"></el-input-number>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElInputNumber } from 'element-plus'

export default defineComponent({
  name: 'EmqxInputNumber',
  components: { ElInputNumber },
})
</script>

<style lang="scss">
.emqx-input-number {
  $border-radius: 8px;
  &.el-input-number {
    width: 100%;
    .el-input__inner {
      text-align: left;
    }
    &.is-controls-right {
      .el-input-number__increase {
        border-radius: 0 $border-radius 0 0;
      }
      .el-input-number__decrease {
        border-radius: 0 0 $border-radius 0;
      }
    }
  }
  .el-input__inner {
    border-radius: $border-radius;
  }
  .el-input-number__decrease {
    border-radius: $border-radius 0 0 $border-radius;
  }
  .el-input-number__increase {
    border-radius: 0 $border-radius $border-radius 0;
  }
}
</style>
