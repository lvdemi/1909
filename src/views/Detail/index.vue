<template>
  <div class="detail">
      <div v-if='!movie' class='loading'></div>
      <div v-else>
          <!-- 头部 -->
            <mt-header fixed>
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <!-- 头部 -->
            <div class="movie-info" style="background-color:#326665">
                <div class="crumbs-nav">
                    <a href="/">猫眼电影</a>&nbsp;&gt;&nbsp;<span>{{movie.title}}</span>
                </div>
                <div class="movie-info-top">
                    <div class="movie-cover">
                        <a data-bid="b_aN5Ak" href="#">
                            <img class="img noneBg poster-play" alt="" :src="getImages(movie.images.small)">
                        </a>
                    </div>
                    <div class="movie-desc">
                        <div class="movie-desc-top">
                            <div class="movie-cn-name">{{movie.title}}</div>
                            <div class="movie-en-name">{{movie.countries[0]}}</div>
                            <div class="movie-other-info">
                                <div class="movie-type">
                                    <span class="movie-cat">喜剧 / 爱情 / 剧情</span>
                                </div>
                                <div class="actors">{{movie.aka[0]}}</div>
                                <div class="movie-show-time">
                                    <span>{{movie.rating.average}}</span>

                                </div>
                             </div>
                         </div>
                    </div>
                </div>
                <!-- 简介 -->
                <div class="brief-introduction">
                    <div class="title">
                        <span>简介</span>
                    </div>
                    <div data-bid="b_y93QJ" class="content height-limit">
                        <p id="brief-introduction-content" class="">{{movie.summary}}</p>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import utils from '../../modules/utils'
export default {
    data(){
        return{
            movie: null
        }
    },
    created(){
        const id = this.$route.params.id
        this.$http.get(`/api/db/movie_detail/${id}`)
        .then(res =>{
            console.log(res.data)
            this.movie = res.data
        })
    },
    methods:{
        getImages:utils.getImages
    }
}
</script>

<style lang='scss'>
    .mint-header{
      background-color: #859099;
    }
    .movie-info{
        padding: .42rem .1rem;
        color: #fff;
        position: relative;
        .crumbs-nav{
            margin-bottom: .1rem;
            color: #ccc;
            a{
                font-size:14px;
                color:#ccc;
            }
        }
        .movie-info-top{
            overflow: hidden;
            display: flex;
            justify-content: flex-start;
        }
        .movie-cover {
            float: left;
            height: 1.5rem;
            width: 1rem;
            position: relative;
            flex-shrink: 0;
         img.poster-play {
            border: 0;
            display: inline-block;
            height: 1.5rem;
            width: 100%;
          }
        }
        .movie-desc{
            flex-grow: 1;
            margin-left: .1rem;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            overflow: hidden;
            .movie-desc-top{
                display: flex;
                flex-flow: column;
                justify-content: flex-start;
                flex-grow: 1;
                .movie-cn-name{
                    font-size: .2rem;
                    width: 100%;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    font-weight: 700;
                }
                .movie-other-info{
                        display: flex;
                        flex-grow: 1;
                        flex-flow: column;
                        justify-content: center;
                    .movie-type{
                        font-size:12px;
                        display: flex;
                        align-items: center;
                        .movie-cat{
                            opacity: .6;
                        }
                    }
                    .actors{
                        opacity: .6;
                        font-size: 12px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        margin: 0;
                    }
                    .movie-show-time{
                        span{
                        opacity: .6;
                         font-size:12px;
                        }
                    }
                }
            }
        }
    }
     .brief-introduction{
            position: relative;
            padding: .32rem 0 0;
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
                font-size:15px;
            }
        }
        .content.height-limit {
            height: 2.3rem;
            margin-bottom: .04rem;
            font-size:15px;
            overflow: hidden;
            text-align: justify;
            p {
                margin: .14rem 0;
            }
        }
     }

</style>