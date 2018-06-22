import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Now from '../components/Now'
import Will from '../components/Will'
import Hot from '../components/Hot'
import Rank from '../components/Rank'
import Mine from '../components/Mine'
import Movie from '../components/Movie'
import Search from '../components/Search'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Now
    },
    {
      path: '/now',
      name: 'now',
      component: Now
    },
    {
      path: '/will',
      name: 'will',
      component: Will
    },
    {
      path: '/hot',
      name: 'hot',
      component: Hot
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
