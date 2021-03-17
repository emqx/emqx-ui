<template>
  <el-switch class="emqx-switch"></el-switch>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElSwitch } from 'element-plus'

export default defineComponent({
  name: 'EmqxSwitch',
  components: {
    ElSwitch,
  },
})
</script>

<style lang="scss"></style>
