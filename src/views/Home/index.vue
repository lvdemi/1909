<template>
    <div class="home">
        <tabbar></tabbar>
        <div class="navbar" :class="{fixedTop:isFixed}">
            <div class="logo">
              <img src="../../assets/4.svg" alt="">
            </div>
            <span
              v-for="i in nav"
              :key="i.id"
              :type="i.type"
              :class='{active:type === i.type}'
              @click="type=i.type"
            >{{i.title}}</span>
        </div>
        <div :class="{fixedTop:isFixed}">
          <moviesbox :type='type'></moviesbox>
        </div>
    </div>
</template>

<script>
import tabbar from '../../components/tabbar'
import banner from '../../components/banner'
import navbar from '../../components/navbar'
import moviesbox from './moviesbox'

export default {
  data(){
      return{
          type: 'in_theaters',
          isFixed: false,
          nav:[
              {id:1, title: '正在热映', type: 'in_theaters'},
              {id:2, title: '即将上映', type: 'coming_soon'}
          ]
      }
  },
  methods:{
      getMovie(){
            this.$http.get('/api/db/' + this.nav.type, {
          params: {
              limit: 6
          }
          }).then(res =>{
              // console.log(res.data.object_list);
              this.movies= res.data.object_list;
              // console.log(this.movies)
          })
      },
      //移出滚动事件，不影响其他页面
      listenScroll() {
        // console.log('滚动触发')
        let scrollTop =document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop >= 260 && !this.isFixed){
          this.isFixed = true;
        }else if(scrollTop < 260 && this.isFixed){
          this.isFixed = false;
        }
      }
  },
  created(){
    window.addEventListener("scroll", this.listenScroll)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.listenScroll)
  },
  components:{
    tabbar,
    banner,
    navbar,
    moviesbox
  }
}
</script>

<style lang='scss' scoped>
.home{
  padding-bottom: 0.4rem;
  .fixedTop{
    margin-top: 1rem;
  }
  .navbar{
    display: flex;
    align-items: center;
    line-height: 0.5rem;
    justify-content: space-around;
    margin: 0rem 0 0.1rem 0;
    background: #f2f2f2;
    position: relative;
    z-index: 10;
    &.fixedTop{
      position: fixed;
      top: 0rem;
      left: 0;
      width: 100%;
      margin-top: 0;
      background: #fafafa;
      // transition: all 0.3s;
    }
    span{
      position: relative;
      transition: all 0.3s;
      &::after{
        content: '';
        position: absolute;
        width: 0.6rem;
        height: 0.05rem;
        // background: transparent;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s;
      }
    }
    .logo{
      img{
        width: 0.3rem;
        height: 0.3rem;
      }
    }
  }
  .moviesbox{
    margin-top: 0.2rem;
  }
  .active{
    color: #ff4d64;
    font-size: 0.18rem;
    &::after{
      content: '';
      background: #ff4d64;
    }
  }
}
</style>