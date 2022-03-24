<template>
  <div id="app">
    <TabSwitch></TabSwitch>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TodoView from './view/TodoView.vue';
import TabSwitch from './components/TabSwitch.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    // TodoView,
    TabSwitch
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$myStore);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
