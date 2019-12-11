import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import adminRouter from './admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  //打包时，路由的配置
  //base : 'miaomaio'
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    adminRouter,
    {
      path : '/*',
      redirect : '/movie'
    }
  ]
})
