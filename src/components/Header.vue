<template>
  <header class="header">
    <div class="logo">
      <router-link to="/"
        ><h1 class="logo__title">terra nostra</h1>
        <h2 class="logo__subtitle">
          pictures taken on planet Earth
        </h2></router-link
      >
    </div>
    <nav class="nav" id="nav">
      <router-link to="/randompic">random picture</router-link> |
      <router-link to="/map">planet map</router-link>
      |
      <router-link to="/about">about</router-link>
    </nav>
    <GoBack />
  </header>
</template>

<script>
import GoBack from "../components/GoBack";
export default {
  name: "Header",
  components: { GoBack },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 2rem auto;
  width: 70vw;
  border: 1px solid blue;
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
