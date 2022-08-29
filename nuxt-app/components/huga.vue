<script setup lang="ts">
import { ElInput } from "element-plus";

interface Emits {
  (e: "input", value: string): void;
  (e: "update:value", value: string): void;
}

const emit = defineEmits<Emits>();

const handleInput = ({ target }: { target: HTMLInputElement }) => {
  emit("input", target.value);
  emit("update:value", target.value);
};

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
</script>

<template>
  <el-input
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="handleInput"
  />
</template>
