<template>
  <article class="pic__container">
    <div class="pic">
      <img v-bind:src="image" alt="photo taken in {{ location }}" />
      <div>
        <h3>{{ location }}</h3>
        <p>{{ desc }}</p>
      </div>
    </div>
    <button v-on:click="anotherImg()">another random photo</button>
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

<style lang="scss" scoped>
.pic {
  width: 80%;
  & > img {
    width: 100%;
  }
}
</style>
