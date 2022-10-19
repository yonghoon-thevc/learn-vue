<template>
  <div>
    <Test />
    {{ data }}
    hello
    <button @click="getDatas">조회</button>
  </div>
</template>
<script>
import Test from '~/components/Test.vue'
export default {
  components: { Test },
  data() {
    return {
      data: '',
    }
  },
  methods: {
    async getDatas() {
      const data = await this.$axios.get('/app/main')
      console.log(data)
      this.data = data
    },
  },
}
</script>
