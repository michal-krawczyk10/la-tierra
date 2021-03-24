<template>
  <header class="header">
    <div class="logo">
      <router-link to="/"
        ><h1 class="logo__title">mi calles</h1>
        <h2 class="logo__subtitle">the way I see the world</h2></router-link
      >
    </div>
    <nav class="nav" id="nav"><router-link to="/map">Map</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 1rem auto;
  width: 80vw;
}
.logo {
  display: flex;
  flex-direction: column;
  width: 50%;

  &__title {
    align-self: flex-start;
    color: var(--main);
  }
  &__subtitle {
    align-self: flex-end;
    color: var(--main);
  }
}
.nav {
  font-size: 16px;
}
</style>
