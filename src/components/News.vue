<template>
  <div class="news">
    <div class="about" v-for="i in 1" :key=i>
    <h3> {{ name }} </h3>
    <img src="../assets/s_sorry.png">
    <p> {{ text1 }} <br> {{ text2 }} <br> {{ text3 }} </p> <p> {{ text4 }} </p>
    <br><a href="https://drive.google.com/open?id=1Kr5maahjRX4ua_xR9Q0Hg7eDv2sOhsSk">紹介スライドへ飛びます</a>
  </div>
  </div>
</template>
<script>
export default {
  name: 'News',
  data () {
    return {
      name: '工事中',
      text1: 'ここには，公にやってきたことを掲載します',
      text2: 'ライブの出演，アプリ開発，インターン',
      text3: 'その他達成したことなどなど...',
      text4: '一先ず、経歴のわかるスライドを置いておきます'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.profile {
  text-align: center;
}

div.about {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: #222222;
}

p {
  width: 90%;
  display: inline-block;
  text-align: center;
}

</style>
