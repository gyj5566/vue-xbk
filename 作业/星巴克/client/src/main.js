// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "../static/css/common.scss"
import "lib-flexible"
import "../static/fonts/iconfont.css"
import router from './router'
import plugins from "./plugins/"
import store from "./store/store.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(plugins)
Vue.use(ElementUI);

Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
let vm=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
export default vm