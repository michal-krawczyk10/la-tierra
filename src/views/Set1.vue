<template>
  <div class="container">
    <TheNavigation />
    <carousel>
      <carousel-slide v-for="(slide, index) in slides" :key="slide" :index="index">
      <img :src="slide.imgUrl">
 </carousel-slide>
    </carousel>
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation";
import { images } from "../images";
import Carousel from '../components/Carousel.vue';
import CarouselSlide from '../components/CarouselSlide.vue';

export default {
  components: {
    TheNavigation,
    Carousel,
    CarouselSlide,
  },
  data() {
    return {
      images,
      slides: images[0].pics,
      visibleSlide : 0,
    };
  },
};

</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

img {
  width: 100px;
}
</style>