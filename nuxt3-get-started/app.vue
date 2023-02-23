<template>
  <div>
    <a @click="view('home')">Home</a>
    <a @click="view('counter')">Counter</a>
    
    <HomeWelcome v-if="page === 'home'" />
    <Counter v-if="page === 'counter'" />
    
    <!-- <button @click="toggle">Toggle</button> -->
    <!-- <div v-if="MyComponent === 'welcome'">
      <HomeWelcome />
    </div>
    <Counter v-else /> -->
    <!-- <component :is="MyComponent" /> -->
  </div>
</template>

<script setup>
// const MyComponent = ref(resolveComponent('Counter'));
// const MyComponent = ref('counter');

// const toggle = () => {
//   MyComponent.value = 'welcome';
// }
const page = ref('home')
const view = (name) => {
  page.value = name
}
</script>