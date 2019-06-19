import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import Profile from '@/components/Profile'
import Link from '@/components/Link'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/news',
      name: 'News',
      component: News
    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },

    //     ②profile
    {
      path: '/links',
      name: 'Links',
      component: Link
    }
  ]
})
