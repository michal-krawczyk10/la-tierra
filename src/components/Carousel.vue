<template>
  <section class="carousel">
    <slot><span class="img-cover"></span></slot
    ><span class="arrows">
      <span @click="next" class="arrow arrow__next"><ArrowRight /></span>
      <span @click="prev" class="arrow arrow__prev"><ArrowLeft /></span
    ></span>
    <span class="arrows__sm">
      <span @click="prev" class="arrow__sm"><ArrowLeftSm /></span>
      <span @click="next" class="arrow__sm"><ArrowRightSm /></span
    ></span>
  </section>
</template>
<script>
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import ArrowLeftSm from "../components/ArrowLeftSm";
import ArrowRightSm from "../components/ArrowRightSm";

export default {
  components: {
    ArrowLeft,
    ArrowRight,
    ArrowLeftSm,
    ArrowRightSm,
  },
  //for global keyboard event:
  mounted() {
    document.addEventListener("keyup", this.keyUp);
  },
  //;
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
    keyUp() {
      if (event.keyCode === 37) {
        this.prev();
      } else if (event.keyCode === 39) {
        this.next();
      }
    },
  },
};
</script>
<style lang="scss">
.carousel {
  position: relative;
  width: 920px;
  height: 700px;
  overflow: hidden;
  @media screen and (max-width: 1220px) {
    width: 740px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
.arrows {
  @media screen and (max-width: 768px) {
    display: none;
  }
  &__sm {
    position: absolute;
    top: 580px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
}
.arrow {
  width: 60px;
  height: 640px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1220px) {
    height: 480px;
    width: 50px;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover svg path {
    transition: 0.3s;
    fill: var(--lt-main);
  }
  &__next {
    position: absolute;
    left: 860px;
    padding-left: 16px;
    @media screen and (max-width: 1220px) {
      padding-left: 8px;
      left: 690px;
    }
  }
  &__prev {
    position: absolute;
    left: 0;
  }
  &__sm {
    min-width: 140px;
    &:hover {
      cursor: pointer;
    }
    &:hover svg path {
      transition: 0.2s;
      fill: var(--lt-main);
    }
  }
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