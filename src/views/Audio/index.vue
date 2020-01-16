<template>
  <div class="audio">
    <div class='audiotitle'>影院</div>
      没有影院
      <div class='audiobox'>
        <div 
          class='audiolist'
        >
          <h1></h1>
          <span></span>
          <p></p>
        </div>
      </div>
      <tabber></tabber>
  </div>
</template>

<script>
import tabber from '../../components/tabbar'
export default {
  components:{
    tabber
  },
  created(){
    // this.$http.get('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9016500', {
    //   header:{
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15785412602005749727332","bc":"110100"}',
    //     'X-Host': 'mall.film-ticket.cinema.list'
    //   }
    // }).then(res =>{
    //   console.log(res)
    // })
  }
}
</script>

<style>
    .audiotitle{
      width:100%;
      background:#b0b0b0;
      height:0.5rem;
      line-height:0.5rem;
      text-align:center;
      font-size:0.18rem;
      position:fixed;
      top:0;
      left:0;
    }
</style>