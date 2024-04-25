<template>
  <div class="LyricViewComponent">
    <button @click="OnSearchAnotherMusic()">Search new song!</button> <br><br>
    <div v-if="lyric != ''">
      <h2>{{ songName }} <br><br> by <br><br>{{ artistName }}</h2>
      <pre><h1>{{ lyric }}</h1></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LyricViewComponent',
  data() {
    return {
      artistName: '',
      songName: '',
      lyric: '',
    }
  },
  mounted() {
    this.artistName = this.$route.query.artistName.toUpperCase()
    this.songName = this.$route.query.musicName.toUpperCase()
    this.lyric = this.$route.query.lyrics
  },
  methods:{
    OnSearchAnotherMusic(){
      this.$router.push({ path: '/musicForm'});
    }
  }
}
</script>