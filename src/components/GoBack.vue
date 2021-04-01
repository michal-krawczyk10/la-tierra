<template>
  <div class="back" v-show="!homePage">
    <button class="btn btn__back" @click="goBack">go back</button>
  </div>
</template>
<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
  computed: {
    homePage() {
      if (this.$route.path == "/" || this.$route.path == "/home") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.back {
  width: 70%;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: flex-end;
}
.btn__back {
  justify-content: flex-end;
  background: none;
  color: var(--main);
  &:hover {
    background: none;
    color: green;
  }
}
</style>