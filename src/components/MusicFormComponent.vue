<template>
  <div class="MusicFormComponent">
    <p>What is the name of the song and artist?</p>
    <input type="text" v-model="artist" placeholder="Artist name..." /><br><br>
    <input type="text" v-model="musicName" placeholder="Song name..." /><br><br>
    <button @click="OnSearchMusic(artist, musicName)">Search Lyric</button> <br><br>
    <div v-if="error != ''">
      <pre><h1>{{ error }}</h1></pre>
    </div>
    <div v-if="samePageResult">
      <router-view />
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'MusicFormComponent',
  data() {
    return {
      samePageResult: false,
      artist: '',
      musicName: '',
      error: '',
    }
  },
  methods: {
    OnSearchMusic(artistName, musicName) {
      axios.get('https://api.lyrics.ovh/v1/' + this.artist + '/' + this.musicName)
      .then(response => {
        this.$router.push({ path: '/lyricView', query: { artistName: artistName, musicName: musicName,lyrics: response.data.lyrics } });
      })
      .catch(error => {
        console.log(error)
        if (error.response.status == 404) {
          this.error = 'Song not found review the artist name and song name and try again!'
        } else {
          this.error = 'Error accessing the API -> ' + error.message
        }
      });
    },
  },
  props: {
  }
}
</script>