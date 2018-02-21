<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">{{$language('nav_bar', 'title')}}</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">{{routeName}}</a>
      </div>
      <div class="collapse navbar-collapse">
        <!-- <ul class="nav navbar-nav navbar-right">
          <li class="open">
            <a href="#/admin/overview" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <i class="ti-panel"></i>
              <p>{{$language('nav_bar', 'stats')}}</p>
            </a>
          </li>
             <drop-down :title="$language('nav_bar', 'notifications')" icon="ti-bell">
               <li v-for="(ls, i) in notiList"><a :href="'#'+ls.link">{{ls.text}} {{i}}</a></li>
             </drop-down>
          <li>
            <a href="#" class="btn-rotate">
              <i class="ti-settings"></i>
              <p>
                {{$language('nav_bar', 'settings')}}
              </p>
            </a>
          </li>
        </ul> -->
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false,
        notiList: [
        { text: 'Notification', link: '/admin/notifications' },
        { text: 'Notification', link: '/admin/notifications' },
        { text: 'Notification', link: '/admin/notifications' },
        { text: 'Notification', link: '/admin/notifications' },
        { text: 'Notification', link: '/admin/notifications' }
        ]
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
