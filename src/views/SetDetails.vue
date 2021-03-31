<!-- this doen't work, i'll leave it to find out why later on -->

<template>
  <section>
    <div>
      <h3>{{ image.setName }}</h3>
    </div>
  </section>
</template>
<script>
import { images } from "../images";
export default {
  data() {
    return {
      imageId: this.$route.params.id,
    };
  },
  computed: {
    image() {
      return images.find((image) => image.id === this.imageId);
    },
  },
};
</script>
