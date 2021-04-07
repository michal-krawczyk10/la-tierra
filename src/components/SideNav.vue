<template>
  <nav class="sidenav">
    <router-link class="sidenav__item" to="/">Home</router-link>
    <router-link class="sidenav__item" to="/Animals">Animals</router-link>
    <router-link class="sidenav__item" to="/Landscapes">Landscapes</router-link>
    <router-link class="sidenav__item" to="/People">People</router-link>
    <router-link class="sidenav__item" to="/Cities">Cities</router-link>
  </nav>
</template>
<script>
export default {
  name: "SideNav",
};
</script>

<style lang="scss" scoped>
.sidenav {
  border-left: 4px solid pink;
  font-size: 1.4rem;
  width: 15%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1220px) {
    width: 17%;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
  & a.router-link-exact-active {
    color: rgb(193, 192, 255);
    padding-left: 1rem;
    box-shadow: 0 4px 0 0 pink;
  }
  &__item {
    padding: 0.6rem 0.4rem 0.2rem;
    transition: 0.4s;
    width: 100px;
    &:hover {
      padding-left: 1rem;
      box-shadow: 0 4px 0 0 pink;
    }
  }
}
</style>