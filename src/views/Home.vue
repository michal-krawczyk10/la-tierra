<template>
  <div class="container"><Frame /></div>
</template>

<script>

import Frame from "../components/Frame";

export default {
  name: "Home",
  components: {
    Frame,
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>