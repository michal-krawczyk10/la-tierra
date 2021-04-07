<template>
  <header class="header">
    <div class="logo">
      <router-link class="logo__box" to="/"
        ><h1 class="logo__title">la tierra</h1>
        <h2 class="logo__subtitle">
          pictures taken on planet Earth
        </h2></router-link
      >
    </div>
    <nav v-bind="{ active: isActive }" class="nav" id="nav">
      <router-link to="/randompic">random pic</router-link>
      <span class="break">|</span>
      <router-link to="/about">about</router-link>
    </nav>
    <span class="ham" @click="isActive = !isActive"
      ><span class="ham__line"></span><span class="ham__line"></span
      ><span class="ham__line"></span
    ></span>
  </header>
  <GoBack />
</template>

<script>
import GoBack from "../components/GoBack";
export default {
  name: "Header",
  data: {
    isActive: false,
  },
  components: { GoBack },
};
</script>

<style lang="scss" scoped>
* {
  transition: 0.3s;
}

.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 2rem auto 0.4rem;
  width: 70vw;
  @media screen and (max-width: 1220px) {
    width: 80%;
    margin: 1rem auto 0;
  }
  @media screen and (max-width: 1024px) {
  }
}
.logo {
  display: flex;
  flex-direction: column;
  width: 400px;
  &__box {
    &:hover > * {
      color: var(--lt-main);
    }
    &.router-link-exact-active > * {
      color: var(--lt-main);
    }
  }
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
  justify-content: flex-end;
  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 0;
    right: -200px;
    width: 200px;
    background: var(--main);
    color: var(--op-main);
    padding: 1em 0;
    border-radius: 0 0 0 16px;
  }
  & > a {
    text-align: center;
    padding: 0 0.5em;
    &:hover {
      color: var(--lt-main);
    }
    @media screen and (max-width: 768px) {
      color: var(--op-main);
      padding: 0.5em 1.5em;
      width: 100%;
      text-align: right;
      &:hover {
        background: var(--lt-main);
        color: var(--op-main);
      }
    }
  }
  &__show {
    right: 0;
  }
}
.ham {
  width: 60px;
  height: 48px;
  display: none;
  flex-direction: column;
  &__line {
    border: 4px solid var(--main);
    border-radius: 4px;
    margin: 4px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
  &:hover {
    cursor: pointer;
    & span {
      border: 4px solid var(--lt-main);
    }
  }
}
.break {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
