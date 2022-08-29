<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ElInput } from "element-plus";

// propsを定義
interface Props {
  value: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  disabled?: boolean;
}

// propsを受け取る(受け取っていない場合はデフォルト値を使用)
const props = withDefaults(defineProps<Props>(), {
  label: "",
  type: "text",
  placeholder: "",
  disabled: false,
});

// computedを定義し、propsで受け取った値に応じてstyleを適用する
const style = computed(() => {
  props.value.length >= 2 ? { color: "red" } : "";
});
</script>
<template>
  <el-input
    :style="style"
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>
