<template>
  <div class="content"><Header /> <router-view /></div>
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
  --paprika: "Paprika", cursive;
  --main: #090446;
  --lite-main: #247ba0;
  --op-main: #ddfff7;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  text-decoration: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: var(--main);
}

body {
  box-sizing: border-box;
  font-family: $paprika;
  line-height: 1.4;
  font-size: 16px;
  display: flex;
  flex-direction: column;
}
#app {
  display: flex;
  flex-direction: column;
}
.content {
  min-height: calc(100vh - 3rem);
}
</style>
