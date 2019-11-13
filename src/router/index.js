import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
import More from '@/components/More'
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
      path: '/profile',
      name: 'Profile',
      component: Profile
    },

    {
      path: '/more',
      name: 'More',
      component: More
    },

    //     ②profile
    {
      path: '/links',
      name: 'Links',
      component: Link
    }
  ]
})
