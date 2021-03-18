<template>
  <el-switch class="emqx-switch" :active-color="activeColor" :inactive-color="inactiveColor"></el-switch>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElSwitch } from 'element-plus'

export default defineComponent({
  name: 'EmqxSwitch',
  props: {
    activeColor: {
      required: false,
      type: String,
      default: '#00B173',
    },
    inactiveColor: {
      required: false,
      type: String,
      default: '#C4C5CE',
    },
  },
  components: {
    ElSwitch,
  },
})
</script>

<style lang="scss"></style>
