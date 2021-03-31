<template>
  <div class="container">
    <TheNavigation />
    <section>
      <img v-bind:src="images[0].exampleImg" />
    </section>
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation";
import { images } from "../images";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      images,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  
}

</style>