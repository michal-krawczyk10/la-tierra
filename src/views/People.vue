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
          <div class="textbox">
            <h3>{{ slide.imgLocal }}</h3>

          </div>
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
      slides: images[2].pics,
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

<style lang="scss" scoped>
.container {
  display: flex;
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: 1600px) {
    width: 70%;
  }
  @media screen and (max-width: 1440px) {
    width: 90%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

.textbox {
  margin: 0.5rem 0 0 72px;
}

img {
  margin-left: 60px;
  @media screen and (max-width: 1220px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
}
</style>