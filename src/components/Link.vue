i<template>
  <div class="link">
    <div class="content" v-for="i in 1" :key=i>
    <h3> {{ name1 }} </h3>
    <a href="https://twitter.com/Rassy_Topaz"><img src="../assets/Twitter2.png" alt="Pato's Twitter LINK"></a>
    <p> {{ text1 }} </p>
    <hr size="1" width="50%" align="center" color="#2C2370" noshade>
    <h3> {{ name2 }} </h3>
    <a href="https://soundcloud.com/pat0mug1-tea"><img src="../assets/soundcloud.png" alt="Pato's SOUNDCLOUD LINK"></a>
    <p> {{ text2 }} </p>
    <hr size="1" width="50%" align="center" color="#2C2370" noshade>
    <h3> {{ name3 }} </h3>
    <a href="https://github.com/RassyTopaz"><img src="../assets/github.png" alt="Pato's GitHub LINK"></a>
    <p> {{ text3 }} </p>
    <hr size="1" width="50%" align="center" color="#2C2370" noshade>
    <h3> {{ name4 }} </h3>
    <a href="https://www.clubdam.com/app/damtomo/member/info/Profile.do?damtomoId=NTI1NDQzMDk"><img src="../assets/DAMtomo.png" alt="Pato's DAM_tomo LINK"></a>
    <p> {{ text4 }} </p>
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
      text1: 'PATOのメインのTwitterです．そこそこの頻度で日常を更新します．ネタや動物やスイーツのRTがやたらと多いです．',
      text2: 'PATOのSOUNDCLOUDです．まだコラボした音源しかありませんが，いつか更新したいとは思います．',
      text3: 'このサイトのソースコードなどが置かれるGitHubです．今はまだ殆ど置いてありませんが，今後増やしていけるよう頑張ります．',
      text4: '現状，ぱとの名義で自由に紹介できる数少ない音源置き場です．カラオケです．おまけぐらいに見てください．更新頻度は高いです．DAMともボーカルの採用曲もあります．'
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
  width: 30%;
}

h3 {
  color: #FE2E64;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>
