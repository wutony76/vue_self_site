import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './lang'
import "./assets/css/app.css"
import "./assets/css/lynx.css"

import layer from 'vue2-layer-mobile'
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import Cookies from 'js-cookie'
import vue_resource from 'vue-resource'
//import {Base64} from 'js-base64'
import {mixapi} from './api/mix.js'

Vue.use(layer)
Vue.use(vue_resource)


//Vue.prototype.$layer = layer(Vue);
router.beforeEach((to, from, next) => {
  
  //mixapi_install(Vue);
  Vue.prototype.$mixapi = mixapi;
  

  let token = Cookies.get("access_token");

  console.log(to.name);
  console.log(token);


  /*

  
  if (to.name == 'Login') {
    next();
    return;
  }

  if(to.name == 'RegisterNew'){
    next();
    return;
  }

  if(to.name == 'Register'){
    next();
    return;
  }

  if(to.name == 'RegisterActive'){
    next();
    return;
  }
  
  if (!token) {
    next('/login');
    return;
  }
  */


  //Vue.prototype.$authToken = token;
  Vue.prototype.$accessToken = token;

  console.log(to);
  next();
})



Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
  created: function() {
    this.$mixapi.setup(this);
    document.title = 'Lynx';
    //console.log("Vue: created");
  }
}).$mount('#app')

//vm.$mixapi.setup(vm);


