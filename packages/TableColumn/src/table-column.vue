<template>
  <el-table-column class="emqx-table-column"></el-table-column>
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

<style lang="scss"></style>
