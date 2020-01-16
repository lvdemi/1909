<template>
  <div class="list">
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
       :label="'￥'+good.rating.average"
       v-for="good in goods"
       :key="good._id"
        >
            <mt-button  @click="addGoodInCar(good)" type="primary" size="small">购票</mt-button>
            <img slot="icon" :src="getImages(good.images.small)" width="80" height="80">
        </mt-cell>
  </div>
</template>

<script>
import utils from '../../modules/utils';
import {mapActions} from "vuex"
export default {
  data(){
    return{
     goods:[]
    }
  },
  created(){
    this.$http.get("/api/db/in_theaters").then(res=>{
      this.goods=res.data.object_list
    })
  },
  methods:{
    getImages:utils.getImages,
    ...mapActions(["addGoodInCar"])
  },


}
</script>

<style lang="scss">
  .list{
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