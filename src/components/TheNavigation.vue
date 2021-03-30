<template>
  <nav class="side-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Set1">Set1</router-link>
    <router-link to="/Set2">Set2</router-link>
    <router-link to="/Set3">Set3</router-link>
    <router-link to="/Set4">Set4</router-link>
  </nav>
</template>

<style lang="scss" scoped>
.side-nav {
  display: flex;
  flex-direction: column;
  & a.router-link-exact-active {
    color: pink;
  }
}
</style>