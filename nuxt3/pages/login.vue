<template>
  <div>
    <h1>Log in to {{ title }}</h1>
    <button>Log in with github</button>
  </div>
</template>

<script setup>
const { title } = useCourse();
</script>
