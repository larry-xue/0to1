<script setup>
import { reactive, ref } from "vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const dynamicDirectives = ref("click");
const testRef = ref({
  foo: ref({
    age: 19,
  }),
});
const myFunc = () => {
  console.log("Hello azoux!");
  console.log(dynamicDirectives);
};
const arr = reactive(["reading", "look!", "sleepooloop!"]);
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <div @[dynamicDirectives]="myFunc">{{ dynamicDirectives }}</div>
  <div>{{ testRef.foo + 1 }}</div>
  <p>
    hahahha!
    <template v-for="(item, key) in arr">
      <div>key: {{ key }}</div>
      <div>item: {{ item }}</div>
    </template>
  </p>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
