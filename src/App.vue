<template>
  <div class="content"><Header /><router-view /></div>
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

//fonts
$paprika: "Paprika", cursive;
$os: "Open Sans", sans-serif;
$montserrat: "Montserrat", sans-serif;
//colors
:root {
  --paprika: "Paprika", cursive;
  --montserrat: "Montserrat", sans-serif;
  --main: #090446;
  --lite-main: #247ba0;
  --op-main: #f8f0fb;
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

body {
  box-sizing: border-box;
  font-family: $montserrat;
  font-weight: 600;
  line-height: 1.4;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  background: var(--op-main);
}
#app {
  display: flex;
  flex-direction: column;
}
.content {
  min-height: calc(100vh - 3rem);
}

.nav {
  & a.router-link-exact-active {
    color: green;
  }
}
.btn {
  font-size: 1rem;
  font-family: var(--paprika);
  background: var(--main);
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: 0.2s;
  &:hover {
    background: var(--lite-main);
    cursor: pointer;
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &__back {
    background: none;
    color: var(--main);
    &:hover {
      background: none;
      color: green;
    }
  }
}
</style>
