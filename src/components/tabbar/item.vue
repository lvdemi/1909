<template>
  <div class="item" @click="clickItem">
      <span>
          <slot name="activeImage" v-if="flag"></slot>
          <slot name="normalImage" v-else></slot>
      </span>
      <span :class="{active:flag}" style="margin-top:0.05rem;">
          
          {{txt}}
      </span>
  </div>
</template>

<script>
export default {
    props: ['txt', 'mark', 'selected', /*'changeSelected'*/],
    computed:{
        flag(){
            if(this.mark === this.selected){
                return true;

            }
                return false
        }
    },
    methods:{
        clickItem(){
            // this.changeSelected(this.mark);
            //自定义事件写法
            // this.$emit('changeSelected', this.mark)
            //编程式实现跳转
            this.$router.push('/'+ this.mark)
        }
    }
}
</script>

<style lang='scss'>
    .item{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.07rem;
        img{
            width: 0.25rem;
            height: 0.25rem;
        }
        .active{
            color: #ff4d64;
        }
    }
</style>