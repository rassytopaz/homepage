i<template>
  <div class="link">
    <div class="content" v-for="i in 1" :key=i>
    <h3> {{ name1 }} </h3>
    <a href="https://twitter.com/Rassy_Topaz"><img src="../assets/Twitter2.png" alt="Pato's Twitter LINK"></a>
    <p> {{ text1_1 }} <br> {{ text1_2 }} <br> {{ text1_3 }} </p>
    <hr size="1" width="50%" align="center" color="#2C2370" noshade>
    <h3> {{ name2 }} </h3>
    <a href="https://soundcloud.com/pat0mug1-tea"><img src="../assets/soundcloud.png" alt="Pato's SOUNDCLOUD LINK"></a>
    <p> {{ text2_1 }} <br> {{ text2_2 }} <br> {{ text2_3 }} </p>
    <hr size="1" width="50%" align="center" color="#2C2370" noshade>
    <h3> {{ name3 }} </h3>
    <a href="https://github.com/RassyTopaz"><img src="../assets/github.png" alt="Pato's GitHub LINK"></a>
    <p> {{ text3_1 }} <br> {{ text3_2 }} <br> {{ text3_3 }} </p>
    <hr size="1" width="50%" align="center" color="#2C2370" noshade>
    <h3> {{ name4 }} </h3>
    <a href="https://www.clubdam.com/app/damtomo/member/info/Profile.do?damtomoId=NTI1NDQzMDk"><img src="../assets/DAMtomo.png" alt="Pato's DAM_tomo LINK"></a>
    <p> {{ text4_1 }} <br> {{ text4_2 }} <br> {{ text4_3 }} </p>
  </div>
  </div>

</template>

<script>
export default {
  name: 'Link',
  data () {
    return {
      name1: 'Twitter',
      name2: 'SOUNDCLOUD',
      name3: 'GitHub',
      name4: 'DAM★とも',
      text1_1: 'PATOのメインのTwitterです',
      text1_2: 'そこそこの頻度で日常を更新します．',
      text1_3: 'ネタや動物のRTがやたらと多いです．',
      text2_1: 'PATOのSOUNDCLOUDです．',
      text2_2: 'まだコラボした音源しかありませんが，',
      text2_3: 'いつか更新したいとは思います．',
      text3_1: 'ソースコードが置かれるGitHubです．',
      text3_2: '今はまだ殆ど置いてありませんが，',
      text3_3: '今後増やしていけるよう頑張ります．',
      text4_1: 'カラオケです.',
      text4_2: 'おまけぐらいに見てください.',
      text4_3: 'DAMともボーカルの採用曲もあります．'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.link {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: "device-width";
}

h3 {
  color: #FE2E64;
}

p {
  width: 90%;
  display: inline-block;
  text-align: center;
}

</style>
