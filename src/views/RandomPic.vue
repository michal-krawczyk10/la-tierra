<template>
  <article class="pic">
    <div class="pic__container">
      <img
        class="pic__img"
        v-bind:src="image"
        alt="photo taken in {{ location }}"
      />
      <div class="pic__textbox">
        <h3 class="pic__loc">{{ location }}</h3>
        <p class="pic__text">{{ desc }}</p>
        <button class="btn btn__random" v-on:click="anotherImg()">
          draw another
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import { randomImg } from "../images";
import { images } from "../images";

export default {
  name: "RandomPic",
  data() {
    return {
      image: randomImg.imgUrl,
      desc: randomImg.imgDesc,
      location: randomImg.imgLocal,
    };
  },
  methods: {
    anotherImg() {
      const randomSet = images[Math.floor(Math.random() * images.length)];
      const randomPics = randomSet.pics;
      const randomImg =
        randomPics[Math.floor(Math.random() * randomPics.length)];
      this.image = randomImg.imgUrl;
      this.desc = randomImg.imgDesc;
      this.location = randomImg.imgLocal;
    },
  },
};
</script>

<style lang="scss" scoped>
.pic {
  margin: auto;
  width: 80vw;
  @media screen and (max-width: 1024px) {
    width: 90vw;
  }

  &__container {
    display: flex;
    width: 100%;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }
  &__img {
    width: 70%;
    max-width: 800px;
    margin-right: 2rem;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (min-width: 1440px) {
      margin-left: 8rem;
      margin-right: 4rem;
    }
  }
  &__textbox {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  &__loc {
    width: 100%;
    margin: 1rem 0;
    @media screen and (max-width: 1024px) {
      margin: 1rem 0 0 1rem;
    }
  }
  &__text {
    width: 100%;
    text-align: left;
    @media screen and (max-width: 1024px) {
      margin: 0 0 0 1rem;
    }
  }
}
.btn__random {
  margin: 1rem 1rem 1rem 0;
  width: 160px;
  align-self: flex-start;
  height: 2rem;
  @media screen and (max-width: 1024px) {
    align-self: center;
  }
}
</style>
