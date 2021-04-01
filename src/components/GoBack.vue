<template>
  <button class="btn btn__back" @click="goBack">go back</button>
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
