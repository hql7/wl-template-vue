import Vue from "vue";
import FtUi from "./ui/index";
import * as FUNCONVUE from "./js/func-mounted-on-vue"
Vue.use(FtUi);

Object.keys(FUNCONVUE).forEach(i => {
  Vue.prototype[`$${i}`] = FUNCONVUE[i]
});
