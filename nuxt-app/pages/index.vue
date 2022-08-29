<template>
  <el-button>I am ElButton</el-button>
  <Dialog />
  <Test />
  <!-- <Hoge :value="text" label="aaa" type="text" /> -->
</template>
<script lang="ts" setup>
import { ElButton } from "element-plus";
const text = ref("test");
</script>
