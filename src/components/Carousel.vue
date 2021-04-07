<template>
  <section class="carousel">
    <slot></slot>
    <span @click="next" class="arrow arrow__next"><ArrowRight /></span>
    <span @click="prev" class="arrow arrow__prev"><ArrowLeft /></span>
  </section>
</template>
<script>
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

export default {
  components: {
    ArrowLeft,
    ArrowRight,
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
    transition: 0.2s;
    fill: chocolate;
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
}
img {
  margin-left: 60px;
  @media screen and (max-width: 1220px) {
    margin-left: 50px;
  }
}
</style>