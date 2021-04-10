<template>
  <ul class="frame">
    <li
      class="item"
      :style="{ 'background-image': 'url(' + item.exampleImg + ')' }"
      v-for="item in images"
      v-bind:key="item.setId"
    >
      <router-link :to="item.setName">
        <div class="item__textbox">
          <h3 class="item__title">{{ item.setName }}</h3>
          <p class="item__text">{{ item.setDesc }}</p>
        </div></router-link
      >
    </li>
  </ul>
</template>

<script>
import { images } from "../images";

export default {
  name: "Frame",
  components: {
    Set,
  },
  data() {
    return {
      images,
    };
  },
};
</script>

<style lang="scss" scoped>
.frame {
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  width: 80%;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 480px) {
    width: 80%;
  }
}
.item {
  width: 40%;
  max-width: 500px;
  height: 300px;
  margin: 2rem;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 1024px) {
    margin: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }

  &__textbox {
    height: 100%;
    background-color: var(--main);
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    transition: 0.4s;
    border-radius: 8px;
    @media screen and (max-width: 1024px) {
      opacity: 0.75;
      & > h3,
      p {
        color: #fff;
      }
    }
    &:hover {
      cursor: pointer;
      opacity: 0.85;
    }
    &:hover > h3,
    p {
      color: #fff;
    }
  }
  &__title,
  &__text {
    font-size: 1.2rem;
    margin: 1rem;
    transition: 0.4s;
  }
}
</style>

