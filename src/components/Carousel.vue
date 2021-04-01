<template>
  <section>
    <div class="carousel">
      <slot></slot>
      <button @click="next" class="next">next</button>
      <button @click="prev" class="prev">prev</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
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
  width: 300px;
  height: 300px;
  overflow: hidden;
  .next {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .prev {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>