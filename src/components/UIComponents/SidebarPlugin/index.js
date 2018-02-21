import Sidebar from './SideBar.vue'
import Language from 'src/localize.js'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: Language('side_bar', 'dashboard'),
      icon: 'ti-panel',
      path: '/admin/overview'
    },
    {
      name: Language('side_bar', 'profile'),
      icon: 'ti-user',
      path: '/admin/stats'
    },
    {
      name: Language('side_bar', 'maps'),
      icon: 'ti-map',
      path: '/admin/maps'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
