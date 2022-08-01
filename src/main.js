import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

console.debug("publicPath (base):", process.env.BASE_URL);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
