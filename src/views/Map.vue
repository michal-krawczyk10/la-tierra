

<template>
  <SideNav />
  <section>
    <h1>map</h1>
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
  </section>
</template>

<script>
// @ is an alias to /src
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  name: "Map",
  components: {
    MglMap,
  },
  data() {
    return {
      accessToken: ACCESS_TOKEN, // your access token. Needed if you using Mapbox maps
      mapStyle: MAP_STYLE, // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
};
</script>
