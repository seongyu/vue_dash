import Vue from 'vue'
import VueRouter from 'vue-router'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App'

// router setup
import routes from './routes/routes'

// library imports
import Chartist from 'chartist'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/paper-dashboard.scss'
import 'es6-promise/auto'

// custom add library
import Language from './localize.js'
import moment from 'moment'
import flow from '../static/go.cus.min.js'
// import VueWebsocket from 'vue-websocket'
// Vue.use(VueWebsocket, 'ws://localhost:30000/')
// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)
Vue.use(SideBar)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

Vue.prototype.$loading = function (isShow) {
  if (isShow) {
    document.getElementById('loading').style.visibility = 'visible'
  } else {
    document.getElementById('loading').style.visibility = 'hidden'
  }
}

Vue.prototype.moment = moment
Vue.prototype.$language = Language
// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

Object.defineProperty(Vue.prototype, '$Flowchart', { value: flow })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})
