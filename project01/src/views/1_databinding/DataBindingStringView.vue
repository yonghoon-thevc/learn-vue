<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'NAME TEST',
      message: 'Welcome'
      // arr: ['test1', 'test2', 'test3']
    }
  }
}
</script>

<!-- 전체 적용이 아닌 해당 스코프 내에서 사용할 style -->
<style scoped>
.text-red {
  color: red;
}
</style>
