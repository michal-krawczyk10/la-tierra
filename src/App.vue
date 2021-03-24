<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Paprika&display=swap");

//fonts
$paprika: "Paprika", cursive;
$os: "Open Sans", sans-serif;
//colors
:root {
  --main: #090446;
}
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
  color: var(--main);
  line-height: 1.5;
  font-size: 16px;
}
</style>
