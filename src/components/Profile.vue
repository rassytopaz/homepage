<template>
  <div class="profile">
    <div class="about" v-for="i in 1" :key=i>
      <h3> {{ name }} </h3>
      <img src="../assets/Mugitya.png" width="device-width">
      <p> {{ text1 }} <br> {{ text2 }} <br> {{ text3 }} </p>
      <br><a href="https://www.youtube.com/watch?v=4TK7c3LQHH4">ライブに出演してたり</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: 'PATO',
      text1: '娯楽大学生．サークルで音楽に没頭．',
      text2: 'ロックを中心に，やや高音の曲が多い．',
      text3: '趣味は音楽，ゲーム，Youtube．'
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
  width: "device-width";
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
