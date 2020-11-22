import "./firebase"
import Vue from 'vue'
import App from './App.vue'
import VueFire from "vuefire";
import { firestorePlugin } from "vuefire";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
Vue.use(VueFire);

new Vue({
  el: '#app',
  render: h => h(App)
})
