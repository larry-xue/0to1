<script setup>
const { todo } = defineProps(['todo'])
</script>

<template>
  <li>
    <span>{{ todo.content }}</span>
  </li>
</template>