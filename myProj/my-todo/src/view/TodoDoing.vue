<template>
    <div>
        <ul class="Todos" ref="todoDOM">
            <TodoItem v-for="todo in todoList" :key="todo.created" :todo="todo" @deleteTodo="deleteTodo">
            </TodoItem>
        </ul>
    </div>
</template>
<script>
import TodoItem from '../components/TodoItem.vue';

export default {
    components: {   
        TodoItem,
    },
    data() {
        return {

        }
    },
    computed: {
        todoList: () => this.$store.state.todoList
    }
}
</script>