import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import audio from './audio'
// import group from './group'
// import broadcast from './broadcast'
import mine from './mine'
import detail from './detail'

Vue.use(VueRouter)

const routes = [
  //重定向
  {path:'/', redirect: '/home'},
  home, 
  audio, 
  // group, 
  // broadcast, 
  mine,
  detail,
  {path: '/404', component: ()=> import('../views/NotFound')},
  {path: '*', redirect: '/404'}
]

const router = new VueRouter({
  routes
})

export default router
