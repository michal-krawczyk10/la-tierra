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
          another photo
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import { randomImg } from "../images";
import { images } from "../images";

export default {
  name: "Pics",
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
      console.log(this.location);
    },
  },
};
</script>

<style lang="scss">
.pic {
  margin: auto;
  width: 80vw;
  &__container {
    display: flex;
    width: 100%;
  }
  &__img {
    width: 70%;
    max-width: 800px;
    margin-right: 2rem;
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
  }
  &__text {
    width: 100%;
    text-align: justify;
  }
}
.btn {
  padding: 1rem;
  font-size: 1rem;
  font-family: var(--paprika);
  background: var(--main);
  color: var(--op-main);
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 1px 2px;
  &__random {
    margin: 1rem 1rem 1rem 0;
    max-width: 160px;
    align-self: flex-start;
    &:hover {
      background: var(--lite-main);
      cursor: pointer;
      outline: none;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
