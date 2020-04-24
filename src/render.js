import { render } from "wl-vue"
import App from "./App.vue";
import router from "./router";
import store from "./store";
import nextRouter from "./router/next-router"
import { getMenuApi } from "./api/menu"

// 声明鉴权需要的参数
const routeOptions = {
  apiFn: getMenuApi
}

const vueRender = () => render({ root: App, router, store, routeOptions, nextRouter });

export default vueRender;