<script setup lang="ts">
import { type Ref, ref } from "vue";
import type { Todo } from "./types/task.type.ts";
import TodoItem from "./components/TodoItem.vue";
const todos: Ref<Todo[]> = ref([
  { title: "Rasen mähen", done: false, highPriority: false },
  { title: "Franz lernen", done: false, highPriority: false },
  {
    title: "An Plänen zur Weltherrschaft arbeiten",
    done: false,
    highPriority: true,
  },
  { title: "Katzenklo reinigen", done: true, highPriority: false },
]);
const errorMessage = ref("");
function validate(todo: Todo): boolean {
  if (!todo.title.trim()) {
    errorMessage.value = "Title is required";
    return false;
  }
  if (todo.title.length < 3) {
    errorMessage.value = "Title must be at least 3 characters";
    return false;
  }
  errorMessage.value = "";
  return true;
}
const getNewTodoItem = (): Todo => ({
  title: "",
  highPriority: false,
  done: false,
});

const newTodo: Ref<Todo> = ref(getNewTodoItem());

function onSubmit() {
  if (!validate(newTodo.value)) return;

  todos.value.push({ ...newTodo.value });
  newTodo.value = getNewTodoItem();
}
</script>

<template>
  <h1>TODO's</h1>
  <div v-for="todo in todos">
    <TodoItem :todo="todo" />
  </div>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="title">Title</label>
      <input
        id="title"
        type="text"
        v-model="newTodo.title"
        placeholder="Enter todo title..."
      />
    </div>

    <div class="form-group checkbox">
      <input id="priority" type="checkbox" v-model="newTodo.highPriority" />
      <label for="priority">High Priority</label>
    </div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <button type="submit">Add Todo</button>
  </form>
</template>

<style scoped>
.form-group {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-group label {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.3rem;
}

.form-group input[type="text"] {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.form-group input[type="text"]:focus {
  outline: none;
  border-color: #007bff;
}

.form-group.checkbox {
  flex-direction: row;
  align-items: center;
}

.form-group.checkbox label {
  margin: 0 0 0 0.5rem;
}

button {
  width: 100%;
  padding: 0.7rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover:not(:disabled) {
  background: #0056b3;
}

.error {
  color: #d9534f;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}
</style>
