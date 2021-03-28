<template>
  <div class="frame"></div>
  <Set />
</template>

<script>
import Set from "./Set";
import images from "../images";

export default {
  name: "Frame",
  components: {
    Set,
  },
  data() {
    image: "";
  },
};
</script>

<style lang="scss" scoped>
.frame {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 600px;
  border: 1px solid red;
}
.img {
  height: 100px;
  width: 100px;
}
</style>

