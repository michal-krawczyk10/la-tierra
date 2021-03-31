<template>
  <button @click="goBack">go back</button>
</template>
<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>