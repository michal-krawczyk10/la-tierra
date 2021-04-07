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
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
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
  border: 1px dotted blue;
}
.arrow {
  width: 60px;
  &:hover {
    cursor: pointer;
  }
  &:hover svg path {
    transition: 0.2s;
    fill: chocolate;
  }
  &__next {
    position: absolute;
    top: calc(150px);
    left: 860px;
    padding-left: 16px;
  }

  &__prev {
    position: absolute;
    top: 150px;
    left: 0;
  }
}
</style>