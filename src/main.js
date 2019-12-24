import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
import './mock/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

NProgress.inc(0.2)
NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false
})

Vue.prototype.$ajax = axios
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

// 配置axios http拦截器
axios.interceptors.request.use(function(config){
  NProgress.start();
  return config;
}, function(error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function(config){
  NProgress.done();
  return config;
}, function(error) {
  NProgress.done();
  return Promise.reject(error);
});

Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
