<template>
    <li>
        <span>{{ todo.text }}</span>
        <button @click="deleteTodo">delete</button>
    </li>
</template>
<script>
export default {
    name: 'TodoItem',
    props: [ 'todo' ],
    data() {
        return {

        }
    },
    methods: {
        deleteTodo() {
            console.log('in delete todo')
            this.$emit('deleteTodo', this.todo.created);
        }
    },
}
</script>