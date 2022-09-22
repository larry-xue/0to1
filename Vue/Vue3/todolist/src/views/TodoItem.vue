<script setup>
const { todo } = defineProps(['todo'])
</script>

<template>
  <li class="todoItem">
    <input type="radio">
    <span>{{ todo.content }}</span>
  </li>
</template>

<style scoped>
  .todoItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>