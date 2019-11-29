<template>
  <div class="tab">
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'home', path: '/' },
        { title: 'profile', path: '/profile' },
        {title: 'more', path: '/more'},
        {title: 'links', path: '/links'}
      ]
    }
  }
}
</script>

<style scoped>

.tab{
  background-color: #FE2E64;
  position: relative;
  width: "device-width";
}

ol {
  margin-left: auto;
  margin-right: auto;
  width: 480px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  width: "device-width";
}

li {
  width: 100px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: #FE2E64;
  border-radius: 8px;
  width: "device-width";
}

li:hover {
  opacity: 0.4;
}

a {
  position: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

</style>
