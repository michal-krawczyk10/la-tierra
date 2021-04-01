<template>
  <div class="container">
    <SideNav />
    <carousel v-on:next="next" v-on:prev="prev">
      <carousel-slide
        v-for="(slide, index) in slides"
        :key="slide.imgId"
        :index="index"
        :visibleSlide="visibleSlide"
        :direction="direction"
      >
        <article class="slide">
          <img :src="slide.imgUrl" />
          <h3>{{slide.imgLocal}}</h3>
        </article>
      </carousel-slide>
    </carousel>
  </div>
</template>
<script>
import SideNav from "@/components/SideNav";
import { images } from "../images";
import Carousel from "../components/Carousel.vue";
import CarouselSlide from "../components/CarouselSlide.vue";

export default {
  components: {
    SideNav,
    Carousel,
    CarouselSlide,
  },
  data() {
    return {
      images,
      slides: images[0].pics,
      visibleSlide: 0,
      direction: "left",
    };
  },
  computed: {
    slidesLength() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLength - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      this.direction = "left";
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLength - 1;
      } else {
        this.visibleSlide--;
      }
      this.direction = "right";
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  width: 80vw;
  margin: 0 auto;
  border: 1px solid chocolate;
}
// .slide {
// }

</style>