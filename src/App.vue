<template lang='pug'>
  #app
    img(src='./assets/logo.png')
    h1 PalM
    button(@onclick="jsons") hola
    ul
      artist(v-for="artist in artists" :artist="artist" :key='artist.id')
</template>

<script>
import Artist from "./components/Artist.vue";
import getArtist from "./api/index.js";
import getCurrency from "./api/index2.js";
import json from "./api/names.json";

export default {
  name: "app",
  data() {
    return {
      artists: [],
      names: []
    };
  },
  methods: {
    jsons: function() {
     console.log('hola');
     
     // json.forEach(element => {});
    }
  },
  components: {
    Artist: Artist
  },
  mounted: function() {
    const self = this;
    getCurrency().then(artist => {
      self.artists = artist;
    });
    // getArtist().then(artist => {
    //   self.artists = artist;
    // });
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red !important;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
