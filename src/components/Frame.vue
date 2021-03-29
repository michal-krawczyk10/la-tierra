<template>
  <div class="frame">
    <ul>
      <li v-for="item in image" v-bind:key="item.setId">
        <div>{{ item.setName }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
// import Set from "./Set";
import { images } from "../images";
console.table(images);
export default {
  name: "Frame",
  components: {
    Set,
  },
  data() {
    return {
      image: images,
    };
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

