import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "./cube-ui";
import "./assets/iconfont/iconfont.css";

import request from "./api/index";
request({
  type: "news"
}).then(response => {
  console.log(response);
});
request({
  type: "newsbydate",
  param: "20190803"
}).then(response => {
  console.log(response);
});
request({
  type: "newsbyid",
  param: "9714023"
}).then(response => {
  console.log(response);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
