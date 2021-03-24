<template>
  <header class="header">
    <div class="logo">
      <h1 class="logo__title">mi calles</h1>
      <h2 class="logo__subtitle">the way I see the world</h2>
    </div>
    <nav class="nav" id="nav">
      <router-link to="/">Home</router-link> |
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
    color: blue;
    align-self: flex-start;
  }
  &__subtitle {
    align-self: flex-end;
  }
}
.nav {
  font-size: 16px;
}
</style>
