<template>
  <div id="app">
    <!-- <Appheader></Appheader> -->
    <!-- 这里是App.vue -->
    <router-view></router-view>
    <!-- <tabber></tabber> -->
  </div>
</template>

<style lang="scss">
   
</style>

<script>
//引入导航组件
// import Appheader from './components/header'
export default {
  components:{
    // Appheader
  },
  created(){
    this.$router.push('/');
    this.$store.dispatch("initCar")
  }
}
</script>