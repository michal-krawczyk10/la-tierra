<template>
  <nav class="sidenav">
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
  border-left: 4px solid var(--main);
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
    color: var(--lt-main);
    padding-left: 1rem;
    box-shadow: 0 4px 0 0 var(--lt-main);
  }
  &__item {
    padding: 0.6rem 0.4rem 0.2rem;
    transition: 0.4s;
    width: 100px;
    &:hover {
      padding-left: 1rem;
      color: var(--lt-main);
      box-shadow: 0 4px 0 0 var(--lt-main);
    }
  }
}
</style>