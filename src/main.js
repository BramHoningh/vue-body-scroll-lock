import Vue from 'vue'
import App from './App.vue'
import BodyScrollLockDirective from './directives/v-body-scroll-lock';

Vue.config.productionTip = false

Vue.use(BodyScrollLockDirective);

new Vue({
  render: h => h(App),
}).$mount('#app')
