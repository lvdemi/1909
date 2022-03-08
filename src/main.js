import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'

//引入stylesheets下的main.scss
import './stylesheets/main.scss'
//移入rem文件
import './modules/rem'
//引入异步请求文件
import axios from 'axios'
//引入图片懒加载
import { Lazyload, Cell } from 'vant';
// options 为可选参数，无则不传

//向下滚动加载新数据
import { List } from 'vant';
import {
  InfiniteScroll,
  Tabbar,
  TabItem,
  Button,
  Cell as MyCell,
  Header
} from 'mint-ui';

Vue.use(Lazyload);
Vue.use(MintUI)
Vue.use(List);
Vue.use(Cell)
Vue.use(InfiniteScroll);
Vue.component("mt-button", Button);
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-cell", MyCell);
Vue.component("mt-header", Header);


Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
