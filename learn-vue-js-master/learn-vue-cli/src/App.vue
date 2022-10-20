<template>
  <div>
    {{ str }}
    <app-header></app-header>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    "app-header": AppHeader,
  },
  data() {
    return {
      str: "hi",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
