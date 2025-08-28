<script setup lang="ts">
import type { Todo } from "../types/task.type";

const props = defineProps<{
  todo: Todo;
}>();
</script>

<template>
  <div>
    <input type="checkbox" v-model="props.todo.done" />
    <span :class="{ isHighPriority: todo.highPriority }">
      {{ todo.title }}</span
    >
    <span v-if="todo.done">🎉</span>
  </div>
</template>
<style scoped>
.isHighPriority {
  color: darkred;
}
</style>
