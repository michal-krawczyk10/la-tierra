<template>
  <nav class="sidenav">
    <router-link class="sidenav__item" to="/">Home</router-link>
    <router-link class="sidenav__item" to="/Set1">Set1</router-link>
    <router-link class="sidenav__item" to="/Set2">Set2</router-link>
    <router-link class="sidenav__item" to="/Set3">Set3</router-link>
    <router-link class="sidenav__item" to="/Set4">Set4</router-link>
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
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & a.router-link-exact-active {
    color: rgb(193, 192, 255);
    padding-left: 1rem;
  }
  &__item {
    padding: 0.6rem 0.4rem;
    transition: 0.4s;
    width: 100px;
    &:hover {
    padding-left: 1rem;
    border-bottom: 2px solid pink;
    
}
    
}
}
</style>