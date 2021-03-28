<template>
  <Set />
</template>

<script>
import Set from "./Set";


export default {
  name: "Frame",
  components: {
    Set,
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

