<template>
  <div class="profile">
    <div class="about" v-for="i in 1" :key=i>
    <h3> {{ name }} </h3>
    <img src="../assets/Mugitya.png">
    <p> {{ text1 }} </p>
    <p> {{ text2 }} </p>
    <p> {{ text3 }} </p>
    <br><a href="https://www.youtube.com/watch?v=4TK7c3LQHH4">今年度のライブ動画はこちら</a>{{ text4 }}
  </div>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: 'PATO',
      text1: '娯楽大学生。友人に誘われたサークルで音楽に没頭し、ボーカルを始める。',
      text2: '主にロックミュージックを中心に、やや高音の曲を担当する事が多い。',
      text3: '趣味は音楽、ゲーム、アニメ、Youtube。',
      text4: ' (newsに載せる予定)'
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
