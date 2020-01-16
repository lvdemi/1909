<template>
  <div class="car">
     <!-- 头部 -->
            <mt-header fixed >
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
       <!-- 头部 -->
    <mt-cell 
       :title="good.title"
       :label="'￥'+good.rating.average+'*'+good.num"
       v-for="good in goods"
       :key="good._id"
        >
            <mt-button  @click="addGoodInCar(good)" type="primary" size="small">+</mt-button>
            <mt-button @click="redeceGoodInCar(good)" type="primary" size="small">-</mt-button>
            <img slot="icon" :src="getImages(good.images.small)" width="80" height="80">
        </mt-cell>
       <mt-button type="primary" size="small">总价:{{computeTotal.average}}</mt-button> 
       <mt-button type="primary" size="small">总数:{{computeTotal.num}}</mt-button>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
import utils from '../../modules/utils';
export default {
 computed:{
   ...mapState({
     goods:state=>state.myCar.cars
   }),
   ...mapGetters(["computeTotal"])
  },
  methods:{
    getImages:utils.getImages,
    ...mapActions(["addGoodInCar","redeceGoodInCar"])

  },


}
</script>

<style lang="scss">
  .car{
    margin-top:40px;
   .mint-header{
    background-color:#7f8284;
    }
    .mint-button{
    background-color:#7f8284;
    }
   .mint-cell-text{
    display:block;
    margin-left:80px;
    margin-top:-50px;
    }
    .mint-cell-label{
      margin-left:80px;
      margin-top:25px;
    }
  }
</style>