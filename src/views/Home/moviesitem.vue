<template>
  <div class="moviesitem">
      <router-link 
        tag='div'
        class="itemleft"
        :to="{name:'detail', params:{id: movie.id}}"
      >
          <img v-lazy="getImages(movie.images.small)" alt="">
      </router-link>
      <div class="itemright">
          <h1 class="title">片名：《{{movie.title}}》</h1>
          <p class="rating">评分：<span>{{movie.rating.average}}</span></p>
          <p class="director">导演：{{movie.directors[0].name}}</p>
          <P class="type">类型：{{movie.genres[0]}}</P>
      </div>
      <!-- <div class='itembutton'>
          <div>购票</div>
      </div> -->
  </div>
</template>

<script>
import utils from '../../modules/utils'

export default {
    props: ['movie'],
    methods: {
        getImages: utils.getImages,
    },
}
</script>

<style lang='scss'>
    .moviesitem{
        width: 100%;
        height: 1.7rem;
        background: #f2f2f2;
        margin-bottom: 0.1rem;
        display: flex;
        .itemleft{
            margin: 0.1rem 0.2rem 0.1rem 0.2rem;
            width: 1rem;
            // background: skyblue;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .itemright{
            width: 2rem;
            height: 1.5rem;
            // background: red;
            margin-top: 0.2rem;
            h1{
                margin:0.1rem 0 0.12rem 0;
                font-size: 0.16rem;
                text-overflow: ellipsis;
                // background: pink;
            }
            p{
                line-height: 0.26rem;
                span{
                    color: #ff5700;
                }
            }
        }
      /*   .itembutton{
            padding-right: 0.2rem;
            display: flex;
            align-items: center;
            div{
                width:0.5rem;
                height:0.25rem;
                background:#ff4d64;
                color:#fff;
                line-height:0.25rem;
                text-align:center;
                border-radius: 10px;
            }
        } */
    }
</style>