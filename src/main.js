// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {store} from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './style/index.css'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store: store,
  components: { App }
})
