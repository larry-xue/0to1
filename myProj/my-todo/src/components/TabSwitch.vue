<template>
    <nav>
        <router-link to="/">Todos</router-link>
        <router-link to="/done">Done</router-link>
        <router-link to="/delay">Delay</router-link>
    </nav>
</template>
<script>
export default {
    name: 'TabSwitch',
    data() {
        return {}
    }
}
</script>