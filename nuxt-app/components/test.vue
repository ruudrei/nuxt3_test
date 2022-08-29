<script setup lang="ts">
import { ref } from "vue";
import { ElButton } from "element-plus";

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<template>
  <h1>{{ count }}</h1>
  <el-button @click="increment">Increment</el-button>
  <el-button @click="decrement">Decrement</el-button>
</template>
