<template>
    <div class="custom-input">
        <input 
            @input="$emit('vmodel', $event.target.value)" 
            :value="inputD" 
            type="text">
    </div>
</template>

<script>

export default {
    model: {
        prop: 'inputD',
        event: 'vmodel',
    },
    props: ['inputD'],
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>