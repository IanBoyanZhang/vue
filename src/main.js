import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

import { store } from './store/store';

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

const First = { template: '<div><h2>First child page</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})


const app = new Vue({
  router: router,
  render: h => h(App),
  store,

  // components: { firstcomponent, secondcomponent }
}).$mount('#app')
