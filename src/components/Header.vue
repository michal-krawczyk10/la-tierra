<template>
  <header class="header">
    <div class="logo">
      <router-link class="logo__box" to="/"
        ><h1 class="logo__title">la Tierra</h1>
        <h2 class="logo__subtitle">- pictures from Earth</h2></router-link
      >
    </div>
    <nav class="nav" id="nav" v-bind:class="{ nav__show: isActive }">
      <router-link to="/randompic" @click="isActive = !isActive"
        >random photo</router-link
      >
      <span class="break">|</span>
      <router-link to="/about" @click="isActive = !isActive">about</router-link>
    </nav>
    <div class="ham" @click="isActive = !isActive">
      <span class="ham__line"></span>
      <span class="ham__line"></span>
      <span class="ham__line"></span>
    </div>
  </header>
  <GoBack /><span
    v-bind:class="{ background: isActive }"
    @click="isActive = !isActive"
  ></span>
</template>

<script>
import GoBack from "../components/GoBack";
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    };
  },
  components: { GoBack },
};
</script>

<style lang="scss" scoped>
* {
  transition: 0.3s ease-in-out;
}

.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 2rem auto 0.4rem;
  width: 70vw;
  @media screen and (max-width: 1220px) {
    width: 80%;
    margin: 2rem auto 0;
  }
  @media screen and (max-width: 1024px) {
    margin: 2rem auto 2rem;
  }
}
.logo {
  display: flex;
  flex-direction: column;
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 240px;
  }
  &__box {
    &:hover > * {
      color: var(--lt-main);
    }
    &.router-link-exact-active > * {
      color: var(--lt-main);
    }
    & > * {
      color: var(--main);
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }
  &__title {
    text-align: left;
  }
  &__subtitle {
    text-align: center;
    @media screen and (max-width: 768px) {
      text-align: left;
      font-size: 1rem;
    }
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
    z-index: 20;
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
    @media screen and (max-width: 768px) {
      position: absolute;
      right: 0;
    }
  }
}
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  z-index: -10;
  opacity: 0;
  @media screen and (max-width: 768px) {
    display: inline-block;
    z-index: 10;
    background: var(--lt-main);
    opacity: 0.5;
  }
}
.ham {
  position: absolute;
  top: 2rem;
  right: 3rem;
  width: 60px;
  height: 48px;
  display: none;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    right: 1rem;
  }
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
