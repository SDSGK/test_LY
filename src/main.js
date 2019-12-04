import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./lib/hotcss/hotcss.js";/* 引入公共js */
import helper from './lib/helper';/* 辅助功能 */
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
// import VeeValidate from 'vee-validate';
// import mui from "vue-awesome-mui";

Vue.config.productionTip = false;
// Vue.use(mui); /* mui 移动化组件库 可控制界面的返回规则 */
Vue.use(Mint); 
// Vue.use(VeeValidate);/* 表单验证插件 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
