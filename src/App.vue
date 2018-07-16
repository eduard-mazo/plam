<template lang='pug'>
  #app
    img(src='dist/logo.png')
    h1 PalM
    select(v-model="selCountry")
      option(v-for="name in names" v-bind:value="name.name" :key='name.id') {{name.id}}
    button(@click="jsons") hola
    spinner(v-show='loading')
    ul
      artist(v-for="artist in artists" :artist="artist" :key='artist.mbid')
</template>

<script>
import Artist from "./components/Artist.vue";
import getArtist from "./api/index.js";
import getCurrency from "./api/index2.js";
import json from "./api/names.json";
import Spinner from "./components/Spinner.vue";

export default {
  name: "app",
  data() {
    return {
      artists: [],
      names: [],
      selCountry: "spain",
      loading: true
    };
  },
  methods: {
    jsons() {},
    refreshArtist() {
      const self = this;
      this.loading = true;
      this.artists = [];
      getArtist(this.selCountry).then(artist => {
        self.artists = artist;
        self.loading = false;
      });
    }
  },
  components: {
    Artist: Artist,
    Spinner: Spinner
  },
  mounted() {
    const self = this;
    this.refreshArtist();
    // getCurrency().then(artist => {
    //   self.artists = artist;
    // });
    json.names.forEach(element => {
      self.names.push(element);
    });
  },
  watch: {
    selCountry() {
      this.refreshArtist();
    }
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
