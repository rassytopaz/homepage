<template>
  <div class="more">
    <div class="about" v-for="i in 1" :key=i>
    <h3> {{ name }} </h3>
    <img src="../assets/pic_more.png" width="device-width">
    <p> {{ text1 }} <br> {{ text2 }} <br> {{ text3 }} <br> {{ text4 }} </p>
    <br><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQByWremPZeuRylKYc-svWjkBhJTs9xVrteT1-5APPQNpbGn04aKits08v22Jg5RQ/embed?start=false&loop=false&delayms=3000" frameborder="0" width=100% height=280 allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  </div>
  </div>
</template>
<script>
export default {
  name: 'More',
  data () {
    return {
      name: 'MORE ABOUT',
      text1: 'profileでは書けない詳細を掲載します',
      text2: '遍歴や在り方、開発経験などなど',
      text3: 'そんな詳細をスライドにまとめているので、',
      text4: 'ぜひご確認ください……'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.more {
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
