<template>
  <section>
    <div>
      <h3>{{ setId.setName }}</h3>
      <p>{{ setId.setDesc }}</p>
    </div>
  </section>
</template>
<script>
import { images } from "../images";
export default {
  data() {
    return {
      setId: this.$route.params.id,
    };
  },
  computed: {
    item() {
      return images.find((item) => item.id === this.setId);
    },
  },
};
console.log(this.setId);
</script>