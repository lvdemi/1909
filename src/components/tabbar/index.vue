<template>
    <div class="tabbar border-1px" >
        <!-- tabber -->
                                                            <!-- 自定义事件写法 -->
        <item 
            :txt="i.txt" 
            :mark="i.mark" 
            :selected="selected" 
            @changeSelected="changeSelceted"  
            :changeSelected="changeSelceted"
            v-for="i in nav"
            :key="i.id"
            >
            <img :src="i.activeImage" alt="" slot='activeImage'>
            <img :src="i.normalImage" alt="" slot='normalImage'>
        </item>
    </div>
</template>

<script>
import item from './item'
export default {
    data(){
        // console.log(this.$route.name)
        return {
            selected : this.$route.name,
            nav: [
                //将图片当模块引入
                {id:1, txt:'首页', mark:'home', activeImage:require('../../assets/2-1.png'), normalImage:require('../../assets/2.png')},
                {id:2, txt:'影院', mark:'audio', activeImage:require('../../assets/3-3.png'), normalImage:require('../../assets/3.png')},
                // {id:3, txt:'广播', mark:'broadcast', activeImage:require('../../assets/ic_tab_broadcast_active.png'), normalImage:require('../../assets/ic_tab_broadcast_normal.png')},
                // {id:4, txt:'分组', mark:'group', activeImage:require('../../assets/ic_tab_group_active.png'), normalImage:require('../../assets/ic_tab_group_normal.png')},
                {id:5, txt:'我的', mark:'mine', activeImage:require('../../assets/1-1.png'), normalImage:require('../../assets/1.png')},
            ]
        }
    },
    methods: {
        changeSelceted(selected){
            this.selected = selected
        }
    },
    components: {
        item
    }
}
</script>

<style lang='scss'>
    .tabbar{
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0px;
        width: 100%;
        justify-content: space-between;
        background: #fff;
        padding: 0.05rem 0.05rem;
        border-top: 1px solid #cccccc;
    }
</style>