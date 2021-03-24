<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Paprika&display=swap");

//fonts
$paprika: "Paprika", cursive;
$os: "Open Sans", sans-serif;
//colors

*,
*:before,
*:after {
  box-sizing: inherit;
  text-decoration: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;
  font-family: $paprika;
  line-height: 1.5;
  font-size: 16px;
}
</style>
