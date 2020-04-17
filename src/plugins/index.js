import Vue from "vue";
import { wlMessage, wlConfirm, wlPrompt } from "./element"
import Element from "./element";
Element.components.forEach(item => {
  Vue.use(item)
})

Vue.prototype.$ELEMENT = { size: 'small' };
Vue.prototype.$message = wlMessage;
Vue.prototype.$confirm = wlConfirm;
Vue.prototype.$prompt = wlPrompt;