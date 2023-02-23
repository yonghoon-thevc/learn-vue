<template>
  <div>
    <button @click="increment">increment</button>
    <p>{{ count }}</p>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script setup>
const count = ref(0);

const increment = () => {
  count.value++;
}
const decrement = () => {
  count.value--;
}
</script>