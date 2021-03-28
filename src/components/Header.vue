<template>
  <header class="header">
    <div class="logo">
      <router-link to="/"
        ><h1 class="logo__title">mi calles</h1>
        <h2 class="logo__subtitle">pictures taken on planet Earth</h2></router-link
      >
    </div>
    <nav class="nav" id="nav">
      <router-link to="/pics">random picture</router-link> |
      <router-link to="/map">planet map</router-link>
      |
      <router-link to="/about">about</router-link>
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
  width: 70vw;
}
.logo {
  display: flex;
  flex-direction: column;
  width: 400px;

  &__title {
    text-align: left;
    color: var(--main);
  }
  &__subtitle {
    text-align: center;
    color: var(--main);
  }
}
.nav {
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  & > a {
    padding: 0 0.5em;
}
}
</style>
