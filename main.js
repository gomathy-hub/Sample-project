import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import BootstrapVue from 'bootstrap-vue';

Vue.use(Vuetify);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
