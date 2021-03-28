<template>
  <h2>random picture</h2>
  <div class="pic">
    <img v-bind:src="image" alt="photo taken in {{ location }}" />
  </div>
</template>

<script>
import { randomImg } from "../images";
export default {
  name: "Pics",
  data() {
    return {
      image: randomImg.imgUrl,
      desc: randomImg.imgDesc,
      location: randomImg.imgLocal,
    };
  },
};
</script>

<style lang="scss" scoped>
.pic {
  
  width: 80%;
  & > img {
    width: 100%;
    max-height: 80%;
  }
}
</style>
