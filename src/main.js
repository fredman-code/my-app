import Vue from "vue";
import XypointsDashboard from "./screens/XypointsDashboard.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(XypointsDashboard)
}).$mount("#app");