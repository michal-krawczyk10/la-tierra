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
  --main: #440d3d;
  --lt-main: #e63462;
  --op-main: #fbfbfb;
  // media queries
  // --xl: 1600px;
  // --lg: 1440px;
  // --md: 1024px;
  // --sm: 768px;
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
  font-family: $montserrat;
  font-weight: 600;
  line-height: 1.4;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  background: var(--op-main);
  
  overflow-x: hidden;
}
#app {
  display: flex;
  flex-direction: column;
}
.content {
  min-height: calc(100vh - 4rem);
}
img {
  max-width: 800px;
  @media screen and (max-width: 1220px) {
    width: 640px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
.nav {
  & a.router-link-exact-active {
    color: var(--lt-main);
  }
}
.btn {
  font-size: 1rem;
  background: var(--main);
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: 0.3s;
  &:hover {
    background: var(--lt-main);
    cursor: pointer;
    outline: none;
  }
  &:focus {
    outline: none;
  }
}
</style>
