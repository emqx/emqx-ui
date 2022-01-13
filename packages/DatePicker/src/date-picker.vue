<template>
  <el-date-picker class="emqx-date-picker"> </el-date-picker>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElDatePicker } from 'element-plus'

export default defineComponent({
  name: 'EmqxDatePicker',
  components: {
    ElDatePicker,
  },
})
</script>
