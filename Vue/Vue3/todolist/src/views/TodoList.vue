<script setup>
import { ref, reactive } from "vue";
import TodoItem from "./TodoItem.vue";

const todos = reactive([])
const input = ref('')

const addTodo = () => {
  if (!input.value) return;
  todos.push({
    tid: new Date().getTime(),
    content: input.value
  })
  input.value = ''
}

</script>
<template>
  <div class="inputBar">
    <input type="text" v-model="input">
    <button @click="addTodo">add</button>
  </div>
  <ul class="todo-list">
    <TodoItem v-for="todo in todos" :key="todo.tid" :todo=todo />
  </ul>
</template>
