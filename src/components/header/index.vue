<template>
  <div class="header" v-if="flag">
      <div class="left">
          <i :class="['fa','fa-' + icon]"></i>
          <p>{{title}}</p>
      </div>
      <div class="right">
          <i class="fa fa-cloud"></i>
          <p>天气</p>
      </div>
  </div>
</template>

<script>
//引入全局路由，编写路由守卫
import router from '../../router/index'

export default {
    data(){
        return {
            icon: 'home',
            title: '首页',
            flag: true
        }
    },
    created(){
        //全局前置的路由守卫
        router.beforeEach((to, from, next) =>{
            if(to.name === this.title){
                console.log('进入了' + this.title)
            }
            switch(to.name){
                case 'home':
                    this.title = '首页'
                    this.icon = 'home'
                    this.flag = true
                break;
                case 'audio':
                    this.title = '影音'
                    this.icon = 'caret-square-o-right'
                    this.flag = true
                break;
                case 'broadcast':
                    this.title = '广播'
                    this.icon = 'bullhorn'
                    this.flag = true
                break;
                case 'group':
                    this.title = '分组'
                    this.icon = 'users'
                    this.flag = true
                break;
                case 'mine':
                    this.title = '我的'
                    this.icon = 'user-circle'
                    this.flag = true
                break;
                default:
                break;
            }


            next();
        })
    }
}
</script>

<style lang='scss'>
    .header{
        width: 100%;
        height: 0.5rem;
        background: #424242;
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
        .left{
            display: flex;
            align-items: center;
            i{
                padding: 0 0.05rem;
                font-size: 0.18rem;
            }
            span{
                 font-size: 0.08rem;
            }
        }
        .right{
            display: flex;
            align-items: center;
            i{
                padding: 0 0.05rem;
                font-size: 0.16rem;
            }
            span{
                 font-size: 0.08rem;
            }
        }
    }
</style>