<template>
  <section>
    <div v-show="visibleSlide === index" class="carousel-slide">
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  props: ["visibleSlide", "index"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>