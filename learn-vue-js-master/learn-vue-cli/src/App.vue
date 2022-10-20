<template>
  <div>
    {{ str }}
    <!-- <app-header v-bind:프롭스속성이름=""></app-header> -->
    <app-header v-bind:propsdata="str"></app-header>
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
      str: "Header",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
