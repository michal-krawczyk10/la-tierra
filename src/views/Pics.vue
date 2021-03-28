<template>
  <h1>pics</h1>
  <div class="set"><img v-bind:src="image" alt="s" />{{ image }}</div>
</template>

<script>
import images from "../images";

export default {
  name: "Pics",
  data() {
    return {
      image:
        images[Math.floor(Math.random() * images.length)].set[1].imgUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
