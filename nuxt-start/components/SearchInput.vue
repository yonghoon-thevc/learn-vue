<template>
  <div>
    <input
      type="text"
      :value="searchKeyword"
      @input="$emit('input', $event.target.value)"
    />
    <button type="button" @click="$emit('search')">Search</button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: () => '',
    },
  },
};
</script>
