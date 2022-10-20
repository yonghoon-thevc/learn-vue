<template>
  <div>
    {{ str }}
    <!-- <app-header v-bind:프롭스속성이름=""></app-header> -->
    <app-header v-bind:propsdata="str" @renew="renewStr"></app-header>
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
  methods: {
    renewStr: function () {
      this.str = "hello";
    },
  },
};
</script>
