<template>
  <ul class="frame">
    <li
      class="item"
      :style="{ 'background-image': 'url(' + item.exampleImg + ')' }"
      v-for="item in image"
      v-bind:key="item.setId"
    >
      <div class="item__textbox">
        <h3 class="item__title">{{ item.setName }}</h3>
        <p class="item__text">{{ item.setDesc }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
// import Set from "./Set";
import { images } from "../images";

export default {
  name: "Frame",
  components: {
    Set,
  },
  data() {
    return {
      image: images,
    };
  },
};
</script>

<style lang="scss" scoped>
.frame {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  width: 80%;
}
.item {
  width: 45%;
  max-width: 600px;
  height: 300px;
  margin: 1rem;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &__textbox {
    height: 100%;
    background-color: rgba(163, 163, 163, 0.246);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    border-radius: 8px;
    &:hover {
      background-color: rgba(121, 121, 121, 0.876);
    }
    &:hover > h3 {
      color: #fff;
    }
    &:hover > p {
      color: #fff;
    }
  }
  &__title {
    margin: 1rem;
    transition: 0.4s;
    color: rgba(255, 255, 255, 0);
  }
  &__text {
    margin: 1rem;
    transition: 0.4s;
    color: rgba(255, 255, 255, 0);
  }
}
</style>

