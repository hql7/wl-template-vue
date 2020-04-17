import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 导入插件
import "./plugins";
// 导入需要全局注册的公共业务组件
import "./components";
// 导入需要全局注册的公共ui组件及工具类注册
import "./library/install";
// 导入鉴权系统
import '@/auth'
// 开发环境导入api mock数据
import '../mock/install'

// 导入全局常量 
import global from "./global"
Vue.prototype.$global = global;

// 导入主工具库lodash
import _ from 'lodash';
Vue.prototype.$_ = _;

// 导入封装后的本地数据库lowdb类
import wldb from "./db"
Vue.prototype.$wldb = wldb;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
