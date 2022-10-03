<script>
export default {
  data() {
    return {
      jsFrameworks: ['Vue.js', 'React.js'],
      backendFramworks: ['Express.js']
    }
  },
  methods: {
    handleChange(tags) {
      this.jsFrameworks = [...tags]
    }
  },
}
</script>

<template>
  <h1>Hello World</h1>
  <div>{{jsFrameworks}}</div>
  <tags-input :selectedTag="jsFrameworks" @change="handleChange" />
  <div>{{backendFramworks}}</div>
  <tags-input :selectedTag="backendFramworks" @change="backendFramworks = [...$event]" />
</template>

<style scoped>
h1 {
  color: blue
}
</style>
