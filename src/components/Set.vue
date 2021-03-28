<template>
  <div class="set"><img v-bind:src="image" alt="s" />{{ image }}</div>
</template>

<script>
import images from "../images";

export default {
  name: "Set",
  data() {
    return {
      image: images[Math.floor(Math.random() * images.length)].url,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
