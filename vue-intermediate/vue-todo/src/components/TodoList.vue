<template>
  <div>
    <ul>
      <li v-for="todoItem in todoItems" v-bind:key="todoItem">
        {{ todoItem }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  // Vue 인스턴스가 생성될 때 호출, React useEffect와 비슷
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i += 1) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  methods: {},
};
</script>
