<script setup>
import { ref, reactive } from "vue";
import TodoItem from "./TodoItem.vue";

const todos = reactive([])
const input = ref('')

const addTodo = () => {
  if (!input.value) return;
  todos.push({
    tid: new Date().getTime(),
    content: input.value,
    done: false
  })
  input.value = ''
}

</script>
<template>
  <div class="todo-container">
    <header>
      <h1>TodoList</h1>
    </header>
    <div class="input-bar">
      <input type="text" v-model="input">
      <button @click="addTodo">add</button>
    </div>
    <ul class="todo-list">
      <TodoItem v-for="todo in todos" :key="todo.tid" :todo=todo />
    </ul>
  </div>
</template>

<<<<<<< HEAD

<style scoped>
.todo-container {
  position: relative;
}

.todo-container header {
  position: absolute;
  left: 0;
  top: 0;
}

.input-bar {
  display: flex;
  justify-content: space-around;
}

.todo-list {

}
</style>
=======
>>>>>>> f6f32cc1d7d16116a6c12bef2b3f9e6cbc383dc3
