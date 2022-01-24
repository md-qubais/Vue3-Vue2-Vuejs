<template>
  <div>
      Name:{{ name }} Age:{{ age }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>