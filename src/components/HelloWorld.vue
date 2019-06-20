<template>
  <div class="hello">
    <img src="../assets/s_topD.png">
    <h1>{{ msg }}</h1>
    <h2>RockVocal,NetRap,Lyricist,ProgrammerEgg</h2>
    <hr size="1" width="34%" align="center" color="#2C2370" noshade>
    <h3>-Collaboration Song-</h3>
    <div class="sc">
      <iframe width="32%" height="250" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/482786238&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    <h3>-Last Event-</h3>
    <div id="container">
      <span>
        <Tweet :id="'1033904172511285248'"></Tweet>
      </span>
    </div>
  </div>
</template>

<script>

// import Vue from 'vue'
import { Tweet } from 'vue-tweet-embed'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'PATO MUG1_tea'
    }
  },
  components: {
    'Tweet': Tweet
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color:white
}
h2 {
  font-weight: normal;
  font-size: medium;
  color:gray;
}
h3 {
  font-weight: normal;
  font-size: medium;
  color:#FE2E64;
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
#container {
  max-width: 400px;
  max-height: 5px;
  margin: 0 auto;
}
</style>
