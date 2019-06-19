<template>
  <div class="news">
    <div class="about" v-for="i in 1" :key=i>
    <h3> {{ name }} </h3>
    <img src="../assets/s_sorry.png">
    <p> {{ text1 }} <br> {{ text2 }} </p>
    <p> {{ text3 }} <br> {{ text4 }} </p>
    <p> {{ text5 }} </p>
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
      text2: 'ライブの出演，アプリの公開，その他達成したことなど',
      text3: '記事タイトルが並び，クリックすると，',
      text4: 'その場に内容が展開されるようにしたいです',
      text5: 'Firebaseでデータを管理します'
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
