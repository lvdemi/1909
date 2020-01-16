<template>
    
    <div 
        class="moviesbox" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance='10'
    >
        
        <!-- <div class="loading" v-if='movies.length ===0'></div> -->
        <!-- <van-loading size="24px"  vertical>加载中...</van-loading> -->
            <moviesitem
                v-for='movie in movies'
                :key="movie.id"
                :movie='movie'

            >
            </moviesitem>
    </div>
</template>

<script>
import moviesitem from './moviesitem'
import utils from '../../modules/utils';
import { Toast } from 'mint-ui';

export default {
    props: ['type'],
    watch: {
        type(val){
            this.movies = []
            this.page = 1;
            this.limit = 6;
            this.hasMore = true;
            this.getMovie()
        }
    },
    data(){
        return {
            movies: [],
            loading: false,
            page: 1,
            limit: 6,
            //判断是否还有数据
            hasMore: true
        }
    },
    components: {
        moviesitem
    },
    methods: {
        getImages:utils.getImages,
        loadMore() {
            // console.log('loadmore...')
            //判断hasMore的状态，是否继续请求数据
            if(!this.hasMore){
                this.loading = true
                let instance = Toast({
                message: '一滴都没了啊老铁！！',
                duration: 1500,
                // iconClass: 'fa fa-refresh fa-spin',
            });
                return false
            }
            this.loading = true;
            // setTimeout(() => {
            //     let last = this.list[this.list.length - 1];
            //     for (let i = 1; i <= 10; i++) {
            //     this.list.push(last + i);
            //     }
            //     this.loading = false;
            // }, 2500);
            this.getMovie();
        },
        getMovie(){
            let instance = Toast({
                message: '老铁急什么！！',
                iconClass: 'fa fa-refresh fa-spin',
                // duration: -1,
                //position: 'bottom'
            });
            //先关闭无限滚动，等待数据加载
            this.loading= true;
            let{page, limit} = this
            // let page = this.page
            // let limit = this.limit
            this.$http.get('/api/db/' + this.type, {
                params: {
                    page,
                    limit
                }
            }).then(res =>{
                instance.close();
                // console.log(res.data.object_list);
                this.movies=this.movies.concat(res.data.object_list);
                //数据回来之后开启无线滚动
                this.loading = false
                //判断是否还有数据
                if(this.limit * this.page >= res.data.total){
                    this.hasMore = false
                    return false
                }
                // console.log(this.movies)
                this.page++
            })
        }
    },
    created(){
        
    },
}
</script>

<style>
    .loading{
        width: 0.5rem;
        height: 0.5rem;
        background-size: cover;
        position: relative;
        left: 50%;
        margin-left: -0.25rem;
    }
    .mint-toast-icon{
        font-size: 0.24rem;
    }
    .mint-toast is-placemiddle{
        padding: 0.1rem;
    }
</style>